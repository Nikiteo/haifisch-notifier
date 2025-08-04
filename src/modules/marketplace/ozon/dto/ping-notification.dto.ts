import { IsEnum, IsString } from 'class-validator'
import { MessageType } from '../types/ozon-types.js'

export class PingNotificationDTO {
	@IsEnum(MessageType)
	message_type!: MessageType.TYPE_PING

	@IsString()
	time!: string
}
