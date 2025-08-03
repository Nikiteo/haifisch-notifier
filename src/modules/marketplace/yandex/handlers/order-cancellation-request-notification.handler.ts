import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { OrderCancellationRequestNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для уведомлений о создании заявки на отмену заказа.
 */
@Injectable()
export class OrderCancellationRequestNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления о создании заявки на отмену заказа.
	 * @param notification DTO для уведомления о создании заявки на отмену заказа.
	 */
	async handle(notification: OrderCancellationRequestNotificationDTO): Promise<void> {
		try {
			this.logger.log(`Создании заявки на отмену заказа ${notification.orderId} в МС`)
		}
		catch (error) {
			this.handleError(`Ошибка создании заявки на отмену заказа ${notification.orderId}`, error)
		}
	}
}
