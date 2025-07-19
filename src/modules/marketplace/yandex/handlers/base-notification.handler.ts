import { MoyskladService } from '@modules/moysklad/moysklad.service'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import {
	ChatArbitrageFinishedNotificationDTO,
	ChatArbitrageStartedNotificationDTO,
	ChatCreatedNotificationDTO,
	ChatMessageSentNotificationDTO,
	GoodsFeedbackCommentCreatedNotificationDTO,
	GoodsFeedbackCreatedNotificationDTO,
	OrderCancellationRequestNotificationDTO,
	OrderCancelledNotificationDTO,
	OrderCreatedNotificationDTO,
	OrderReturnCreatedNotificationDTO,
	OrderReturnStatusUpdatedNotificationDTO,
	OrderStatusUpdatedNotificationDTO,
	PingNotificationDTO,
} from '../dto'
import { YandexApiService } from '../yandex.api'

type NotificationDTO =
	| PingNotificationDTO
	| OrderCreatedNotificationDTO
	| OrderCancelledNotificationDTO
	| OrderCancellationRequestNotificationDTO
	| OrderStatusUpdatedNotificationDTO
	| OrderReturnCreatedNotificationDTO
	| OrderReturnStatusUpdatedNotificationDTO
	| GoodsFeedbackCreatedNotificationDTO
	| GoodsFeedbackCommentCreatedNotificationDTO
	| ChatCreatedNotificationDTO
	| ChatMessageSentNotificationDTO
	| ChatArbitrageStartedNotificationDTO
	| ChatArbitrageFinishedNotificationDTO

/**
 * Базовый абстрактный класс для обработчиков уведомлений.
 */
@Injectable()
export abstract class BaseNotificationHandler<T extends NotificationDTO = NotificationDTO> {
	constructor(
		protected readonly logger: AppLogger,
		protected readonly moyskladService: MoyskladService,
		protected readonly api: YandexApiService,
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
