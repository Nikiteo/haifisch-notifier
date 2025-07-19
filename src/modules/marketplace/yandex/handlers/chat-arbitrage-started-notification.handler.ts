import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { ChatArbitrageStartedNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

/**
 * Обработчик для CHAT_ARBITRAGE_STARTED-уведомлений.
 */
@Injectable()
export class ChatArbitrageStartedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка CHAT_ARBITRAGE_STARTED-уведомления.
	 * @param notification DTO для CHAT_ARBITRAGE_STARTED-уведомления.
	 */
	async handle(notification: ChatArbitrageStartedNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType}-уведомление в ${notification.startedAt}`)
	}
}
