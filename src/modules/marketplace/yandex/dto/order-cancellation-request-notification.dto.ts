import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types'

/**
 * DTO для уведомления о создании заявки на отмену заказа.
 */
export class OrderCancellationRequestNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.ORDER_CANCELLATION_REQUEST

	@IsInt()
	orderId?: number

	@IsInt()
	campaignId?: number

	@IsDateString()
	requestedAt?: string
}
