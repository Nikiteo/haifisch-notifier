import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { ChatMessageSentNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

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
