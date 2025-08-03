import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { ChatMessageSentNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для CHAT_MESSAGE_SENT-уведомлений.
 */
@Injectable()
export class ChatMessageSentNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка CHAT_MESSAGE_SENT-уведомления.
	 * @param notification DTO для CHAT_MESSAGE_SENT-уведомления.
	 */
	async handle(notification: ChatMessageSentNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.sentAt}`)
	}
}
