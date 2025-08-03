import { Module } from '@nestjs/common'
import { AppLogger } from '../../../shared/logger.service.js'
import { OzonController } from './ozon.controller.js'
import { OzonService } from './ozon.service.js'

@Module({
	controllers: [OzonController],
	providers: [OzonService, AppLogger],
})
export class OzonModule {}
