import { Type } from 'class-transformer'
import { IsArray, IsDateString, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'
import { NotificationOrderItemDTO } from './notification-order-item.dto.js'

/**
 * DTO для уведомления об отмене заказа.
 */
export class OrderCancelledNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.ORDER_CANCELLED

	@IsInt()
	orderId?: number

	@IsInt()
	campaignId?: number

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => NotificationOrderItemDTO)
	items?: NotificationOrderItemDTO[]

	@IsDateString()
	cancelledAt?: string
}
