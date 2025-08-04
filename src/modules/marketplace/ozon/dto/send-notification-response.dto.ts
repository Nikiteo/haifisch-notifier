import { IsDateString, IsString, MaxLength, MinLength } from 'class-validator'

/**
 * DTO для ответа в случае успешной доставки уведомления.
 */
export class SendNotificationResponseDTO {
	@IsString()
	@MinLength(1)
	@MaxLength(100)
	version?: string

	@IsString()
	@MinLength(1)
	@MaxLength(100)
	name?: string

	@IsDateString()
	time?: string
}
