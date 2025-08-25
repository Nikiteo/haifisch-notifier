import type { CustomerOrderModel, GetModelCreatableFields, Product } from 'moysklad-ts'
import type { PostingFbs } from '../types/api.js'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { currency, fbosOzonProject, fbsStore, group, organization, ozonAgent, ozonSalesChannel, states } from '../database.js'
import { prepareCustomerOrdersAttributes } from '../utils/order-attributes.mapper.js'
import { positionMapper } from './positions.mapper.js'

dayjs.extend(customParseFormat)

export function orderMapper(order: PostingFbs, createDate: string, products: Product[]): GetModelCreatableFields<CustomerOrderModel> {
	return {
		name: order.posting_number?.toString(),
		moment: dayjs(createDate === '' ? order.in_process_at : createDate).format('YYYY-MM-DD HH:mm:ss.SSS'),
		deliveryPlannedMoment: dayjs(order.shipment_date).format('YYYY-MM-DD HH:mm:ss.SSS'),
		project: fbosOzonProject,
		attributes: prepareCustomerOrdersAttributes(order, products),
		state: states.PROCESSING,
		organization,
		shared: true,
		applicable: true,
		vatEnabled: true,
		vatIncluded: true,
		salesChannel: ozonSalesChannel,
		agent: ozonAgent,
		store: fbsStore,
		positions: positionMapper(order, products),
		group,
		rate: {
			currency,
		},
	}
}
