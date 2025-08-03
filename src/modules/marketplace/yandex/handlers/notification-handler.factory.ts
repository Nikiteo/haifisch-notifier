import { Injectable } from '@nestjs/common'
import { NotificationType } from '../types/yandex-types.js'

import { BaseNotificationHandler } from './base-notification.handler.js'
import { ChatArbitrageFinishedNotificationHandler } from './chat-arbitrage-finished-notification.handler.js'
import { ChatArbitrageStartedNotificationHandler } from './chat-arbitrage-started-notification.handler.js'
import { ChatCreatedNotificationHandler } from './chat-created-notification.handler.js'
import { ChatMessageSentNotificationHandler } from './chat-message-sent-notification.handler.js'
import { GoodsFeedbackCommentCreatedNotificationHandler } from './goods-feedback-comment-created-notification.handler.js'
import { GoodsFeedbackCreatedNotificationHandler } from './goods-feedback-created-notification.handler.js'
import { OrderCancellationRequestNotificationHandler } from './order-cancellation-request-notification.handler.js'
import { OrderCancelledNotificationHandler } from './order-cancelled-notification.handler.js'
import { OrderCreatedNotificationHandler } from './order-created-notification.handler.js'
import { OrderReturnCreatedNotificationHandler } from './order-return-created-notification.handler.js'
import { OrderReturnStatusUpdatedNotificationHandler } from './order-return-status-updated-notification.handler.js'
import { OrderStatusUpdatedNotificationHandler } from './order-status-updated-notification.handler.js'
import { PingNotificationHandler } from './ping-notification.handler.js'

/**
 * Фабрика для получения обработчиков уведомлений.
 */
@Injectable()
export class NotificationHandlerFactory {
	private handlers: Record<NotificationType, BaseNotificationHandler>

	constructor(
		private readonly pingHandler: PingNotificationHandler,
		private readonly orderCreatedHandler: OrderCreatedNotificationHandler,
		private readonly orderCancelledHandler: OrderCancelledNotificationHandler,
		private readonly orderCancellationRequestHandler: OrderCancellationRequestNotificationHandler,
		private readonly orderStatusUpdatedHandler: OrderStatusUpdatedNotificationHandler,
		private readonly orderReturnCreatedHandler: OrderReturnCreatedNotificationHandler,
		private readonly orderReturnStatusUpdatedHandler: OrderReturnStatusUpdatedNotificationHandler,
		private readonly goodsFeedbackCreatedHandler: GoodsFeedbackCreatedNotificationHandler,
		private readonly goodsFeedbackCommentCreatedHandler: GoodsFeedbackCommentCreatedNotificationHandler,
		private readonly chatCreatedHandler: ChatCreatedNotificationHandler,
		private readonly chatMessageSentHandler: ChatMessageSentNotificationHandler,
		private readonly chatArbitrageStartedHandler: ChatArbitrageStartedNotificationHandler,
		private readonly chatArbitrageFinishedHandler: ChatArbitrageFinishedNotificationHandler,
	) {
		this.handlers = {
			[NotificationType.PING]: pingHandler,
			[NotificationType.ORDER_CREATED]: orderCreatedHandler,
			[NotificationType.ORDER_CANCELLED]: orderCancelledHandler,
			[NotificationType.ORDER_CANCELLATION_REQUEST]: orderCancellationRequestHandler,
			[NotificationType.ORDER_STATUS_UPDATED]: orderStatusUpdatedHandler,
			[NotificationType.ORDER_RETURN_CREATED]: orderReturnCreatedHandler,
			[NotificationType.ORDER_RETURN_STATUS_UPDATED]: orderReturnStatusUpdatedHandler,
			[NotificationType.GOODS_FEEDBACK_CREATED]: goodsFeedbackCreatedHandler,
			[NotificationType.GOODS_FEEDBACK_COMMENT_CREATED]: goodsFeedbackCommentCreatedHandler,
			[NotificationType.CHAT_CREATED]: chatCreatedHandler,
			[NotificationType.CHAT_MESSAGE_SENT]: chatMessageSentHandler,
			[NotificationType.CHAT_ARBITRAGE_STARTED]: chatArbitrageStartedHandler,
			[NotificationType.CHAT_ARBITRAGE_FINISHED]: chatArbitrageFinishedHandler,
		}
	}

	/**
	 * Получить обработчик по типу уведомления.
	 * @param notificationType Тип уведомления.
	 * @returns Обработчик для указанного типа уведомления.
	 */
	getHandler(notificationType: NotificationType): BaseNotificationHandler {
		const handler = this.handlers[notificationType]
		// eslint-disable-next-line ts/strict-boolean-expressions
		if (!handler) {
			throw new Error(`No handler found for notification type: ${notificationType}`)
		}
		return handler
	}
}
