import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { ChatArbitrageFinishedNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

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
