import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { states } from '../database.js'
import { OrderReturnCreatedNotificationDTO } from '../dto/index.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

dayjs.extend(customParseFormat)

/**
 * Обработчик для уведомлений о создании нового невыкупа или возврата.
 */
@Injectable()
export class OrderReturnCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления о создании нового невыкупа или возврата.
	 * @param notification DTO для уведомления о создании нового невыкупа или возврата.
	 */
	async handle(notification: OrderReturnCreatedNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { orderId, campaignId } = notification

			const store = campaignId === 23726642 ? 'Haifisch' : 'Top'

			this.logger.log(`[${store}]: Создание невыкупа или возврата ${notification.orderId} в МС...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: orderId.toString(),
				},
			})

			const [orderInMs] = rows

			if (!orderInMs.id) {
				this.logger.error(`[${store}]: Заказ ${orderId} не найден в МС`)
				return
			}

			this.logger.log(`[${store}]: Заказ ${orderId} найден в МС id=${orderInMs.id}`)

			await ms.customerOrder.update(orderInMs.id, {
				state: states.RETURNED,
			})

			this.logger.log(`[${store}]: Статус заказа ${orderId} успешно обновлен в МС...`)
		}
		catch (error) {
			this.handleError(`Ошибка создания невыкупа или возврата ${notification.orderId}`, error)
		}
	}
}
