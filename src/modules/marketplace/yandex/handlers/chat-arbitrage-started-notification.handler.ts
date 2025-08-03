import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { ChatArbitrageStartedNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

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
