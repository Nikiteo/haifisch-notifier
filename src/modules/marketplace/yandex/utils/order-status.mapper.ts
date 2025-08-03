import type { OrderStatusType, OrderSubstatusType } from '../types/api.js'
import type { OrderSubstatusType as notificationSubstatus } from '../types/yandex-types.js'

import { states } from '../database.js'

function prepareSubstatuses(substatus?: OrderSubstatusType | notificationSubstatus) {
	if (substatus === 'READY_TO_SHIP') {
		return states.READY_TO_SHIP
	}
	if (substatus === 'SHIPPED') {
		return states.PICKUP
	}
	return states.PROCESSING
}

/**
 * Маппит статус Яндекс.Маркета в State из МойСклад.
 */
export function prepareStatusesForCustomerOrders(status: OrderStatusType, substatus?: OrderSubstatusType | notificationSubstatus) {
	switch (status) {
		case 'CANCELLED':
			return states.CANCELLED
		case 'DELIVERED':
			return states.DELIVERED
		case 'DELIVERY':
		case 'PICKUP':
			return states.DELIVERY
		case 'RESERVED':
		case 'PLACING':
		case 'PENDING':
		case 'UNPAID':
			return states.NEW
		case 'PROCESSING':
			return prepareSubstatuses(substatus)
		case 'PARTIALLY_RETURNED':
			return states.PARTIALLY_RETURNED
		case 'RETURNED':
			return states.RETURNED
		case 'UNKNOWN':
			return states.UNKNOWN
	}
}
