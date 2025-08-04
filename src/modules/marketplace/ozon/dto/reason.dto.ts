import { IsInt, IsString } from 'class-validator'

export class ReasonDTO {
	@IsInt()
	id!: number

	@IsString()
	message!: string
}
