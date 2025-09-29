import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GigaChatModule } from './modules/gigachat/gigachat.module.js'
import { MarketplaceModule } from './modules/marketplace/marketplace.module.js'
import { MoyskladModule } from './modules/moysklad/moysklad.module.js'
import { TelegramModule } from './modules/telegram/telegram.module.js'
import { AppLogger } from './shared/logger.service.js'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		MarketplaceModule,
		MoyskladModule,
		GigaChatModule,
		TelegramModule,
	],
	providers: [AppLogger],
})
export class AppModule {}
