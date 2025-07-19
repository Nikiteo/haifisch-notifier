import { IsInt, IsString } from 'class-validator'

/**
 * DTO для информации о товаре в заказе.
 */
export class NotificationOrderItemDTO {
	@IsString()
	offerId?: string

	@IsInt()
	count?: number
}
