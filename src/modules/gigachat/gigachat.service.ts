import { Agent } from 'node:https'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import GigaChat from 'gigachat'

@Injectable()
export class GigaChatService {
	private readonly client: GigaChat

	constructor(private readonly config: ConfigService) {
		const token = this.config.get<string>('GIGACHAT_TOKEN')

		if (token === null || token === undefined) {
			throw new Error('GIGACHAT_TOKEN is not defined in env')
		}

		this.client = new GigaChat({
			credentials: token,
			scope: 'GIGACHAT_API_PERS',
			httpsAgent: new Agent({ rejectUnauthorized: false }),
		})
	}

	async getClient(): Promise<GigaChat> {
		return this.client
	}
}
