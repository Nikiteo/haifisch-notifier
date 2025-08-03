import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppLogger } from '../../../shared/logger.service.js'
import { GigaChatModule } from '../../gigachat/gigachat.module.js'
import { MoyskladModule } from '../../moysklad/moysklad.module.js'
import { TbankOperationsService } from './tbank-operations.service.js'
import { TbankController } from './tbank.controller.js'
import { TbankService } from './tbank.service.js'

@Module({
	imports: [HttpModule, ConfigModule, MoyskladModule, GigaChatModule],
	controllers: [TbankController],
	providers: [TbankService, TbankOperationsService, AppLogger],
})
export class TbankModule {}
