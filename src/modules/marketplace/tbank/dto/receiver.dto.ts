import { IsString } from 'class-validator'

export class ReceiverDTO {
	@IsString()
	account!: string

	@IsString()
	name!: string

	@IsString()
	inn!: string

	@IsString()
	bic!: string

	@IsString()
	corrAccount!: string

	@IsString()
	bankName!: string
}
