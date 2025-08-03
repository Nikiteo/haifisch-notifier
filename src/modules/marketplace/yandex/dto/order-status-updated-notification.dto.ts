import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType, OrderStatusType, OrderSubstatusType } from '../types/yandex-types.js'

/**
 * DTO для уведомления об изменении статуса заказа.
 */
export class OrderStatusUpdatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType!: NotificationType.ORDER_STATUS_UPDATED

	@IsInt()
	orderId!: number

	@IsInt()
	campaignId!: number

	@IsEnum(OrderStatusType)
	status!: OrderStatusType

	@IsEnum(OrderSubstatusType)
	substatus!: OrderSubstatusType

	@IsDateString()
	updatedAt!: string
}
