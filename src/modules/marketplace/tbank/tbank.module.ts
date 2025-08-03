import { Module } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { TbankOperationsService } from './tbank-operations.service.js'
import { TbankController } from './tbank.controller.js'
import { TbankService } from './tbank.service.js'

@Module({
	controllers: [TbankController],
	providers: [TbankService, TbankOperationsService, AppLogger],
})
export class TbankModule {}
