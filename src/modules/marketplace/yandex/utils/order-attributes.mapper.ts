import type {
	Attribute,
	BooleanAttribute,
	Product,
	StringAttribute,
} from 'moysklad-ts'
import type { OrderDTO } from '../types/api.js'
import { AttributeType, Entity, MediaType } from 'moysklad-ts'
/**
 * Создаёт BooleanAttribute
 */
export function createBooleanAttribute(
	id: string,
	name: string,
	value: boolean,
): BooleanAttribute {
	return {
		meta: {
			href: `https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/${id}`,
			type: Entity.AttributeMetadata,
			mediaType: MediaType.Json,
			metadataHref: '',
		},
		id,
		name,
		type: AttributeType.Boolean,
		value,
	}
}

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
	order: OrderDTO,
	products?: Product[],
): Attribute[] {
	const attrs: Attribute[] = []

	// Предоплачен?
	attrs.push(
		createBooleanAttribute(
			'54623519-968d-11ee-0a80-04d8001e7e59',
			'Предоплачен',
			order.paymentType === 'PREPAID',
		),
	)

	// SKU заказа
	attrs.push(
		createStringAttribute(
			'85c662bb-9fcb-11ee-0a80-03c00003edfc',
			'SKU заказа',
			order.items
				?.map(i => `${i.offerId} - ${i.count}`)
				.join('\n') ?? '',
		),
	)

	// Цвет
	const colors = products
		?.filter(p => order.items?.some(i => p.article === i.shopSku))
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
