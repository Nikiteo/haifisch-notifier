import { Controller, Post } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { OzonService } from './ozon.service'

@Controller()
export class OzonController {
	constructor(private readonly ozonService: OzonService, private readonly logger: AppLogger) {
	}

	@Post('')
	async handleNotification() {
		try {
			this.logger.log('Получена нотификация от Ozon')
			return {
				version: '1.0.0',
				name: 'Haifisch',
				time: new Date().toISOString(),
			}
		}
		catch (error) {
			this.logger.error(`Ошибка обработки нотификации Ozon: ${error as string}`)
			throw error
		}
	}
}
