import type { Attribute, DateTime, DocumentRate, Entity, Idable, ListMeta, Meta, TaxSystem } from 'moysklad-ts'
import { MediaType } from 'moysklad-ts'

export const agent = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2d059b74-92a6-11ee-0a80-145a0044e87e',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata',
		type: 'counterparty' as Entity.Counterparty,
		mediaType: MediaType.Json,
	},
}

export const currentStore = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/store/a8306907-9450-11ee-0a80-109f00177296',
		metadataHref: 'https://api.moysklad.ru/api/remap/1.2/entity/store/metadata',
		type: 'store' as Entity.Store,
		mediaType: MediaType.Json,
	},
}

export const group = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/group/4f4694ca-f557-11ed-0a80-0cd400013e79',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/group/metadata',
		type: 'group' as Entity.Group,
		mediaType: MediaType.Json,
	},
}

export const salesChannel = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/28429701-94f9-11ee-0a80-13920029b8cd',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata',
		type: 'saleschannel' as Entity.SalesChannel,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#saleschannel/edit?id=28429701-94f9-11ee-0a80-13920029b8cd',
	},
}

export const owner = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/employee/4f894604-f557-11ed-0a80-11cd001da6bd',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata',
		type: 'employee' as Entity.Employee,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#employee/edit?id=4f894604-f557-11ed-0a80-11cd001da6bd',
	},
}

export const organization = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/organization/70d5fbcd-b36c-11ee-0a80-02a00031689f',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata',
		type: 'organization' as Entity.Organization,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#mycompany/edit?id=70d5fbcd-b36c-11ee-0a80-02a00031689f',
	},
}

export const country = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/country/metadata',
		type: 'country' as Entity.Country,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#country/edit?id=9df7c2c3-7782-4c5c-a8ed-1102af611608',
	},
}

export const currency = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/currency/4f9de8e0-f557-11ed-0a80-11cd001da710',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata',
		type: 'currency' as Entity.Currency,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#currency/edit?id=4f9de8e0-f557-11ed-0a80-11cd001da710',
	},
}

export const fbsHfProject = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/project/ef221472-f558-11ed-0a80-01bd001d764e',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/project/metadata',
		type: 'project' as Entity.Project,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#project/edit?id=ef221472-f558-11ed-0a80-01bd001d764e',
	},
}

export const fbsTopProject = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/project/fa266c8d-f558-11ed-0a80-0d7c001cc14a',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/project/metadata',
		type: 'project' as Entity.Project,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#project/edit?id=fa266c8d-f558-11ed-0a80-0d7c001cc14a',
	},
}

export const fbsStore = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/store/2078b4fa-4f42-11ef-0a80-0f9f0016aea6',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/store/metadata',
		type: 'store' as Entity.Store,
		mediaType: MediaType.Json,
		uuidHref:
			'https://online.moysklad.ru/app/#warehouse/edit?id=2078b4fa-4f42-11ef-0a80-0f9f0016aea6',
	},
}

export const states = {
	NEW: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5017961e-f557-11ed-0a80-11cd001da788',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5017961e-f557-11ed-0a80-11cd001da788',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Новый',
		color: 12430848,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	PROCESSING: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5017972b-f557-11ed-0a80-11cd001da789',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5017972b-f557-11ed-0a80-11cd001da789',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'На сборке',
		color: 40931,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	PICKUP: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/501798d3-f557-11ed-0a80-11cd001da78b',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '501798d3-f557-11ed-0a80-11cd001da78b',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Передан доставке',
		color: 8825440,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	READY_TO_SHIP: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5017978a-f557-11ed-0a80-11cd001da78a',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5017978a-f557-11ed-0a80-11cd001da78a',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Собран',
		color: 15106326,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	DELIVERY: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5017991e-f557-11ed-0a80-11cd001da78c',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5017991e-f557-11ed-0a80-11cd001da78c',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Доставляется',
		color: 8825440,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	DELIVERED: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/50179979-f557-11ed-0a80-11cd001da78d',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '50179979-f557-11ed-0a80-11cd001da78d',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Доставлен',
		color: 34617,
		stateType: 'Successful',
		entityType: 'customerorder',
	},
	CANCELLED: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/50179a31-f557-11ed-0a80-11cd001da78e',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '50179a31-f557-11ed-0a80-11cd001da78e',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Отменен в процессе обработки',
		color: 15280409,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
	CANCELLED_IN_DELIVERY: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/ddb344c2-9690-11ee-0a80-09df001ec863',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: 'ddb344c2-9690-11ee-0a80-09df001ec863',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Отменен в процессе доставки',
		color: 15280409,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
	RETURNED: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5eb7909c-9354-11ee-0a80-1091000d155b',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5eb7909c-9354-11ee-0a80-1091000d155b',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Возврат',
		color: 9245744,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
	PARTIALLY_RETURNED: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/5eb799af-9354-11ee-0a80-1091000d155d',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: '5eb799af-9354-11ee-0a80-1091000d155d',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Частичный возврат',
		color: 9245744,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
	UNKNOWN: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/a5b7e021-94f8-11ee-0a80-111f00295438',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: 'a5b7e021-94f8-11ee-0a80-111f00295438',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Неизвестный статус',
		color: 15491487,
		stateType: 'Regular',
		entityType: 'customerorder',
	},
	LOST: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/a6bba379-9590-11ee-0a80-024600053a2f',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: 'a6bba379-9590-11ee-0a80-024600053a2f',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Утерян',
		color: 15280409,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
	PICKED_REFUND: {
		meta: {
			href: 'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/b7bad68e-9052-11ef-0a80-0b71000c3a7b',
			metadataHref:
				'https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata',
			type: 'state' as Entity.State,
			mediaType: MediaType.Json,
		},
		id: 'b7bad68e-9052-11ef-0a80-0b71000c3a7b',
		accountId: '4f45c052-f557-11ed-0a80-0cd400013e78',
		name: 'Возврат получен',
		color: 34617,
		stateType: 'Unsuccessful',
		entityType: 'customerorder',
	},
}

export const sourceStore = {
	meta: {
		href: 'https://api.moysklad.ru/api/remap/1.2/entity/store/a8306907-9450-11ee-0a80-109f00177296',
		metadataHref:
			'https://api.moysklad.ru/api/remap/1.2/entity/store/metadata',
		type: 'store',
		mediaType: 'application/json',
		uuidHref:
			'https://online.moysklad.ru/app/#warehouse/edit?id=a8306907-9450-11ee-0a80-109f00177296',
	},
}

export declare interface ProcessingOrder extends Idable, Meta<Entity.ProcessingOrder> {
	readonly accountId: string
	agent: Meta<Entity.Counterparty>
	agentAccount?: Meta<Entity.Account>
	applicable: boolean
	attributes?: Attribute[]
	code?: string
	contract?: Meta<Entity.Contract>
	readonly created: DateTime
	readonly deleted?: DateTime
	deliveryPlannedMoment?: DateTime
	description?: string
	externalCode: string
	files: unknown[]
	group: Meta<Entity.Group>
	readonly invoicedSum: number
	moment: DateTime
	name: string
	organization: Meta<Entity.Organization>
	organizationAccount?: Meta<Entity.Account>
	owner?: Meta<Entity.Employee>
	readonly payedSum: number
	positions: ListMeta<Entity.ProcessingOrderPosition>
	readonly printed: boolean
	project?: Meta<Entity.Project>
	readonly published: boolean
	rate: DocumentRate
	readonly reservedSum: number
	salesChannel?: Meta<Entity.SalesChannel>
	shared: boolean
	shipmentAddress?: string
	shipmentAddressFull?: {
		addInfo?: string
		apartment?: string
		city?: string
		comment?: string
		country?: Meta<Entity.Country>
		house?: string
		postalCode?: string
		region?: Meta<Entity.Region>
		street?: string
	}
	readonly shippedSum: number
	state?: Meta<Entity.State>
	store?: Meta<Entity.Store>
	readonly sum: number
	syncId?: string
	taxSystem?: TaxSystem
	readonly updated: DateTime
	vatEnabled: boolean
	vatIncluded: boolean
	readonly vatSum: number
	purchaseOrders?: unknown
	demands?: Meta<Entity.Demand>[]
	payments?: unknown
	invoicesOut?: unknown
	moves?: unknown
	prepayments?: unknown
}

export declare interface Processing extends Idable, Meta<Entity.Processing> {
	readonly accountId: string
	agent: Meta<Entity.Counterparty>
	agentAccount?: Meta<Entity.Account>
	applicable: boolean
	attributes?: Attribute[]
	code?: string
	contract?: Meta<Entity.Contract>
	readonly created: DateTime
	readonly deleted?: DateTime
	deliveryPlannedMoment?: DateTime
	description?: string
	externalCode: string
	files: unknown[]
	group: Meta<Entity.Group>
	readonly invoicedSum: number
	moment: DateTime
	name: string
	organization: Meta<Entity.Organization>
	organizationAccount?: Meta<Entity.Account>
	owner?: Meta<Entity.Employee>
	readonly payedSum: number
	positions: ListMeta<Entity.ProcessingOrderPosition>
	readonly printed: boolean
	project?: Meta<Entity.Project>
	readonly published: boolean
	rate: DocumentRate
	readonly reservedSum: number
	salesChannel?: Meta<Entity.SalesChannel>
	shared: boolean
	shipmentAddress?: string
	shipmentAddressFull?: {
		addInfo?: string
		apartment?: string
		city?: string
		comment?: string
		country?: Meta<Entity.Country>
		house?: string
		postalCode?: string
		region?: Meta<Entity.Region>
		street?: string
	}
	readonly shippedSum: number
	state?: Meta<Entity.State>
	store?: Meta<Entity.Store>
	readonly sum: number
	syncId?: string
	taxSystem?: TaxSystem
	readonly updated: DateTime
	vatEnabled: boolean
	vatIncluded: boolean
	readonly vatSum: number
	purchaseOrders?: unknown
	demands?: Meta<Entity.Demand>[]
	payments?: unknown
	invoicesOut?: unknown
	moves?: unknown
	prepayments?: unknown
}

export const commissionTypes = [
	{
		id: 'ee32b906-95a7-11ee-0a80-107d000a1171',
		name: 'Размещение товаров на витрине',
		type: 'FEE',
	},
	{
		id: 'ee32bc6d-95a7-11ee-0a80-107d000a1173',
		name: 'Приём платежа покупателя',
		type: 'AGENCY',
	},
	{
		id: 'f719cd6f-95ad-11ee-0a80-0179000b864b',
		name: 'Перевод платежа покупателя',
		type: 'PAYMENT_TRANSFER',
	},
	{
		id: 'ee32bb61-95a7-11ee-0a80-107d000a1172',
		name: 'Участие в программе лояльности',
		type: 'LOYALTY_PARTICIPATION_FEE',
	},
	{
		id: 'ee32bd45-95a7-11ee-0a80-107d000a1174',
		name: 'Буст продаж',
		type: 'AUCTION_PROMOTION',
	},
	{
		id: 'ee32c117-95a7-11ee-0a80-107d000a1175',
		name: 'Доставка покупателю',
		type: 'DELIVERY_TO_CUSTOMER',
	},
	{
		id: '4136c718-95a8-11ee-0a80-0834000a4aba',
		name: 'Обработка заказа FBS',
		type: 'SORTING',
	},
	{
		id: '66dd48c7-95a8-11ee-0a80-0e9e0009fc78',
		name: 'Хранение невыкупов и возвратов',
		type: 'RETURNED_ORDERS_STORAGE',
	},
]
