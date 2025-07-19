import { IsDateString, IsEnum, IsInt, IsString } from 'class-validator'
import { NotificationType } from '../types/yandex-types'

/**
 * DTO для уведомления о новом сообщении в чате.
 */
export class ChatMessageSentNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.CHAT_MESSAGE_SENT

	@IsInt()
	chatId?: number

	@IsString()
	messageId?: string

	@IsInt()
	businessId?: number

	@IsDateString()
	sentAt?: string
}
