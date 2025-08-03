import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { GoodsFeedbackCommentCreatedNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для GOODS_FEEDBACK_COMMENT_CREATED-уведомлений.
 */
@Injectable()
export class GoodsFeedbackCommentCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка GOODS_FEEDBACK_COMMENT_CREATED-уведомления.
	 * @param notification DTO для GOODS_FEEDBACK_COMMENT_CREATED-уведомления.
	 */
	async handle(notification: GoodsFeedbackCommentCreatedNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.createdAt}`)
	}
}
