import { Ctx, Start, Update } from 'nestjs-telegraf'
import { Context } from 'telegraf'

@Update()
export class StartHandler {
	@Start()
	async onStart(@Ctx() ctx: Context) {
		await ctx.reply('👋 Привет! Я бот-помощник Haifisch')
	}
}
