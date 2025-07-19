import { Body, Controller, Post } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { TbankService } from './tbank.service'
import { TbankNotification } from './types/tbank-types'

@Controller()
export class TbankController {
	constructor(private readonly tbankService: TbankService, private readonly logger: AppLogger) {
	}

	@Post('operations')
	async handleOperation(@Body() body: TbankNotification) {
		try {
			this.logger.log(`Получена операция от TBank: ${JSON.stringify(body)}`)
			await this.tbankService.handleOperation(body)
			return { status: 200, message: 'ok' }
		}
		catch (error) {
			this.logger.error(`Ошибка обработки операции TBank: ${error as string}`)
			return {
				status: 500,
				error: 'Internal Server Error',
			}
		}
	}
}
