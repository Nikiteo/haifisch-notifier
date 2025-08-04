import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppLogger } from '../../shared/logger.service.js'
import { BotClientService } from './telegram.service.js'

@Module({
	imports: [HttpModule, ConfigModule],
	providers: [BotClientService, AppLogger],
	exports: [BotClientService],
})
export class BotClientModule {}
