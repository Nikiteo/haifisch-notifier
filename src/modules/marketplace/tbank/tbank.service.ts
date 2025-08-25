import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { TbankNotificationDTO } from './dto/tbank-notification.dto.js'
import { TbankOperationsService } from './tbank-operations.service.js'

@Injectable()
export class TbankService {
	constructor(private readonly tbankOperationsService: TbankOperationsService, private readonly logger: AppLogger) {
	}

	async handleOperation(operation: TbankNotificationDTO) {
		try {
			await this.tbankOperationsService.handleOperation(operation)
		}
		catch (e) {
			this.logger.error(`Ошибка в tbankOperations: ${e as string}`)
		}
	}
}
