import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { GoodsFeedbackCreatedNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

/**
 * Обработчик для GOODS_FEEDBACK_CREATED-уведомлений.
 */
@Injectable()
export class GoodsFeedbackCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка GOODS_FEEDBACK_CREATED-уведомления.
	 * @param notification DTO для GOODS_FEEDBACK_CREATED-уведомления.
	 */
	async handle(notification: GoodsFeedbackCreatedNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.createdAt}`)
	}
}
