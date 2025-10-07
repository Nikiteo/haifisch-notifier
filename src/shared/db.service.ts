import { join } from 'node:path'
import process from 'node:process'

import { Injectable } from '@nestjs/common'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { Message, Update } from 'telegraf/types'

export type Post = Update.New & (Update.Channel & Message)

interface DatabaseSchema {
	posts: Post[]
}

@Injectable()
export class DbService {
	private db: Low<DatabaseSchema>

	constructor() {
		const file = join(process.cwd(), 'data', 'db.json')
		const adapter = new JSONFile<DatabaseSchema>(file)
		this.db = new Low(adapter, { posts: [] })
		void this.init()
	}

	private async init() {
		await this.db.read()
		this.db.data ||= { posts: [] }
		await this.db.write()
	}

	async addPost(post: Post) {
		await this.init()
		const exists = this.db.data.posts.some(p => p.message_id === post.message_id)
		if (!exists) {
			this.db.data.posts.push(post)
			await this.db.write()
		}
	}

	async getAllPosts(): Promise<Post[]> {
		await this.init()
		return this.db.data.posts
	}
}
