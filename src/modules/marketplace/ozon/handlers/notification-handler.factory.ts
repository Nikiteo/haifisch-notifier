import { Injectable } from '@nestjs/common'
import { MessageType } from '../types/ozon-types.js'

import { BaseNotificationHandler } from './base-notification.handler.js'
import { OrderCancelledNotificationHandler } from './order-cancelled-notification.handler.js'
import { OrderCreatedNotificationHandler } from './order-created-notification.handler.js'
import { OrderStatusUpdatedNotificationHandler } from './order-status-updated-notification.handler.js'
import { PingNotificationHandler } from './ping-notification.handler.js'

/**
 * Фабрика для получения обработчиков уведомлений.
 */
@Injectable()
export class NotificationHandlerFactory {
	private handlers: Record<MessageType, BaseNotificationHandler>

	constructor(
		private readonly pingHandler: PingNotificationHandler,
		private readonly orderCreatedHandler: OrderCreatedNotificationHandler,
		private readonly orderCancelledHandler: OrderCancelledNotificationHandler,
		private readonly orderStatusUpdatedHandler: OrderStatusUpdatedNotificationHandler,
	) {
		this.handlers = {
			[MessageType.TYPE_PING]: pingHandler,
			[MessageType.TYPE_NEW_POSTING]: orderCreatedHandler,
			[MessageType.TYPE_POSTING_CANCELLED]: orderCancelledHandler,
			[MessageType.TYPE_STATE_CHANGED]: orderStatusUpdatedHandler,
		}
	}

	/**
	 * Получить обработчик по типу уведомления.
	 * @param MessageType Тип уведомления.
	 * @returns Обработчик для указанного типа уведомления.
	 */
	getHandler(MessageType: MessageType): BaseNotificationHandler {
		const handler = this.handlers[MessageType]
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!handler) {
			throw new Error(`No handler found for notification type: ${MessageType}`)
		}
		return handler
	}
}
