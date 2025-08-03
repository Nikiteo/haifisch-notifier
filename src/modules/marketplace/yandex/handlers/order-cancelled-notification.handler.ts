import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { OrderCancelledNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для уведомлений об отмене заказа.
 */
@Injectable()
export class OrderCancelledNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления об отмене заказа.
	 * @param notification DTO для уведомления об отмене заказа.
	 */
	async handle(notification: OrderCancelledNotificationDTO): Promise<void> {
		try {
			this.logger.log(`Отмена заказа ${notification.orderId} в МС`)
		}
		catch (error) {
			this.handleError(`Ошибка Отмена заказа ${notification.orderId}`, error)
		}
	}
}
