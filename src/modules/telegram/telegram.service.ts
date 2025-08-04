import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { AppLogger } from '../../shared/logger.service.js'

@Injectable()
export class BotClientService {
	private readonly url: string

	constructor(private readonly httpService: HttpService, private readonly config: ConfigService, private readonly logger: AppLogger) {
		const url = this.config.get<string>('TELEGRAM_URL')
		if (url === undefined || url === null || url.trim() === '') {
			throw new Error('TELEGRAM_URL is not configured')
		}
		this.url = url
	}

	async sendTelegramMessage(chatId: number, text: string): Promise<void> {
		try {
			await firstValueFrom(
				this.httpService.post(this.url, {
					chatId,
					text,
				}),
			)
		}
		catch (error) {
			if (error instanceof AggregateError) {
				for (const err of error.errors) {
					this.logger.error(`Ошибка отправки телеграм-сообщения: ${JSON.stringify(err)}`)
				}
				// eslint-disable-next-line ts/no-unsafe-return, ts/no-unsafe-member-access
				throw new Error(`Ошибка при отправке сообщения в телеграм: ${error.errors.map(e => e.message).join('; ')}`)
			}

			this.logger.error(`Неизвестная ошибка при отправке сообщения: ${JSON.stringify(error)}`)
			throw new Error(`Ошибка при отправке сообщения в телеграм: ${error instanceof Error ? error.message : String(error)}`)
		}
	}
}
