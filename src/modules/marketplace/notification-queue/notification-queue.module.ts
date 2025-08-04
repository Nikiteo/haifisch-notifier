import { Module } from '@nestjs/common'
import { NotificationQueueService } from './notification-queue.service.js'

@Module({
	providers: [
		{
			provide: 'OZON_QUEUE',
			useFactory: () => {
				const queue = new NotificationQueueService()
				queue.setDelay(1000)
				return queue
			},
		},
		{
			provide: 'YANDEX_QUEUE',
			useFactory: () => {
				const queue = new NotificationQueueService()
				queue.setDelay(1000)
				return queue
			},
		},
	],
	exports: ['OZON_QUEUE', 'YANDEX_QUEUE'],
})
export class NotificationQueuesModule {}
