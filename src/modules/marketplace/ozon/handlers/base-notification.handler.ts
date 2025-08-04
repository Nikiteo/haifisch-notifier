import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { GigaChatService } from '../../../gigachat/gigachat.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import {
	NewPostingNotificationDTO,
	PingNotificationDTO,
	PostingCancelledNotificationDTO,
	StateChangedNotificationDTO,
} from '../dto/index.js'
import { OzonApiService } from '../ozon.api.js'

type NotificationDTO
	= | PingNotificationDTO
		| NewPostingNotificationDTO
		| PostingCancelledNotificationDTO
		| StateChangedNotificationDTO

/**
 * Базовый абстрактный класс для обработчиков уведомлений.
 */
@Injectable()
export abstract class BaseNotificationHandler<T extends NotificationDTO = NotificationDTO> {
	constructor(
		protected readonly logger: AppLogger,
		protected readonly moyskladService: MoyskladService,
		protected readonly api: OzonApiService,
		protected readonly giga?: GigaChatService,
	) {}

	/**
	 * Абстрактный метод для обработки уведомления.
	 * @param notification DTO уведомления.
	 */
	abstract handle(notification: T): Promise<void>

	/**
	 * Обработка ошибки с логированием.
	 * @param message Сообщение об ошибке.
	 * @param error Объект ошибки.
	 */
	protected handleError(message: string, error: unknown): never {
		this.logger.error(`${message}: ${error instanceof Error ? error.message : String(error)}`)
		throw new InternalServerErrorException(message)
	}
}
