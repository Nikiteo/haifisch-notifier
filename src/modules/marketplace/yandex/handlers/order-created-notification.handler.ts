import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
// import { currentStore, fbsStore, organization, Processing, ProcessingOrder } from '../database.js'
import { OrderCreatedNotificationDTO } from '../dto/index.js'
import { GetOrderResponse } from '../types/api.js'
import { orderMapper } from '../utils/order.mapper.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для уведомлений о создании заказа.
 */
@Injectable()
export class OrderCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления о создании заказа.
	 * @param notification DTO для уведомления о создании заказа.
	 */
	async handle(notification: OrderCreatedNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { orderId, createdAt, campaignId } = notification

			const store = campaignId === 23726642 ? 'Haifisch' : 'Top'

			this.logger.log(`[${store}]: Поступило уведомление - ${notification.notificationType}`)
			this.logger.log(`[${store}]: Создание заказа ${orderId} в МC...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: orderId.toString(),
				},
			})

			const [orderInMs] = rows

			if (orderInMs !== undefined && orderInMs?.id) {
				this.logger.warn(`[${store}]: Заказ ${orderId} уже есть в МС (id=${orderInMs.id})`)
				return
			}

			const { order } = await this.api.get<GetOrderResponse>(
				`campaigns/${campaignId}/orders/${orderId}`,
				store,
			)

			if (order === undefined) {
				this.logger.warn(`[${store}]: Заказ ${orderId} не найден в системе Яндекс Маркета`)
				return
			}

			this.logger.log(`[${store}]: Получены данные заказа ${orderId} из Яндекс Маркета...`)

			const products = await ms.product.all({
				filter: {
					pathName: 'Изделия',
				},
			})
			const boughtProducts = products.rows.filter(product => order.items.some(item => item.offerId === product.article))

			this.logger.log(`[${store}]: Получены данные заказа ${orderId} из МС...`)

			const payload = orderMapper(order, createdAt, store, boughtProducts)

			const createdOrder = await ms.customerOrder.create(payload)

			this.logger.log(`[${store}]: Создан заказ в МС: id=${createdOrder.id}`)

			// for (const item of order.items) {
			// 	const product = boughtProducts.find(p => p.article === item.offerId)

			// 	if (!product) {
			// 		this.logger.warn(`[${store}]: Товар ${item.offerId} не найден в МС`)
			// 		continue
			// 	}

			// 	// Получаем остатки по товару
			// 	const stockReport = await ms.report.stock.byStore({
			// 		filter: {
			// 			product: product.meta.href,
			// 			store: payload.store?.meta.href,
			// 		},
			// 	})

			// 	const stockRow = stockReport.rows[0].stockByStore[0]
			// 	const available = stockRow?.stock || 0

			// 	this.logger.log(`[${store}]: Остаток по товару ${product.name} = ${available}, заказано = ${item.count}`)

			// 	// Если остаток меньше заказанного количества → создаём заказ на производство
			// 	if (available < item.count) {
			// 		const needToProduce = item.count - available

			// 		this.logger.warn(`[${store}]: Недостаточно товара ${product.name}. Нужно произвести: ${needToProduce}`)

			// 		const processingPlan = await ms.processingPlan.list({
			// 			filter: {
			// 				archived: false,
			// 			},
			// 			search: product.article,
			// 		})

			// 		const response = await ms.client.put(ms.client.buildUrl(['entity', 'processingorder', 'new']).toString(), {
			// 			body: {
			// 				processingPlan: {
			// 					meta: {
			// 						...processingPlan.rows[0].meta,
			// 					},
			// 				},
			// 			},
			// 		})
			// 		const template = await response.json()

			// 		const responseProcessingOrder = await ms.client.post(ms.client.buildUrl(['entity', 'processingorder']).toString(), {
			// 			body: {
			// 				...template,
			// 				name: `${orderId}-${product.article}`,
			// 				organization,
			// 				store: currentStore,
			// 				quantity: needToProduce,
			// 			},
			// 		})

			// 		const processingOrder: ProcessingOrder = await responseProcessingOrder.json()

			// 		this.logger.log(`[${store}]: Создан заказ на производство id=${processingOrder.id}`)

			// 		const responseProcessingTemplate = await ms.client.put(ms.client.buildUrl(['entity', 'processing', 'new']).toString(), {
			// 			body: {
			// 				processingOrder: {
			// 					meta: {
			// 						...processingOrder.meta,
			// 					},
			// 				},
			// 			},
			// 		})
			// 		const templateProcessing = await responseProcessingTemplate.json()

			// 		const responseProcessing = await ms.client.post(ms.client.buildUrl(['entity', 'processing']).toString(), {
			// 			body: {
			// 				...templateProcessing,
			// 				name: `${orderId}-${product.article}`,
			// 				organization,
			// 				productsStore: fbsStore,
			// 			},
			// 		})

			// 		const processing: Processing = await responseProcessing.json()

			// 		this.logger.log(`[${store}]: Создана техоперация id=${processing.id}`)
			// 	}
			// }
		}
		catch (error) {
			this.handleError(`Ошибка при обработке уведомления создания заказа из Яндекс Маркета с id=${notification.orderId}`, error)
		}
	}
}
