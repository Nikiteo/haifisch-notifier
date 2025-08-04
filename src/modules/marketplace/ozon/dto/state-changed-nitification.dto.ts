import { IsEnum, IsInt, IsString } from 'class-validator'
import { MessageType, PostingStatus } from '../types/ozon-types.js'

export class StateChangedNotificationDTO {
	@IsEnum(MessageType)
	message_type!: MessageType.TYPE_STATE_CHANGED

	@IsString()
	posting_number!: string

	@IsEnum(PostingStatus)
	new_state!: PostingStatus

	@IsString()
	changed_state_date!: string

	@IsInt()
	warehouse_id!: number

	@IsInt()
	seller_id!: number
}
