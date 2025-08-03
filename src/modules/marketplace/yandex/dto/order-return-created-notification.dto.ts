import { Type } from 'class-transformer'
import { IsArray, IsDateString, IsEnum, IsInt, ValidateNested } from 'class-validator'
import { NotificationType, ReturnType } from '../types/yandex-types.js'
import { NotificationReturnItemDTO } from './notification-return-item.dto.js'

/**
 * DTO для уведомления о создании нового невыкупа или возврата.
 */
export class OrderReturnCreatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType!: NotificationType.ORDER_RETURN_CREATED

	@IsInt()
	orderId!: number

	@IsInt()
	returnId!: number

	@IsEnum(ReturnType)
	returnType!: ReturnType

	@IsInt()
	campaignId!: number

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => NotificationReturnItemDTO)
	items!: NotificationReturnItemDTO[]

	@IsDateString()
	createdAt!: string
}
