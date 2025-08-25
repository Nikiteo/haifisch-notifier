import { Injectable } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { GigaChatService } from '../../gigachat/gigachat.service.js'
import { MoyskladService } from '../../moysklad/moysklad.service.js'
import { TbankNotificationDTO } from './dto/tbank-notification.dto.js'
import { OperationType } from './types/tbank-types.js'

@Injectable()
export class TbankOperationsService {
	constructor(
		protected readonly logger: AppLogger,
		protected readonly moyskladService: MoyskladService,
		protected readonly giga?: GigaChatService,
	) {}

	async handleOperation(operation: TbankNotificationDTO): Promise<void> {
		if (operation.typeOfOperation !== OperationType.Debit)
			return

		try {
			this.logger.log(`Обработка операции ${operation.operationId} типа ${operation.typeOfOperation}`)
			const ms = this.moyskladService.getClient()
			const cashouts = await ms.client.get(
				ms.client.buildUrl(['entity', 'cashout']).toString(),
				{
					searchParameters: new URLSearchParams({
						filter: `name=${operation.operationId}`,
					}),
				},
			)
			this.logger.log(JSON.stringify(cashouts))
		}
		catch (error) {
			this.logger.error(`Ошибка обработки операции из ТБанка - ${JSON.stringify(error)}`)
		}
	}
}
