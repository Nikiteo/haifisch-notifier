import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppLogger } from '../../../shared/logger.service.js'
import { GigaChatModule } from '../../gigachat/gigachat.module.js'
import { MoyskladModule } from '../../moysklad/moysklad.module.js'
import { TelegramService } from '../../telegram/telegram.service.js'
import { NotificationQueuesModule } from '../notification-queue/notification-queue.module.js'
import { ChatArbitrageFinishedNotificationHandler } from './handlers/chat-arbitrage-finished-notification.handler.js'
import { ChatArbitrageStartedNotificationHandler } from './handlers/chat-arbitrage-started-notification.handler.js'
import { ChatCreatedNotificationHandler } from './handlers/chat-created-notification.handler.js'
import { ChatMessageSentNotificationHandler } from './handlers/chat-message-sent-notification.handler.js'
import { GoodsFeedbackCommentCreatedNotificationHandler } from './handlers/goods-feedback-comment-created-notification.handler.js'
import { GoodsFeedbackCreatedNotificationHandler } from './handlers/goods-feedback-created-notification.handler.js'
import { NotificationHandlerFactory } from './handlers/notification-handler.factory.js'
import { OrderCancellationRequestNotificationHandler } from './handlers/order-cancellation-request-notification.handler.js'
import { OrderCancelledNotificationHandler } from './handlers/order-cancelled-notification.handler.js'
import { OrderCreatedNotificationHandler } from './handlers/order-created-notification.handler.js'
import { OrderReturnCreatedNotificationHandler } from './handlers/order-return-created-notification.handler.js'
import { OrderReturnStatusUpdatedNotificationHandler } from './handlers/order-return-status-updated-notification.handler.js'
import { OrderStatusUpdatedNotificationHandler } from './handlers/order-status-updated-notification.handler.js'
import { PingNotificationHandler } from './handlers/ping-notification.handler.js'
import { YandexApiService } from './yandex.api.js'
import { YandexController } from './yandex.controller.js'
import { YandexService } from './yandex.service.js'

@Module({
	imports: [HttpModule, ConfigModule, MoyskladModule, GigaChatModule, NotificationQueuesModule],
	controllers: [YandexController],
	exports: [YandexApiService],
	providers: [
		TelegramService,
		YandexService,
		YandexApiService,
		NotificationHandlerFactory,
		PingNotificationHandler,
		OrderCreatedNotificationHandler,
		OrderCancelledNotificationHandler,
		OrderCancellationRequestNotificationHandler,
		OrderStatusUpdatedNotificationHandler,
		OrderReturnCreatedNotificationHandler,
		OrderReturnStatusUpdatedNotificationHandler,
		GoodsFeedbackCreatedNotificationHandler,
		GoodsFeedbackCommentCreatedNotificationHandler,
		ChatCreatedNotificationHandler,
		ChatMessageSentNotificationHandler,
		ChatArbitrageStartedNotificationHandler,
		ChatArbitrageFinishedNotificationHandler,
		AppLogger,
	],
})
export class YandexModule {}
