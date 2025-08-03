import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для уведомления о создании нового чата с покупателем.
 */
export class ChatCreatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.CHAT_CREATED

	@IsInt()
	chatId?: number

	@IsInt()
	businessId?: number

	@IsDateString()
	createdAt?: string
}
