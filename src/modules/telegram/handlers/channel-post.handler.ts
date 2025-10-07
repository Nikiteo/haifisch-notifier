import { Ctx, On, Update } from 'nestjs-telegraf'
import { Context } from 'telegraf'

@Update()
export class ChannelPostHandler {
	@On('channel_post')
	async onChannelPost(@Ctx() ctx: Context) {
		const post = ctx.channelPost

		if (!post)
			return

		await ctx.telegram.sendMessage(
			838975962,
			`Новый пост: \`\`\`json\n${JSON.stringify(post, null, 2)}\n\`\`\``,
		)
	}
}
