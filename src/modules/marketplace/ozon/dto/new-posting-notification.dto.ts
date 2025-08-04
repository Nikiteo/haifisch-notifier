import { Type } from 'class-transformer'
import { IsArray, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator'
import { MessageType } from '../types/ozon-types.js'
import { ProductDTO } from './product.dto.js'

export class NewPostingNotificationDTO {
	@IsEnum(MessageType)
	message_type!: MessageType.TYPE_NEW_POSTING

	@IsString()
	posting_number!: string

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => ProductDTO)
	products!: ProductDTO[]

	@IsString()
	in_process_at!: string

	@IsInt()
	warehouse_id!: number

	@IsInt()
	seller_id!: number
}
