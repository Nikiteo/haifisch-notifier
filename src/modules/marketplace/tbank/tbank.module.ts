import { Module } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { TbankOperationsService } from './tbank-operations.service'
import { TbankController } from './tbank.controller'
import { TbankService } from './tbank.service'

@Module({
	controllers: [TbankController],
	providers: [TbankService, TbankOperationsService, AppLogger],
})
export class TbankModule {}
