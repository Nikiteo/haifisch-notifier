import { Injectable } from '@nestjs/common'

import { ChatCompletion } from 'gigachat/src/interfaces/index.js'
import { AppLogger } from '../../../../shared/logger.service.js'
import { GigaChatService } from '../../../gigachat/gigachat.service.js'
import { MoyskladService } from '../../../moysklad/moysklad.service.js'
import { GoodsFeedbackCreatedNotificationDTO } from '../dto/index.js'
import { GetGoodsFeedbackRequest, GetGoodsFeedbackResponse, UpdateGoodsFeedbackCommentRequest, UpdateGoodsFeedbackCommentResponse } from '../types/api.js'
import { composeFeedbackText } from '../utils/compose-text.js'
import { feedbackPrompt } from '../utils/feedback-prompt.js'
import { YandexApiService } from '../yandex.api.js'
import { BaseNotificationHandler } from './base-notification.handler.js'

/**
 * Обработчик для GOODS_FEEDBACK_CREATED-уведомлений.
 */
@Injectable()
export class GoodsFeedbackCreatedNotificationHandler extends BaseNotificationHandler {
	constructor(logger: AppLogger, moyskladService: MoyskladService, api: YandexApiService, giga: GigaChatService) {
		super(logger, moyskladService, api, giga)
	}

	/**
	 * Обработка GOODS_FEEDBACK_CREATED-уведомления.
	 * @param notification DTO для GOODS_FEEDBACK_CREATED-уведомления.
	 */
	async handle(notification: GoodsFeedbackCreatedNotificationDTO): Promise<void> {
		try {
			const { createdAt, feedbackId, businessId } = notification
			const store = businessId === 6328344
				? 'Haifisch'
				: 'Top'

			this.logger.log(`[${store}]: Получено ${notification.notificationType} - уведомление в ${notification.createdAt}`)

			const { result } = await this.api.post<GetGoodsFeedbackResponse, GetGoodsFeedbackRequest>(
				`businesses/${businessId}/goods-feedback`,
				store,
				{
					feedbackIds: [feedbackId],
				},
			)

			const feedback = result?.feedbacks[0]

			if (!feedback) {
				this.logger.warn(`[${store}]: Отзыв с ID ${feedbackId} не найден`)
				return
			}
			if (!feedback.needReaction) {
				this.logger.log(`[${store}]: Отзыв ${feedbackId} не требует ответа`)
				return
			}

			const fullText = composeFeedbackText({
				advantages: feedback.description?.advantages,
				disadvantages: feedback.description?.disadvantages,
				comment: feedback.description?.comment,
			})

			const ratingInfo = feedback.statistics.rating
				? `Оценка: ${feedback.statistics.rating}/5`
				: 'Оценка не указана'

			const mediaInfo = feedback.media?.photos || feedback.media?.videos
				? 'Клиент приложил фотографии/видео'
				: ''

			const authorInfo = feedback?.author !== undefined
				? `Уважаемый(ая) ${feedback?.author}`
				: 'Уважаемый клиент'

			const prompt = feedbackPrompt({
				authorInfo,
				ratingInfo,
				mediaInfo,
				fullText,
				date: createdAt,
			})

			const client = await this.giga?.getClient()

			const response = await client?.chat({
				messages: [{ role: 'user', content: prompt }],
				temperature: 0.6,
				max_tokens: 1000,
			}) as ChatCompletion

			if (response === undefined || response.choices[0].message.content === undefined) {
				this.logger.warn(`[${store}] GigaChat не смог ответить на отзыв!`)
				return
			}

			this.logger.log(JSON.stringify(response))

			await this.api.post<UpdateGoodsFeedbackCommentResponse, UpdateGoodsFeedbackCommentRequest>(`businesses/${businessId}/goods-feedback/comments/update`, store, {
				feedbackId,
				comment: {
					text: response.choices[0].message.content,
				},
			})
		}
		catch (error) {
			this.handleError(`Ошибка обработки GOODS_FEEDBACK_CREATED-уведомления ${notification.feedbackId}`, error)
		}
	}
}
