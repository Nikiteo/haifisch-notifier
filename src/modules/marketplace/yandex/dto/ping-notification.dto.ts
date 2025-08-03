import { IsDateString, IsEnum } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для проверочного уведомления (PING).
 */
export class PingNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.PING

	@IsDateString()
	time?: string
}
