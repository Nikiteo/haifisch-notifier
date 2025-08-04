import { Inject, Injectable } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { NotificationQueueService } from '../notification-queue/notification-queue.service.js'
import { NewPostingNotificationDTO, PingNotificationDTO, PostingCancelledNotificationDTO, StateChangedNotificationDTO } from './dto/index.js'
import { NotificationHandlerFactory } from './handlers/notification-handler.factory.js'
import { MessageType } from './types/ozon-types.js'

/**
 * Сервис для обработки уведомлений от Ozon.
 */
@Injectable()
export class OzonService {
	constructor(
		private readonly logger: AppLogger,
		private readonly handlerFactory: NotificationHandlerFactory,
		@Inject('OZON_QUEUE') private readonly queue: NotificationQueueService,
	) {}

	/**
	 * Обработка PING-уведомления.
	 * @param notification DTO для PING-уведомления.
	 */
	async handlePingNotification(notification: PingNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(MessageType.TYPE_PING).handle(notification)
	}

	/**
	 * Обработка уведомления о создании заказа.
	 * @param notification DTO для уведомления о создании заказа.
	 */
	async handleOrderCreated(notification: NewPostingNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(MessageType.TYPE_NEW_POSTING).handle(notification)
	}

	/**
	 * Обработка уведомления об отмене заказа.
	 * @param notification DTO для уведомления об отмене заказа.
	 */
	async handleOrderCancelled(notification: PostingCancelledNotificationDTO): Promise<void> {
		await this.handlerFactory.getHandler(MessageType.TYPE_POSTING_CANCELLED).handle(notification)
	}

	/**
	 * Обработка уведомления об обновлении статуса заказа.
	 * @param notification DTO для уведомления об обновлении статуса заказа.
	 */
	async handleOrderStatusUpdated(notification: StateChangedNotificationDTO): Promise<void> {
		await this.queue.add(async () => {
			await this.handlerFactory.getHandler(MessageType.TYPE_STATE_CHANGED).handle(notification)
		})
	}
}
