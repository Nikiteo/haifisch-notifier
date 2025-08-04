import { IsInt, Min } from 'class-validator'

export class ProductDTO {
	@IsInt()
	sku!: number

	@IsInt()
	@Min(1)
	quantity!: number
}
