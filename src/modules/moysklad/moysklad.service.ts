import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Moysklad from 'moysklad'

/**
 * Сервис для работы с API МойСклад.
 */
@Injectable()
export class MoyskladService {
	private readonly moysklad: Moysklad.Instance

	constructor(configService: ConfigService) {
		const token = configService.get<string>('MOYSKLAD_TOKEN')
		if (token == null) {
			throw new Error('MOYSKLAD_TOKEN is not defined in environment variables')
		}

		this.moysklad = Moysklad({
			auth: { token },
		})
	}

	/**
	 * Получить экземпляр Moysklad.
	 */
	getClient(): Moysklad.Instance {
		return this.moysklad
	}
}
