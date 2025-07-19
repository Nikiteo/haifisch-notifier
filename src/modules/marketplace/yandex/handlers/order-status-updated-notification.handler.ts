import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { OrderStatusUpdatedNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

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
			this.logger.log(`Изменение статуса заказа ${notification.orderId} в МойСклад`)
			// const order = await this.moyskladService.getClient().POST('entity/customerorder', {
			// 	name: `Order ${notification.orderId}`,
			// 	organization: { meta: { href: 'https://api.moysklad.ru/api/remap/1.2/entity/organization/YOUR_ORG_ID' } },
			// 	agent: { meta: { href: 'https://api.moysklad.ru/api/remap/1.2/entity/counterparty/YOUR_COUNTERPARTY_ID' } },
			// 	positions: notification.items.map(item => ({
			// 		quantity: item.count,
			// 		assortment: { meta: { href: `https://api.moysklad.ru/api/remap/1.2/entity/product/${item.offerId}` } },
			// 	})),
			// 	moment: notification.createdAt,
			// })
			// this.logger.log(`Заказ ${notification.orderId} успешно создан в МойСклад: ${JSON.stringify(order)}`)
		}
		catch (error) {
			this.handleError(`Ошибка изменения статуса заказа ${notification.orderId}`, error)
		}
	}
}
