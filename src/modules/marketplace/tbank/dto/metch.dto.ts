import { IsString } from 'class-validator'

export class MerchDTO {
	@IsString()
	id!: string

	@IsString()
	name!: string

	@IsString()
	city!: string

	@IsString()
	country!: string
}
