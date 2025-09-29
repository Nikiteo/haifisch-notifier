import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppLogger } from '../../../shared/logger.service.js'
import { GigaChatModule } from '../../gigachat/gigachat.module.js'
import { MoyskladModule } from '../../moysklad/moysklad.module.js'
import { TelegramService } from '../../telegram/telegram.service.js'
import { NotificationQueuesModule } from '../notification-queue/notification-queue.module.js'
import { NotificationHandlerFactory } from './handlers/notification-handler.factory.js'
import { OrderCancelledNotificationHandler } from './handlers/order-cancelled-notification.handler.js'
import { OrderCreatedNotificationHandler } from './handlers/order-created-notification.handler.js'
import { OrderStatusUpdatedNotificationHandler } from './handlers/order-status-updated-notification.handler.js'
import { PingNotificationHandler } from './handlers/ping-notification.handler.js'
import { OzonApiService } from './ozon.api.js'
import { OzonController } from './ozon.controller.js'
import { OzonService } from './ozon.service.js'

@Module({
	imports: [HttpModule, ConfigModule, MoyskladModule, GigaChatModule, NotificationQueuesModule],
	controllers: [OzonController],
	providers: [TelegramService, OzonService, OzonApiService, NotificationHandlerFactory, PingNotificationHandler, OrderCancelledNotificationHandler, OrderCreatedNotificationHandler, OrderStatusUpdatedNotificationHandler, AppLogger],
})
export class OzonModule {}
