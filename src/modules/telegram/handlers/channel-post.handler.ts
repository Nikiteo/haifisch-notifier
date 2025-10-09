import { Ctx, On, Update } from 'nestjs-telegraf'
import { Context } from 'telegraf'
import { Message, Update as UpdateTg } from 'telegraf/types'
import { DbService } from '../../../shared/db.service.js'
import { AppLogger } from '../../../shared/logger.service.js'

@Update()
export class ChannelPostHandler {
	constructor(private readonly db: DbService, private readonly logger: AppLogger) {}

	@On('channel_post')
	async onChannelPost(@Ctx() ctx: Context) {
		const post = ctx.channelPost
		if (!post || typeof post !== 'object')
			return

		await this.db.addPost({ ...post })
	}

	// @On('message')
	// async onForwarded(@Ctx() ctx: Context) {
	// 	const msg = ctx.message as unknown as UpdateTg.New & (UpdateTg.Channel & Message)
	// 	if (msg === null || msg === undefined)
	// 		return

	// 	await this.db.addPost({ ...msg })
	// }
}
