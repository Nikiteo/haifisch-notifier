import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { ChatCreatedNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для CHAT_CREATED-уведомлений.
 */
@Injectable()
export class ChatCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка CHAT_CREATED-уведомления.
	 * @param notification DTO для CHAT_CREATED-уведомления.
	 */
	async handle(notification: ChatCreatedNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.createdAt}`)
	}
}
