import { IsInt, IsString } from 'class-validator'

/**
 * DTO для информации о товаре в невыкупе или возврате.
 */
export class NotificationReturnItemDTO {
	@IsString()
	offerId?: string

	@IsInt()
	count?: number
}
