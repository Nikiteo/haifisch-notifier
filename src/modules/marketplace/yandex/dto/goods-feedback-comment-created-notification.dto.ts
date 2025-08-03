import { IsDateString, IsEnum, IsInt } from 'class-validator'
import { NotificationType } from '../types/yandex-types.js'

/**
 * DTO для уведомления о создании нового комментария к отзыву.
 */
export class GoodsFeedbackCommentCreatedNotificationDTO {
	@IsEnum(NotificationType)
	notificationType?: NotificationType.GOODS_FEEDBACK_COMMENT_CREATED

	@IsInt()
	commentId?: number

	@IsInt()
	businessId?: number

	@IsDateString()
	createdAt?: string
}
