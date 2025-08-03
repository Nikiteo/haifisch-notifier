import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для уведомления о завершении спора.
 */
export class ChatArbitrageFinishedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.CHAT_ARBITRAGE_FINISHED

	@IsInt()
	chatId?: number

	@IsInt()
	businessId?: number

	@IsDateString()
	finishedAt?: string
}
