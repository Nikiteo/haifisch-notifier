import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { TbankNotificationDTO } from './dto/tbank-notification.dto.js'
import { TbankService } from './tbank.service.js'

@Controller()
export class TbankController {
	constructor(private readonly tbankService: TbankService, private readonly logger: AppLogger) {
	}

	@Post('operations')
	async handleOperation(@Body() body: TbankNotificationDTO) {
		try {
			this.logger.log(`Получена операция от TBank: ${JSON.stringify(body)}`)
			await this.tbankService.handleOperation(body)
			return { status: HttpStatus.OK, message: 'ok' }
		}
		catch (error) {
			this.logger.error(`Ошибка обработки операции TBank: ${error as string}`)
			throw new HttpException(
				{
					message: 'Internal Server Error',
				},
				HttpStatus.INTERNAL_SERVER_ERROR,
			)
		}
	}
}
