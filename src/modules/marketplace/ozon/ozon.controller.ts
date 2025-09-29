import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UsePipes } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { TelegramService } from '../../telegram/telegram.service.js'
import { NewPostingNotificationDTO } from './dto/new-posting-notification.dto.js'
import { PingNotificationDTO } from './dto/ping-notification.dto.js'
import { PostingCancelledNotificationDTO } from './dto/posting-cancelled-notification.dto.js'
import { SendNotificationErrorResponseDTO } from './dto/send-notification-error-response.dto.js'
import { SendNotificationResponseDTO } from './dto/send-notification-response.dto.js'
import { StateChangedNotificationDTO } from './dto/state-changed-nitification.dto.js'
import { OzonService } from './ozon.service.js'
import { NotificationValidationPipe } from './pipes/notification-validation.pipe.js'
import { MessageType, NotificationApiErrorType } from './types/ozon-types.js'

type NotificationDTO
	= | PingNotificationDTO
		| NewPostingNotificationDTO
		| PostingCancelledNotificationDTO
		| StateChangedNotificationDTO

/**
 * Контроллер для обработки уведомлений от Ozon.
 */
@Controller()
export class OzonController {
	constructor(private readonly ozonService: OzonService, private readonly logger: AppLogger, private readonly bot: TelegramService) {
	}

	@Post('')
	@HttpCode(200)
	@UsePipes(NotificationValidationPipe)
	async handleNotification(
	@Body() body: NotificationDTO,
	): Promise<SendNotificationResponseDTO | SendNotificationErrorResponseDTO> {
		try {
			this.logger.log(`Получено уведомление от Ozon: ${JSON.stringify(body)}`)
			await this.bot.sendMessage(838975962, `Получено уведомление от Ozon: \`\`\`json\n${JSON.stringify(body, null, 2)}\n\`\`\``)

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
			this.logger.error(`Ошибка обработки уведомления Ozon: ${error instanceof Error ? error.message : String(error)}`)
			throw new HttpException(
				{
					error: {
						type: NotificationApiErrorType.ERROR_UNKNOWN,
						message: 'ERROR_UNKNOWN error',
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
		if (body.message_type === undefined) {
			throw new Error('Notification type is undefined')
		}

		switch (body.message_type) {
			case MessageType.TYPE_PING:
				await this.ozonService.handlePingNotification(body)
				break
			case MessageType.TYPE_NEW_POSTING:
				await this.ozonService.handleOrderCreated(body)
				break
			case MessageType.TYPE_POSTING_CANCELLED:
				await this.ozonService.handleOrderCancelled(body)
				break
			case MessageType.TYPE_STATE_CHANGED:
				await this.ozonService.handleOrderStatusUpdated(body)
				break
			default:
				throw new Error('Unsupported notification type')
		}
	}
}
