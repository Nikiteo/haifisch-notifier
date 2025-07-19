import { GetOrderResponse } from '@modules/marketplace/yandex/types/api'
import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { OrderCreatedNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

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
			this.logger.log(`Создание заказа ${notification.orderId} в МойСклад`)

			const ms = this.moyskladService.getClient()
			const { orderId, items, createdAt, campaignId } = notification
			const store = campaignId === 23726642 ? 'Haifisch' : 'Top'
			const orderDetail = await this.api.get<GetOrderResponse>(
				`campaigns/${notification.campaignId}/orders/${notification.orderId}`,
				store,
			)
			this.logger.log(`Получены данные заказа ${orderId} из Яндекс Маркета: ${JSON.stringify(orderDetail)}`)

			const msOrder = await ms.GET('entity/customerorder', {
				filter: {
					name: orderId,
				},
			})

			this.logger.log(`Получены данные заказа ${orderId} из МойСклад: ${JSON.stringify(msOrder)}`)

			// this.logger.log(`Заказ ${notification.orderId} успешно создан в МойСклад: ${JSON.stringify(order)}`)
		}
		catch (error) {
			this.handleError(`Ошибка создания заказа ${notification.orderId}`, error)
		}
	}
}
