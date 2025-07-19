import { Module } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'
import { OzonController } from './ozon.controller'
import { OzonService } from './ozon.service'

@Module({
	controllers: [OzonController],
	providers: [OzonService, AppLogger],
})
export class OzonModule {}
