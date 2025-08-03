import type { CustomerOrderModel, GetModelCreatableFields, Product } from 'moysklad-ts'
import type { OrderDTO } from '../types/api.js'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { agent, country, currency, fbsHfProject, fbsStore, fbsTopProject, group, organization, salesChannel } from '../database.js'
import { prepareCustomerOrdersAttributes } from '../utils/order-attributes.mapper.js'
import { prepareStatusesForCustomerOrders } from '../utils/order-status.mapper.js'
import { positionMapper } from './positions.mapper.js'

dayjs.extend(customParseFormat)

export function orderMapper(order: OrderDTO, createDate: string, store: 'Haifisch' | 'Top', products: Product[]): GetModelCreatableFields<CustomerOrderModel> {
	return {
		name: order.id.toString(),
		moment: dayjs(createDate).format('YYYY-MM-DD HH:mm:ss.SSS'),
		deliveryPlannedMoment: dayjs(dayjs(order.delivery.shipments?.[0].shipmentDate, 'DD-MM-YYYY')
			.set('hour', 21)
			.set('minute', 0)
			.set('second', 0) ?? createDate).format('YYYY-MM-DD HH:mm:ss.SSS'),
		project: store === 'Haifisch' ? fbsHfProject : fbsTopProject,
		attributes: prepareCustomerOrdersAttributes(order, products),
		state: prepareStatusesForCustomerOrders(order.status, order.substatus),
		organization,
		shared: true,
		applicable: true,
		vatEnabled: true,
		vatIncluded: true,
		salesChannel,
		agent,
		store: fbsStore,
		positions: positionMapper(order, products),
		group,
		rate: {
			currency,
		},
		shipmentAddressFull: {
			postalCode: order.delivery?.address?.postcode,
			country,
			city: order.delivery?.address?.city ?? '',
			street: order.delivery?.address?.street,
			house: order.delivery?.address?.house,
			apartment: order.delivery?.address?.apartment,
		},
	}
}
