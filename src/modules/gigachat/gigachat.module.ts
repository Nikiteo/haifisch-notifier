import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GigaChatService } from './gigachat.service.js'

@Module({
	imports: [ConfigModule],
	providers: [GigaChatService],
	exports: [GigaChatService],
})
export class GigaChatModule {}
