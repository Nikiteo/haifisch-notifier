import { Body, Controller, HttpException, HttpStatus, Post, UsePipes } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { BotClientService } from '../../telegram/telegram.service.js'
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
	SendNotificationErrorResponseDTO,
	SendNotificationResponseDTO,
} from './dto/index.js'
import { NotificationValidationPipe } from './pipes/notification-validation.pipe.js'
import { NotificationApiErrorType, NotificationType } from './types/yandex-types.js'
import { YandexService } from './yandex.service.js'

type NotificationDTO
	= | PingNotificationDTO
		| OrderCreatedNotificationDTO
		| OrderCancelledNotificationDTO
		| OrderCancellationRequestNotificationDTO
		| OrderStatusUpdatedNotificationDTO
		| OrderReturnCreatedNotificationDTO
		| OrderReturnStatusUpdatedNotificationDTO
		| GoodsFeedbackCreatedNotificationDTO
		| GoodsFeedbackCommentCreatedNotificationDTO
		| ChatCreatedNotificationDTO
		| ChatMessageSentNotificationDTO
		| ChatArbitrageStartedNotificationDTO
		| ChatArbitrageFinishedNotificationDTO

/**
 * Контроллер для обработки уведомлений от Яндекс.Маркета.
 */
@Controller()
export class YandexController {
	constructor(private readonly yandexService: YandexService, private readonly logger: AppLogger, private readonly telegram: BotClientService) {}

	@Post('notification')
	@UsePipes(NotificationValidationPipe)
	async handleNotification(
    @Body() body: NotificationDTO,
	): Promise<SendNotificationResponseDTO | SendNotificationErrorResponseDTO> {
		try {
			this.logger.log(`Получено уведомление от Яндекса: ${JSON.stringify(body)}`)
			await this.telegram.sendTelegramMessage(838975962, `Получено уведомление от Яндекса: \`\`\`json\n${JSON.stringify(body, null, 2)}\n\`\`\``)

			this.processNotification(body).catch((error) => {
				this.logger.error(`Ошибка асинхронной обработки уведомления: ${error instanceof Error ? error.message : String(error)}`)
			})

			return {
				version: '1.0.0',
				name: 'Haifisch',
				time: new Date().toISOString(),
			}
		}
		catch (error) {
			this.logger.error(`Ошибка обработки уведомления Яндекс: ${error instanceof Error ? error.message : String(error)}`)
			throw new HttpException(
				{
					error: {
						type: NotificationApiErrorType.UNKNOWN,
						message: 'UNKNOWN error',
					},
				},
				HttpStatus.INTERNAL_SERVER_ERROR,
			)
		}
	}

	/**
	 * Асинхронная обработка уведомления.
	 * @param body DTO уведомления.
	 */
	private async processNotification(body: NotificationDTO): Promise<void> {
		if (body.notificationType === undefined) {
			throw new Error('Notification type is undefined')
		}

		switch (body.notificationType) {
			case NotificationType.PING:
				await this.yandexService.handlePingNotification(body)
				break
			case NotificationType.ORDER_CREATED:
				await this.yandexService.handleOrderCreated(body)
				break
			case NotificationType.ORDER_CANCELLED:
				await this.yandexService.handleOrderCancelled(body)
				break
			case NotificationType.ORDER_CANCELLATION_REQUEST:
				await this.yandexService.handleOrderCancellationRequest(body)
				break
			case NotificationType.ORDER_STATUS_UPDATED:
				await this.yandexService.handleOrderStatusUpdated(body)
				break
			case NotificationType.ORDER_RETURN_CREATED:
				await this.yandexService.handleOrderReturnCreated(body)
				break
			case NotificationType.ORDER_RETURN_STATUS_UPDATED:
				await this.yandexService.handleOrderReturnStatusUpdated(body)
				break
			case NotificationType.GOODS_FEEDBACK_CREATED:
				await this.yandexService.handleGoodsFeedbackCreated(body)
				break
			case NotificationType.GOODS_FEEDBACK_COMMENT_CREATED:
				await this.yandexService.handleGoodsFeedbackCommentCreated(body)
				break
			case NotificationType.CHAT_CREATED:
				await this.yandexService.handleChatCreated(body)
				break
			case NotificationType.CHAT_MESSAGE_SENT:
				await this.yandexService.handleChatMessageSent(body)
				break
			case NotificationType.CHAT_ARBITRAGE_STARTED:
				await this.yandexService.handleChatArbitrageStarted(body)
				break
			case NotificationType.CHAT_ARBITRAGE_FINISHED:
				await this.yandexService.handleChatArbitrageFinished(body)
				break
			default:
				throw new Error('Unsupported notification type')
		}
	}
}
