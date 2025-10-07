import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TelegrafModule } from 'nestjs-telegraf'
import { DbService } from '../../shared/db.service.js'
import { AppLogger } from '../../shared/logger.service.js'
import { YandexModule } from '../marketplace/yandex/yandex.module.js'
import { MoyskladModule } from '../moysklad/moysklad.module.js'
import { CheckCommissionsCommand } from '../telegram/commands/check-commissions.command.js'
import { ChannelPostHandler } from '../telegram/handlers/channel-post.handler.js'
import { StartHandler } from '../telegram/handlers/start.handler.js'
import { TelegramCommandsService } from '../telegram/telegram.commands.js'
import { TelegramService } from '../telegram/telegram.service.js'

@Module({
	imports: [
		ConfigModule,
		MoyskladModule,
		YandexModule,
		TelegrafModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (config: ConfigService) => {
				const token = config.get<string>('TELEGRAM_BOT_TOKEN')
				if (token === null || token === undefined) {
					throw new Error('TELEGRAM_BOT_TOKEN is not set')
				}
				return { token }
			},
		}),
	],
	providers: [TelegramService, AppLogger, StartHandler, ChannelPostHandler, DbService, TelegramCommandsService, CheckCommissionsCommand],
	exports: [TelegramService],
})
export class TelegramModule {}
