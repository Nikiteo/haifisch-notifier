import { Type } from 'class-transformer'
import { IsDateString, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'
import { NotificationUpdatedReturnStatusesDTO } from './notification-updated-return-statuses.dto.js'

/**
 * DTO для уведомления об изменении статуса невыкупа или возврата.
 */
export class OrderReturnStatusUpdatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType!: NotificationType.ORDER_RETURN_STATUS_UPDATED

	@IsInt()
	orderId!: number

	@IsInt()
	returnId!: number

	@IsInt()
	campaignId!: number

	@ValidateNested()
	@Type(() => NotificationUpdatedReturnStatusesDTO)
	statuses!: NotificationUpdatedReturnStatusesDTO

	@IsDateString()
	updatedAt!: string
}
