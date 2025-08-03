import type { CustomerOrderPositionModel, GetModelCreatableFields, Product } from 'moysklad-ts'
import type { OrderDTO } from '../types/api.js'

export function positionMapper(order: OrderDTO, products: Product[]): GetModelCreatableFields<CustomerOrderPositionModel>[] {
	const validStatuses = new Set(['PROCESSING', 'RESERVED', 'PENDING', 'UNPAID'])
	const shouldReserve = order.status && validStatuses.has(order.status)

	const positions: GetModelCreatableFields<CustomerOrderPositionModel>[] = []

	for (const product of products) {
		const matchedItem = order.items.find(item => item.offerId === product.article)
		if (matchedItem === undefined)
			continue

		const totalSubsidies = matchedItem.subsidies?.reduce(
			(sum, subsidy) => sum + Number(subsidy.amount),
			0,
		) ?? 0

		positions.push({
			quantity: matchedItem.count,
			price: (matchedItem.price + totalSubsidies) * 100,
			discount: 0,
			vat: 0,
			assortment: {
				meta: product.meta,
			},
			reserve: shouldReserve ? matchedItem.count : 0,
		})
	}

	return positions
}
