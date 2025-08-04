import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../../shared/logger.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { NewPostingNotificationDTO } from '../dto/index.js'
import { OzonApiService } from '../ozon.api.js'
import { OzonResponse, PostingFbs, PostingsFbsRequest } from '../types/api.js'
import { orderMapper } from '../utils/order.mapper.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для уведомлений о создании заказа.
 */
@Injectable()
export class OrderCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: OzonApiService) {
		super(logger, moyskladService, api)
	}

	/**
	 * Обработка уведомления о создании заказа.
	 * @param notification DTO для уведомления о создании заказа.
	 */
	async handle(notification: NewPostingNotificationDTO): Promise<void> {
		try {
			const ms = this.moyskladService.getClient()
			const { posting_number, in_process_at, message_type } = notification
			const store = 'OZON'

			this.logger.log(`[${store}]: Поступило уведомление - ${message_type}`)
			this.logger.log(`[${store}]: Создание заказа ${posting_number} в МC...`)

			const { rows } = await ms.customerOrder.list({
				filter: {
					name: posting_number.toString(),
				},
			})

			const [orderInMs] = rows

			if (orderInMs !== undefined && orderInMs?.id) {
				this.logger.warn(`[${store}]: Заказ ${posting_number} уже есть в МС (id=${orderInMs.id})`)
				return
			}

			const { result } = await this.api.post<OzonResponse<PostingFbs>, PostingsFbsRequest>(
				`v3/posting/fbs/get`,
				{
					posting_number,
					with: {
						analytics_data: true,
						barcodes: false,
						financial_data: true,
						translit: true,
					},
				},
			)

			if (result === undefined) {
				this.logger.warn(`[${store}]: Заказ ${posting_number} не найден в системе Ozon`)
				return
			}

			this.logger.log(`[${store}]: Получены данные заказа ${posting_number} из Ozon...`)

			const products = await ms.product.all({
				filter: {
					pathName: 'Изделия',
				},
			})
			const boughtProducts = products.rows.filter(product => result.products?.some(item => item.offer_id === product.article))

			this.logger.log(`[${store}]: Получены данные заказа ${posting_number} из МС...`)

			const payload = orderMapper(result, in_process_at, boughtProducts)

			const createdOrder = await ms.customerOrder.create(payload)

			this.logger.log(`[${store}]: Создан заказ в МС: id=${createdOrder.id}`)
		}
		catch (error) {
			this.handleError(`Ошибка при обработке уведомления создания заказа из Ozon с id=${notification.posting_number}`, error)
		}
	}
}
