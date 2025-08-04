import type { CustomerOrderPositionModel, GetModelCreatableFields, Product } from 'moysklad-ts'
import type { PostingFbs } from '../types/api.js'

export function positionMapper(
	order: PostingFbs,
	products: Product[],
): GetModelCreatableFields<CustomerOrderPositionModel>[] {
	// const validStatuses = new Set(['awaiting_packaging', 'awaiting_deliver', 'awaiting_delivery'])
	// const shouldReserve = (order.status !== null && order.status !== undefined) && validStatuses.has(order.status)

	const result: GetModelCreatableFields<CustomerOrderPositionModel>[] = []

	for (const item of order.products ?? []) {
		const match = products.find(product => product.article === item.offer_id)
		if (!match)
			continue

		const quantity = item.quantity
		const priceRub = Number.parseFloat(item.price ?? '0') || 0

		result.push({
			quantity,
			price: priceRub * 100,
			discount: 0,
			vat: 0,
			assortment: {
				meta: match.meta,
			},
			// reserve: shouldReserve ? quantity : 0,
		})
	}

	return result
}
