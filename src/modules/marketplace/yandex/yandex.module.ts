import { MoyskladModule } from '@modules/moysklad/moysklad.module'
import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppLogger } from '@shared/logger.service'
import { ChatArbitrageFinishedNotificationHandler } from './handlers/chat-arbitrage-finished-notification.handler'
import { ChatArbitrageStartedNotificationHandler } from './handlers/chat-arbitrage-started-notification.handler'
import { ChatCreatedNotificationHandler } from './handlers/chat-created-notification.handler'
import { ChatMessageSentNotificationHandler } from './handlers/chat-message-sent-notification.handler'
import { GoodsFeedbackCommentCreatedNotificationHandler } from './handlers/goods-feedback-comment-created-notification.handler'
import { GoodsFeedbackCreatedNotificationHandler } from './handlers/goods-feedback-created-notification.handler'
import { NotificationHandlerFactory } from './handlers/notification-handler.factory'
import { OrderCancellationRequestNotificationHandler } from './handlers/order-cancellation-request-notification.handler'
import { OrderCancelledNotificationHandler } from './handlers/order-cancelled-notification.handler'
import { OrderCreatedNotificationHandler } from './handlers/order-created-notification.handler'
import { OrderReturnCreatedNotificationHandler } from './handlers/order-return-created-notification.handler'
import { OrderReturnStatusUpdatedNotificationHandler } from './handlers/order-return-status-updated-notification.handler'
import { OrderStatusUpdatedNotificationHandler } from './handlers/order-status-updated-notification.handler'
import { PingNotificationHandler } from './handlers/ping-notification.handler'
import { YandexApiService } from './yandex.api'
import { YandexController } from './yandex.controller'
import { YandexService } from './yandex.service'

@Module({
	imports: [HttpModule, ConfigModule, MoyskladModule],
	controllers: [YandexController],
	providers: [
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
