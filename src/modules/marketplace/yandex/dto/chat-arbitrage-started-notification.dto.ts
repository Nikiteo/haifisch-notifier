import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для уведомления о начале спора.
 */
export class ChatArbitrageStartedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.CHAT_ARBITRAGE_STARTED

	@IsInt()
	chatId?: number

	@IsInt()
	businessId?: number

	@IsDateString()
	startedAt?: string
}
