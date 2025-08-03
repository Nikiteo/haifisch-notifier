import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для уведомления о создании нового отзыва о товаре.
 */
export class GoodsFeedbackCreatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType!: NotificationType.GOODS_FEEDBACK_CREATED

	@IsInt()
	feedbackId!: number

	@IsInt()
	businessId!: number

	@IsDateString()
	createdAt!: string

	@IsDateString()
	publishedAt!: string
}
