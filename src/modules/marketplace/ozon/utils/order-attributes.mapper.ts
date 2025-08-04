import type {
	Attribute,
	Product,
	StringAttribute,
} from 'moysklad-ts'

import type { PostingFbs } from '../types/api.js'
import { AttributeType, Entity, MediaType } from 'moysklad-ts'

/**
 * Создаёт StringAttribute
 */
export function createStringAttribute(
	id: string,
	name: string,
	value: string,
): StringAttribute {
	return {
		meta: {
			href: `https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/${id}`,
			type: Entity.AttributeMetadata,
			mediaType: MediaType.Json,
			metadataHref: '',
		},
		id,
		name,
		type: AttributeType.String,
		value,
	}
}

export function prepareCustomerOrdersAttributes(
	order: PostingFbs,
	products?: Product[],
): Attribute[] {
	const attrs: Attribute[] = []

	// SKU заказа
	attrs.push(
		createStringAttribute(
			'85c662bb-9fcb-11ee-0a80-03c00003edfc',
			'SKU заказа',
			order.products
				?.map(i => `${i.offer_id} - ${i.quantity}`)
				.join('\n') ?? '',
		),
	)

	// Цвет
	const colors = products
		?.filter(p => order.products?.some(i => p.article === i.offer_id))
		.map(p => p.name.split(' ').at(-1))
		.join('\n') ?? ''

	attrs.push(
		createStringAttribute(
			'14538b65-b36f-11ee-0a80-02a00031fa90',
			'Цвет',
			colors,
		),
	)

	return attrs
}
