import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { PingNotificationDTO } from '../dto/index.js'
import { OzonApiService } from '../ozon.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для PING-уведомлений.
 */
@Injectable()
export class PingNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: OzonApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка PING-уведомления.
	 * @param notification DTO для PING-уведомления.
	 */
	async handle(notification: PingNotificationDTO): Promise<void> {
		this.logger.log(`Получено ${notification.message_type} - уведомление в ${notification.time}`)
	}
}
