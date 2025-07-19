import { IsEnum, IsString } from 'class-validator'
import { NotificationApiErrorType } from '../types/yandex-types'

/**
 * DTO для описания ошибки при обработке уведомления.
 */
export class NotificationApiErrorDTO {
	@IsEnum(NotificationApiErrorType)
	type?: NotificationApiErrorType

	@IsString()
	message?: string
}
