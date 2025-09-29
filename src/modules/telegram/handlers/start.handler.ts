import { Command, Ctx, Start, Update } from 'nestjs-telegraf'
import { Context } from 'telegraf'

@Update()
export class StartHandler {
	@Start()
	async onStart(@Ctx() ctx: Context) {
		await ctx.reply('👋 Привет! Я бот внутри твоего NestJS-приложения.')
	}

	@Command('ping')
	async onPing(@Ctx() ctx: Context) {
		await ctx.reply('🏓 pong!')
	}
}
