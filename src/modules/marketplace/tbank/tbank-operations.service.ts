import { Injectable, Logger } from '@nestjs/common'
import { OperationType, TbankNotification } from './types/tbank-types'

@Injectable()
export class TbankOperationsService {
	private readonly logger = new Logger(TbankOperationsService.name)

	async handleOperation(operation: TbankNotification): Promise<void> {
		if (operation.typeOfOperation !== OperationType.Debit)
			return

		try {
			this.logger.log(`Обработка операции ${operation.operationId} типа ${operation.typeOfOperation}`)
		}
		catch (error) {
			this.logger.error(`Ошибка обработки операции ${operation.operationId}`, error)
		}
	}
}
