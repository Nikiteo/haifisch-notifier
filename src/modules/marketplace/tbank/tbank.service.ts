import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { TbankOperationsService } from './tbank-operations.service'
import { TbankNotification } from './types/tbank-types'

@Injectable()
export class TbankService {
	constructor(private readonly tbankOperationsService: TbankOperationsService, private readonly logger: AppLogger) {
	}

	async handleOperation(operation: TbankNotification) {
		try {
			await this.tbankOperationsService.handleOperation(operation)
		}
		catch (e) {
			this.logger.error(`Ошибка в tbankOperations: ${e as string}`)
		}
	}
}
