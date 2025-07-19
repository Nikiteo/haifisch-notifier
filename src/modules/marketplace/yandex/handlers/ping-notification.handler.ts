import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { PingNotificationDTO } from '../dto'
import { YandexApiService } from '../yandex.api'
import { BaseNotificationHandler } from './base-notification.handler'

/**
 * Обработчик для PING-уведомлений.
 */
@Injectable()
export class PingNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка PING-уведомления.
	 * @param notification DTO для PING-уведомления.
	 */
	async handle(notification: PingNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.notificationType} - уведомление в ${notification.time}`)
	}
}
