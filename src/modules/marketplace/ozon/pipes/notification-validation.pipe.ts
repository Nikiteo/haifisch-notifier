import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import {
	PingNotificationDTO,
} from '../dto/index.js'
import { NewPostingNotificationDTO } from '../dto/new-posting-notification.dto.js'
import { PostingCancelledNotificationDTO } from '../dto/posting-cancelled-notification.dto.js'
import { StateChangedNotificationDTO } from '../dto/state-changed-nitification.dto.js'
import { MessageType } from '../types/ozon-types.js'

type NotificationDTO
	= | PingNotificationDTO
		| NewPostingNotificationDTO
		| PostingCancelledNotificationDTO
		| StateChangedNotificationDTO

const notificationTypeToDtoMap: Record<MessageType, new () => NotificationDTO> = {
	[MessageType.TYPE_PING]: PingNotificationDTO,
	[MessageType.TYPE_NEW_POSTING]: NewPostingNotificationDTO,
	[MessageType.TYPE_POSTING_CANCELLED]: PostingCancelledNotificationDTO,
	[MessageType.TYPE_STATE_CHANGED]: StateChangedNotificationDTO,
}

@Injectable()
export class NotificationValidationPipe implements PipeTransform {
	async transform(value: unknown): Promise<NotificationDTO> {
		// Проверяем, что value — объект и имеет message_type
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!value || typeof value !== 'object' || !('message_type' in value)) {
			throw new BadRequestException('Invalid notification: missing or invalid message_type')
		}

		const messageType = (value as { message_type: MessageType | undefined }).message_type

		// Явная проверка на undefined
		if (messageType === undefined) {
			throw new BadRequestException('Notification type is undefined')
		}

		// Проверяем, существует ли DTO для данного messageType
		const dtoClass = notificationTypeToDtoMap[messageType]
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!dtoClass) {
			throw new BadRequestException(`Unknown notification type: ${messageType}`)
		}

		// Преобразуем в экземпляр DTO
		const notificationDto = plainToInstance(dtoClass, value)
		const errors = await validate(notificationDto)

		if (errors.length > 0) {
			throw new BadRequestException(`Validation failed: ${JSON.stringify(errors, null, 2)}`)
		}

		return notificationDto
	}
}
