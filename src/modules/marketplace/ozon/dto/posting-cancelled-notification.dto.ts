import { Type } from 'class-transformer'
import { Equals, IsArray, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { MessageType } from '../types/ozon-types.js'
import { ProductDTO } from './product.dto.js'
import { ReasonDTO } from './reason.dto.js'

export class PostingCancelledNotificationDTO {
	@IsEnum(MessageType)
	message_type!: MessageType.TYPE_POSTING_CANCELLED

	@IsString()
	posting_number!: string

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => ProductDTO)
	products!: ProductDTO[]

	@IsString()
	old_state!: string

	@Equals('posting_canceled')
	new_state!: 'posting_canceled'

	@IsString()
	changed_state_date!: string

	@ValidateNested()
	@Type(() => ReasonDTO)
	reason!: ReasonDTO

	@IsInt()
	warehouse_id!: number

	@IsInt()
	seller_id!: number
}
