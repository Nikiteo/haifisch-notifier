import { Type } from 'class-transformer'
import { IsArray, IsDateString, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { NotificationType } from '../types/yandex-types'
import { NotificationOrderItemDTO } from './notification-order-item.dto'

/**
 * DTO для уведомления о создании нового заказа.
 */
export class OrderCreatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.ORDER_CREATED

	@IsInt()
	orderId?: number

	@IsInt()
	campaignId?: number

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => NotificationOrderItemDTO)
	items?: NotificationOrderItemDTO[]

	@IsDateString()
	createdAt?: string
}
