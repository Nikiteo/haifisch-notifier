import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import { DemandOverheadDistribution, Entity, MediaType, Meta } from 'moysklad-ts'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { StateChangedNotificationDTO } from '../dto/index.js'
import { OzonApiService } from '../ozon.api.js'
import { FinanceTransactionsRequest, FinanceTransactionsResponse, OzonResponse, PostingFbs, PostingsFbsRequest } from '../types/api.js'
import { PostingStatus } from '../types/ozon-types.js'
import { prepareStatusesForCustomerOrders } from '../utils/order-status.mapper.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

dayjs.extend(customParseFormat)

/**
 * Обработчик для уведомлений об изменении статуса заказа.
 */
@Injectable()
export class OrderStatusUpdatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: OzonApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления об изменении статуса заказа.
	 * @param notification DTO для уведомления об изменении статуса заказа.
	 */
	async handle(notification: StateChangedNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { posting_number, new_state, changed_state_date } = notification
			const store = 'OZON'

			this.logger.log(`[${store}]: Изменение статуса заказа ${posting_number} в МС...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: posting_number.toString(),
				},
			})

			const [orderInMs] = rows

			if (orderInMs === undefined || orderInMs === null) {
				this.logger.error(`[${store}]: Заказ ${posting_number} не найден в МС`)
				return
			}

			this.logger.log(`[${store}]: Заказ ${posting_number} найден в МС (id=${orderInMs.id})`)

			const { result } = await this.api.post<OzonResponse<PostingFbs>, PostingsFbsRequest>(
				`v3/posting/fbs/get`,
				{
					posting_number,
					with: {
						analytics_data: true,
						barcodes: false,
						financial_data: true,
						translit: true,
					},
				},
			)

			if (result === undefined) {
				this.logger.warn(`[${store}]: Заказ ${posting_number} не найден в системе Ozon`)
				return
			}

			this.logger.log(`[${store}]: Получены данные заказа ${posting_number} из Ozon...`)

			const newMsStatus = prepareStatusesForCustomerOrders(new_state)

			this.logger.log(`[${store}]: Новый статус заказа - ${JSON.stringify(newMsStatus?.name)}`)

			await ms.customerOrder.update(orderInMs.id, {
				state: newMsStatus,
			})

			this.logger.log(`[${store}]: Статус заказа ${posting_number} успешно обновлен в МС...`)

			if (new_state === PostingStatus.POSTING_ON_WAY_TO_CITY) {
				this.logger.log(`[${store}]: Заказ ${posting_number} имеет статус POSTING_ON_WAY_TO_CITY — создаём отгрузку...`)

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
						name: posting_number.toString(),
					},
				})

				if (demandRows.length > 0) {
					this.logger.warn(`[${store}]: Отгрузка для заказа ${posting_number} уже существует в МС id=${demandRows[0].id}`)
					return
				}

				const template = await ms.demand.template({
					customerOrder: {
						meta: { href: orderWithPositions.meta.href, type: orderWithPositions.meta.type, mediaType: orderWithPositions.meta.mediaType },
					},
				})

				const demand = await ms.demand.upsert({
					...template,
					moment: dayjs(changed_state_date).format('YYYY-MM-DD HH:mm:ss.SSS'),
					name: orderWithPositions.name,
				})

				this.logger.log(`[${store}]: Отгрузка для заказа ${posting_number} создана в МС: id=${demand.id}`)
			}

			if (new_state === PostingStatus.POSTING_DELIVERED) {
				this.logger.log(`[${store}]: Заказ ${posting_number} имеет статус POSTING_DELIVERED — создаем входящие платежи...`)

				const { rows: paymentinRows } = await ms.paymentIn.list({
					filter: {
						name: posting_number.toString(),
					},
				})

				if (paymentinRows.length > 0) {
					this.logger.warn(`[${store}]: Входящие платежи для заказа ${posting_number} уже существуют в МС id=${paymentinRows[0].id}`)
					return
				}

				const { result } = await this.api.post<FinanceTransactionsResponse, FinanceTransactionsRequest>(
					`/v3/finance/transaction/totals`,
					{
						posting_number,
						transaction_type: 'all',
					},
				)

				this.logger.log(`[${store}]: Получены данные по транзакциям...`)

				const totalCommissions = Object.entries(result ?? {})
					.filter(([key]) => key !== 'accruals_for_sale')
					.reduce((total, [, value]) => total + Math.abs(value as number), 0)

				const { rows: demandRows } = await ms.demand.list({
					filter: {
						name: posting_number.toString(),
					},
				})

				const [demandInMs] = demandRows

				this.logger.log(`[${store}]: Получены данные по отгрузке...`)

				const { rows: orderRows } = await ms.customerOrder.list({
					filter: {
						name: posting_number.toString(),
					},
				})

				const [orderInMs] = orderRows

				this.logger.log(`[${store}]: Получены данные по заказу...`)

				await ms.customerOrder.update(orderInMs.id, {
					attributes: [
						{
							meta: {
								href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/279ba9fa-9d67-11ee-0a80-09f500178da3',
								type: Entity.AttributeMetadata,
								mediaType: MediaType.Json,
							},
							value: totalCommissions,
						},
					],
				})

				this.logger.log(`[${store}]: Добавлены комиссии к заказу...`)

				await ms.client.put(ms.client.buildUrl(['entity', 'demand', demandInMs.id]).toString(), {
					body: {
						overhead: {
							sum: totalCommissions * 100,
							distribution: DemandOverheadDistribution.Price,
						},
					},
				})

				this.logger.log(`[${store}]: Добавлены комиссии к отгрузке...`)

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
					name: posting_number.toString(),
					sum: (result?.accruals_for_sale ?? 0) * 100,
					moment: dayjs(changed_state_date).format('YYYY-MM-DD HH:mm:ss.SSS'),
					operations: [
						{
							meta: demandInMs.meta as unknown as Meta<Entity.Demand>,
							linkedSum: (result?.accruals_for_sale ?? 0) * 100,
						},
					],
				})

				this.logger.log(`[${store}]: В заказе ${posting_number} успешно созданы входящие платежи в МС: id=${msPayments.id}`)
			}
		}
		catch (error) {
			this.handleError(`Ошибка изменения статуса заказа Ozon ${notification.posting_number}`, error)
		}
	}
}
