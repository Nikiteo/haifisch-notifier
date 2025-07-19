import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
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
import { NotificationType } from '../types/yandex-types'

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

const notificationTypeToDtoMap: Record<NotificationType, new () => NotificationDTO> = {
	[NotificationType.PING]: PingNotificationDTO,
	[NotificationType.ORDER_CREATED]: OrderCreatedNotificationDTO,
	[NotificationType.ORDER_CANCELLED]: OrderCancelledNotificationDTO,
	[NotificationType.ORDER_CANCELLATION_REQUEST]: OrderCancellationRequestNotificationDTO,
	[NotificationType.ORDER_STATUS_UPDATED]: OrderStatusUpdatedNotificationDTO,
	[NotificationType.ORDER_RETURN_CREATED]: OrderReturnCreatedNotificationDTO,
	[NotificationType.ORDER_RETURN_STATUS_UPDATED]: OrderReturnStatusUpdatedNotificationDTO,
	[NotificationType.GOODS_FEEDBACK_CREATED]: GoodsFeedbackCreatedNotificationDTO,
	[NotificationType.GOODS_FEEDBACK_COMMENT_CREATED]: GoodsFeedbackCommentCreatedNotificationDTO,
	[NotificationType.CHAT_CREATED]: ChatCreatedNotificationDTO,
	[NotificationType.CHAT_MESSAGE_SENT]: ChatMessageSentNotificationDTO,
	[NotificationType.CHAT_ARBITRAGE_STARTED]: ChatArbitrageStartedNotificationDTO,
	[NotificationType.CHAT_ARBITRAGE_FINISHED]: ChatArbitrageFinishedNotificationDTO,
}

@Injectable()
export class NotificationValidationPipe implements PipeTransform {
	async transform(value: unknown): Promise<NotificationDTO> {
		// Проверяем, что value — объект и имеет notificationType
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!value || typeof value !== 'object' || !('notificationType' in value)) {
			throw new BadRequestException('Invalid notification: missing or invalid notificationType')
		}

		const notificationType = (value as { notificationType: NotificationType | undefined }).notificationType

		// Явная проверка на undefined
		if (notificationType === undefined) {
			throw new BadRequestException('Notification type is undefined')
		}

		// Проверяем, существует ли DTO для данного notificationType
		const dtoClass = notificationTypeToDtoMap[notificationType]
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!dtoClass) {
			throw new BadRequestException(`Unknown notification type: ${notificationType}`)
		}

		// Преобразуем в экземпляр DTO
		const notificationDto = plainToInstance(dtoClass, value)
		const errors = await validate(notificationDto)

		if (errors.length > 0) {
			throw new BadRequestException(`Validation failed: ${JSON.stringify(errors, null, 2)}`)
		}

		return notificationDto
	}
}
