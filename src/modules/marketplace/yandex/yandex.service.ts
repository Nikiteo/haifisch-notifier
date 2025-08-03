import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import {
	ChatArbitrageFinishedNotificationDTO,
	ChatArbitrageStartedNotificationDTO,
	ChatCreatedNotificationDTO,
	ChatMessageSentNotificationDTO,
	GoodsFeedbackCommentCreatedNotificationDTO,
	GoodsFeedbackCreatedNotificationDTO,
	OrderCancellationRequestNotificationDTO,
	OrderCancelledNotificationDTO,
	OrderCreatedNotificationDTO,
	OrderReturnCreatedNotificationDTO,
	OrderReturnStatusUpdatedNotificationDTO,
	OrderStatusUpdatedNotificationDTO,
	PingNotificationDTO,
} from './dto/index.js'
import { NotificationHandlerFactory } from './handlers/notification-handler.factory.js'
import { NotificationType } from './types/yandex-types.js'

/**
 * Сервис для обработки уведомлений от Яндекс.Маркета.
 */
@Injectable()
export class YandexService {
	constructor(
		private readonly logger: AppLogger,
		private readonly handlerFactory: NotificationHandlerFactory,
	) {}

	/**
	 * Обработка PING-уведомления.
	 * @param notification DTO для PING-уведомления.
	 */
	async handlePingNotification(notification: PingNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.PING).handle(notification)
	}

	/**
	 * Обработка уведомления о создании заказа.
	 * @param notification DTO для уведомления о создании заказа.
	 */
	async handleOrderCreated(notification: OrderCreatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_CREATED).handle(notification)
	}

	/**
	 * Обработка уведомления об отмене заказа.
	 * @param notification DTO для уведомления об отмене заказа.
	 */
	async handleOrderCancelled(notification: OrderCancelledNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_CANCELLED).handle(notification)
	}

	/**
	 * Обработка уведомления о запросе на отмену заказа.
	 * @param notification DTO для уведомления о запросе на отмену.
	 */
	async handleOrderCancellationRequest(notification: OrderCancellationRequestNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_CANCELLATION_REQUEST).handle(notification)
	}

	/**
	 * Обработка уведомления об обновлении статуса заказа.
	 * @param notification DTO для уведомления об обновлении статуса заказа.
	 */
	async handleOrderStatusUpdated(notification: OrderStatusUpdatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_STATUS_UPDATED).handle(notification)
	}

	/**
	 * Обработка уведомления о создании возврата.
	 * @param notification DTO для уведомления о создании возврата.
	 */
	async handleOrderReturnCreated(notification: OrderReturnCreatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_RETURN_CREATED).handle(notification)
	}

	/**
	 * Обработка уведомления об обновлении статуса возврата.
	 * @param notification DTO для уведомления об обновлении статуса возврата.
	 */
	async handleOrderReturnStatusUpdated(notification: OrderReturnStatusUpdatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.ORDER_RETURN_STATUS_UPDATED).handle(notification)
	}

	/**
	 * Обработка уведомления о создании отзыва о товаре.
	 * @param notification DTO для уведомления о создании отзыва.
	 */
	async handleGoodsFeedbackCreated(notification: GoodsFeedbackCreatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.GOODS_FEEDBACK_CREATED).handle(notification)
	}

	/**
	 * Обработка уведомления о создании комментария к отзыву.
	 * @param notification DTO для уведомления о создании комментария.
	 */
	async handleGoodsFeedbackCommentCreated(notification: GoodsFeedbackCommentCreatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.GOODS_FEEDBACK_COMMENT_CREATED).handle(notification)
	}

	/**
	 * Обработка уведомления о создании чата.
	 * @param notification DTO для уведомления о создании чата.
	 */
	async handleChatCreated(notification: ChatCreatedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.CHAT_CREATED).handle(notification)
	}

	/**
	 * Обработка уведомления о новом сообщении в чате.
	 * @param notification DTO для уведомления о новом сообщении.
	 */
	async handleChatMessageSent(notification: ChatMessageSentNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.CHAT_MESSAGE_SENT).handle(notification)
	}

	/**
	 * Обработка уведомления о начале спора в чате.
	 * @param notification DTO для уведомления о начале спора.
	 */
	async handleChatArbitrageStarted(notification: ChatArbitrageStartedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.CHAT_ARBITRAGE_STARTED).handle(notification)
	}

	/**
	 * Обработка уведомления о завершении спора в чате.
	 * @param notification DTO для уведомления о завершении спора.
	 */
	async handleChatArbitrageFinished(notification: ChatArbitrageFinishedNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(NotificationType.CHAT_ARBITRAGE_FINISHED).handle(notification)
	}
}
