import type { Moysklad } from 'moysklad-ts'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { createMoysklad } from 'moysklad-ts'
/**
 * Сервис для работы с API МойСклад.
 */
@Injectable()
export class MoyskladService {
	private readonly moysklad: Moysklad

	constructor(configService: ConfigService) {
		const token = configService.get<string>('MOYSKLAD_TOKEN')
		if (token == null) {
			throw new Error('MOYSKLAD_TOKEN is not defined in environment variables')
		}

		this.moysklad = createMoysklad({
			auth: { token },
		})
	}

	/**
	 * Получить экземпляр Moysklad.
	 */
	getClient(): Moysklad {
		return this.moysklad
	}
}
