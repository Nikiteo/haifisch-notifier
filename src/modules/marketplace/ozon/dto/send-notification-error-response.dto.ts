import { Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'
import { NotificationApiErrorDTO } from './notification-api-error.dto.js'

/**
 * DTO для ответа в случае ошибки обработки уведомления.
 */
export class SendNotificationErrorResponseDTO {
	@ValidateNested()
	@Type(() => NotificationApiErrorDTO)
	error?: NotificationApiErrorDTO
}
