import { IsString } from 'class-validator'

export class CounterPartyDTO {
	@IsString()
	account!: string

	@IsString()
	bankBic!: string

	@IsString()
	bankName!: string

	@IsString()
	corrAccount!: string

	@IsString()
	inn!: string

	@IsString()
	name!: string
}
