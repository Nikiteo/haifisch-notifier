import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { states } from '../database.js'
import { PostingCancelledNotificationDTO } from '../dto/index.js'
import { OzonApiService } from '../ozon.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для уведомлений об отмене заказа.
 */
@Injectable()
export class OrderCancelledNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: OzonApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления об отмене заказа.
	 * @param notification DTO для уведомления об отмене заказа.
	 */
	async handle(notification: PostingCancelledNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { posting_number } = notification
			const store = 'OZON'

			this.logger.log(`[${store}]: Изменение статуса заказа ${posting_number} в МС...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: posting_number.toString(),
				},
			})

			const [orderInMs] = rows

			if (orderInMs === undefined || orderInMs === null) {
				this.logger.error(`[${store}]: Заказ ${posting_number} не найден в МС`)
				return
			}

			this.logger.log(`[${store}]: Заказ ${posting_number} найден в МС id=${orderInMs.id}`)

			this.logger.log(`[${store}]: Новый статус заказа - ${states.CANCELLED.name}`)

			await ms.customerOrder.update(orderInMs.id, {
				state: states.CANCELLED,
			})

			this.logger.log(`[${store}]: Статус заказа ${posting_number} успешно обновлен в МС...`)
		}
		catch (error) {
			this.handleError(`Ошибка Отмена заказа Ozon ${notification.posting_number}`, error)
		}
	}
}
