import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
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
		}
		catch (error) {
			this.handleError(`Ошибка при обработке уведомления создания заказа из Яндекс Маркета с id=${notification.orderId}`, error)
		}
	}
}
