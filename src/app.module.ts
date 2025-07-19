import { MarketplaceModule } from '@modules/marketplace/marketplace.module'
import { MoyskladModule } from '@modules/moysklad/moysklad.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppLogger } from '@shared/logger.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		MarketplaceModule,
		MoyskladModule,
	],
	providers: [AppLogger],
})
export class AppModule {}
