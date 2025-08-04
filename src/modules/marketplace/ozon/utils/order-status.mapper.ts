import type { Entity, Meta } from 'moysklad-ts'
import { states } from '../database.js'

import { PostingStatus } from '../types/ozon-types.js'

/**
 * Маппит статус Ozon в State из МойСклад.
 */
export function prepareStatusesForCustomerOrders(status?: PostingStatus): Meta<Entity.State> & {
	id: string
	accountId: string
	name: string
	color: number
	stateType: string
	entityType: string
} {
	switch (status) {
		case PostingStatus.POSTING_DELIVERED:
		case PostingStatus.POSTING_CONDITIONALLY_DELIVERED:
		case PostingStatus.POSTING_RECEIVED:
			return states.DELIVERED
		case PostingStatus.POSTING_ON_WAY_TO_CITY:
		case PostingStatus.POSTING_TRANSFERRED_TO_COURIER_SERVICE:
		case PostingStatus.POSTING_IN_COURIER_SERVICE:
		case PostingStatus.POSTING_ON_WAY_TO_PICKUP_POINT:
		case PostingStatus.POSTING_IN_PICKUP_POINT:
		case PostingStatus.POSTING_DRIVER_PICK_UP:
			return states.DELIVERY
		case PostingStatus.POSTING_NOT_IN_SORT_CENTER:
		case PostingStatus.POSTING_ACCEPTANCE_IN_PROGRESS:
			return states.NEW
		case PostingStatus.POSTING_CREATED:
			return states.PROCESSING
		case PostingStatus.POSTING_IN_CARRIAGE:
		case PostingStatus.POSTING_TRANSFERRING_TO_DELIVERY:
			return states.READY_TO_SHIP
		case PostingStatus.POSTING_NOT_IN_CARRIAGE:
		case PostingStatus.POSTING_IN_CLIENT_ARBITRATION:
			return states.UNKNOWN
		case undefined:
			return states.NEW
	}
}
