import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { ChatArbitrageFinishedNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для CHAT_ARBITRAGE_FINISHED-уведомлений.
 */
@Injectable()
export class ChatArbitrageFinishedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка CHAT_ARBITRAGE_FINISHED-уведомления.
	 * @param notification DTO для CHAT_ARBITRAGE_FINISHED-уведомления.
	 */
	async handle(notification: ChatArbitrageFinishedNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.finishedAt}`)
	}
}
