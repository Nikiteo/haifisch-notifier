import type { AxiosResponse } from 'axios'

import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class YandexApiService {
	private readonly baseUrl: string

	constructor(
		private readonly http: HttpService,
		private readonly config: ConfigService,
	) {
		const url = this.config.get<string>('YANDEX_URL')
		if (url == null) {
			throw new Error('YANDEX_URL is not defined in environment variables')
		}
		this.baseUrl = url
	}

	private getToken(store: 'Haifisch' | 'Top'): string {
		const varName = store === 'Haifisch' ? 'HF_TOKEN' : 'TOP_TOKEN'
		const token = this.config.get<string>(varName)
		if (token == null) {
			throw new Error(`${varName} is not defined in environment variables`)
		}
		return token
	}

	/**
	 * Выполняет GET-запрос к Яндекс.Маркет API и возвращает тело ответа.
	 */
	async get<T>(endpoint: string, store: 'Haifisch' | 'Top'): Promise<T> {
		const url = `${this.baseUrl}/${endpoint}`
		const token = this.getToken(store)

		const response: AxiosResponse<T> = await firstValueFrom(
			this.http.get<T>(url, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Api-Key': token,
				},
			}),
		)

		return response.data
	}
}
