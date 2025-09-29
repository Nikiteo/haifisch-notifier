import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectBot } from 'nestjs-telegraf'
import { Telegraf } from 'telegraf'

@Injectable()
export class TelegramCommandsService implements OnApplicationBootstrap {
	constructor(@InjectBot() private readonly bot: Telegraf) {}

	async onApplicationBootstrap() {
		try {
			await this.bot.telegram.setMyCommands([
				{ command: 'check_commissions', description: 'Проверить комиссии за последний месяц' },
			])
		}
		catch (e) {
			console.error('❌ Не удалось зарегистрировать команды', e)
		}
	}
}
