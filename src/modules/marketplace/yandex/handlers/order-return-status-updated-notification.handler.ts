import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { Entity, Meta, UpdateMeta } from 'moysklad-ts'

import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { sourceStore, states } from '../database.js'
import { OrderReturnStatusUpdatedNotificationDTO } from '../dto/index.js'
import { GetOrdersStatsRequest, GetOrdersStatsResponse, GetReturnResponse, ReturnShipmentStatusType } from '../types/api.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

dayjs.extend(customParseFormat)

/**
 * Обработчик для уведомлений об изменении статуса невыкупа или возврата.
 */
@Injectable()
export class OrderReturnStatusUpdatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления об изменении статуса невыкупа или возврата.
	 * @param notification DTO для уведомления об изменении статуса невыкупа или возврата.
	 */
	async handle(notification: OrderReturnStatusUpdatedNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { orderId, updatedAt, campaignId, returnId, statuses } = notification

			const store = campaignId === 23726642 ? 'Haifisch' : 'Top'

			this.logger.log(`[${store}]: Обновление статуса невыкупа или возврата ${notification.orderId} в МС...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: orderId.toString(),
				},
			})

			const [orderInMs] = rows

			if (!orderInMs.id) {
				this.logger.error(`[${store}]: Заказ ${orderId} не найден в МС`)
				return
			}

			this.logger.log(`[${store}]: Заказ ${orderId} найден в МС id=${orderInMs.id}`)

			if (statuses.shipmentStatus === ReturnShipmentStatusType.PICKED) {
				await ms.customerOrder.update(orderInMs.id, {
					state: states.PICKED_REFUND,
				})

				this.logger.log(`[${store}]: Статус заказа ${orderId} успешно обновлен в МС...`)

				const { result } = await this.api.get<GetReturnResponse>(
					`campaigns/${campaignId}/orders/${orderId}/returns/${returnId}`,
					store,
				)

				if (!result) {
					this.logger.warn(`[${store}]: Не удалось получить статистику по возврату ${orderId}`)
					return
				}

				const { rows } = await ms.demand.list({
					filter: {
						name: orderId.toString(),
					},
					expand: {
						positions: true,
					},
				})

				if (rows.length === 0) {
					this.logger.warn(`[${store}]: Отгрузка для заказа ${orderId} не существует в МС`)
					return
				}

				const [demandInMs] = rows

				const template = await ms.salesReturn.template({
					demand: { meta: { href: demandInMs.meta.href, type: demandInMs.meta.type, mediaType: demandInMs.meta.mediaType } },
				})

				const salesReturn = await ms.salesReturn.upsert({
					...template,
					moment: dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss.SSS'),
					name: demandInMs.name,
					description: result.returnType === 'RETURN' ? 'Возврат' : 'Невыкуп',
					store: sourceStore as UpdateMeta<Entity.Store>,
				})

				this.logger.log(`[${store}]: Возврат покупателя для заказа ${orderId} создан в МС: id=${salesReturn.id}`)

				this.logger.log(`[${store}]: Заказ ${orderId} имеет статус PICKED — создаем исходящие платежи...`)

				const { result: statsResult } = await this.api.post<GetOrdersStatsResponse, GetOrdersStatsRequest>(
					`campaigns/${campaignId}/stats/orders`,
					store,
					{
						orders: [orderId],
					},
				)

				if (!statsResult || statsResult.orders.length === 0) {
					this.logger.warn(`[${store}]: Не удалось получить статистику по заказу ${orderId}`)
					return
				}

				const { rows: paymentoutRows } = await ms.paymentOut.list({
					filter: {
						name: orderId.toString(),
					},
				})

				if (paymentoutRows.length > 0) {
					this.logger.warn(`[${store}]: Исходящие платежи для заказа ${orderId} уже существуют в МС id=${paymentoutRows[0].id}`)
					return
				}

				const orderStats = statsResult.orders?.[0]

				const totalPayments = orderStats.payments
					?.filter(p => p.type === 'REFUND')
					.reduce((sum, p) => sum + (p.total ?? 0), 0) ?? 0

				const totalSubsidies = orderStats.subsidies
					?.filter(s => s.operationType === 'DEDUCTION')
					.reduce((sum, s) => sum + (s.amount ?? 0), 0) ?? 0

				const totalAmount = totalPayments + totalSubsidies

				const { owner, group, organization, salesChannel, shared, agent, rate, project, vatSum } = salesReturn

				const msPaymentOuts = await ms.paymentOut.create({
					owner,
					group,
					organization,
					salesChannel,
					shared,
					agent,
					rate,
					project,
					vatSum,
					name: orderId.toString(),
					sum: totalAmount * 100,
					moment: dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss.SSS'),
					operations: [
						{
							meta: salesReturn.meta as unknown as Meta<Entity.SalesReturn>,
							linkedSum: totalAmount * 100,
						},
					],
					expenseItem: {
						meta: {
							href: 'https://api.moysklad.ru/api/remap/1.2/entity/expenseitem/8dbf99a0-0a01-11e4-a743-002590a32f46',
							type: 'expenseitem',
							mediaType: 'application/json',
						},
					} as Meta<Entity.ExpenseItem>,
				})

				this.logger.log(`[${store}]: В заказе ${orderId} успешно созданы исходящие платежи в МС: id=${msPaymentOuts.id}`)
			}
		}
		catch (error) {
			this.handleError(`Ошибка изменения статуса невыкупа или возврата ${notification.orderId}`, error)
		}
	}
}
