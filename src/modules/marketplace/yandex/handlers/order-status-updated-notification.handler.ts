import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import { Entity, Meta } from 'moysklad-ts'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { OrderStatusUpdatedNotificationDTO } from '../dto/index.js'
import { GetOrderResponse, GetOrdersStatsRequest, GetOrdersStatsResponse } from '../types/api.js'
import { OrderStatusType, OrderSubstatusType } from '../types/yandex-types.js'
import { prepareStatusesForCustomerOrders } from '../utils/order-status.mapper.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

dayjs.extend(customParseFormat)

/**
 * Обработчик для уведомлений об изменении статуса заказа.
 */
@Injectable()
export class OrderStatusUpdatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления об изменении статуса заказа.
	 * @param notification DTO для уведомления об изменении статуса заказа.
	 */
	async handle(notification: OrderStatusUpdatedNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { orderId, campaignId, status, substatus, updatedAt } = notification

			if (substatus === OrderSubstatusType.STARTED && status === OrderStatusType.PROCESSING) {
				return
			}

			const store = campaignId === 23726642 ? 'Haifisch' : 'Top'

			this.logger.log(`[${store}]: Изменение статуса заказа ${orderId} в МС...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: orderId.toString(),
				},
			})

			const [orderInMs] = rows

			if (orderInMs === undefined || orderInMs === null) {
				this.logger.error(`[${store}]: Заказ ${orderId} не найден в МС`)
				return
			}

			this.logger.log(`[${store}]: Заказ ${orderId} найден в МС (id=${orderInMs.id})`)

			const { order } = await this.api.get<GetOrderResponse>(
				`campaigns/${campaignId}/orders/${orderId}`,
				store,
			)

			if (order === undefined) {
				this.logger.warn(`[${store}]: Заказ ${orderId} не найден в системе Яндекс Маркета`)
				return
			}

			this.logger.log(`[${store}]: Получены данные заказа ${orderId} из Яндекс Маркета...`)

			const newMsStatus = prepareStatusesForCustomerOrders(status, substatus)

			this.logger.log(`[${store}]: Новый статус заказа - ${JSON.stringify(newMsStatus?.name)}`)

			await ms.customerOrder.update(orderInMs.id, {
				state: newMsStatus,
			})

			this.logger.log(`[${store}]: Статус заказа ${orderId} успешно обновлен в МС...`)

			if (substatus === OrderSubstatusType.SHIPPED || status === OrderStatusType.DELIVERY) {
				this.logger.log(`[${store}]: Заказ ${orderId} имеет сабстатус SHIPPED или статус DELIVERY — создаём отгрузку...`)

				const { rows } = await ms.customerOrder.list({
					filter: {
						id: orderInMs.id,
					},
					expand: {
						positions: true,
					},
				})

				const [orderWithPositions] = rows

				const { rows: demandRows } = await ms.demand.list({
					filter: {
						name: orderId.toString(),
					},
				})

				if (demandRows.length > 0) {
					this.logger.warn(`[${store}]: Отгрузка для заказа ${orderId} уже существует в МС id=${demandRows[0].id}`)
					return
				}

				const template = await ms.demand.template({
					customerOrder: {
						meta: { href: orderWithPositions.meta.href, type: orderWithPositions.meta.type, mediaType: orderWithPositions.meta.mediaType },
					},
				})

				const demand = await ms.demand.upsert({
					...template,
					moment: dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss.SSS'),
					name: orderWithPositions.name,
				})

				this.logger.log(`[${store}]: Отгрузка для заказа ${orderId} создана в МС: id=${demand.id}`)
			}

			if (status === OrderStatusType.DELIVERED) {
				this.logger.log(`[${store}]: Заказ ${orderId} имеет статус DELIVERED — создаем входящие платежи...`)

				const { result } = await this.api.post<GetOrdersStatsResponse, GetOrdersStatsRequest>(
					`campaigns/${campaignId}/stats/orders`,
					store,
					{
						orders: [orderId],
					},
				)

				if (!result || result.orders.length === 0) {
					this.logger.warn(`[${store}]: Не удалось получить статистику по заказу ${orderId}`)
					return
				}

				const { rows: paymentinRows } = await ms.paymentIn.list({
					filter: {
						name: orderId.toString(),
					},
				})

				if (paymentinRows.length > 0) {
					this.logger.warn(`[${store}]: Входящие платежи для заказа ${orderId} уже существуют в МС id=${paymentinRows[0].id}`)
					return
				}

				const orderStats = result.orders?.[0]

				const totalPayments = orderStats.payments
					?.filter(p => p.type === 'PAYMENT')
					.reduce((sum, p) => sum + (p.total ?? 0), 0) ?? 0

				const totalSubsidies = orderStats.subsidies
					?.filter(s => s.operationType === 'ACCRUAL')
					.reduce((sum, s) => sum + (s.amount ?? 0), 0) ?? 0

				const totalAmount = totalPayments + totalSubsidies

				const { rows } = await ms.demand.list({
					filter: {
						name: orderId.toString(),
					},
				})

				const [demandInMs] = rows

				const { owner, group, organization, salesChannel, shared, agent, rate, project, vatSum } = demandInMs

				const msPayments = await ms.paymentIn.create({
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
							meta: demandInMs.meta as unknown as Meta<Entity.Demand>,
							linkedSum: totalAmount * 100,
						},
					],
				})

				this.logger.log(`[${store}]: В заказе ${orderId} успешно созданы входящие платежи в МС: id=${msPayments.id}`)
			}
		}
		catch (error) {
			this.handleError(`Ошибка изменения статуса заказа ${notification.orderId}`, error)
		}
	}
}
