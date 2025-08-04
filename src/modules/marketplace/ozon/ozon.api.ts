import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class OzonApiService {
	private readonly baseUrl: string
	private readonly token: string
	private readonly clientId: string

	constructor(
		private readonly http: HttpService,
		private readonly config: ConfigService,
	) {
		const url = this.config.get<string>('OZON_URL')
		if (url == null) {
			throw new Error('OZON_URL is not defined in environment variables')
		}
		this.baseUrl = url

		const token = this.config.get<string>('OZON_TOKEN')
		if (token == null) {
			throw new Error('OZON_TOKEN is not defined in environment variables')
		}
		this.token = token

		const clientId = this.config.get<string>('OZON_CLIENT_ID')
		if (clientId == null) {
			throw new Error('OZON_CLIENT_ID is not defined in environment variables')
		}
		this.clientId = clientId
	}

	/** Выполняет GET-запрос и возвращает тело ответа. */
	async get<T>(endpoint: string): Promise<T> {
		const url = `${this.baseUrl}/${endpoint}`

		const response = await firstValueFrom(
			this.http.get<T>(url, {
				headers: {
					'Accept': 'application/json',
					'Api-Key': this.token,
					'Client-Id': this.clientId,
					'Content-Type': 'application/json',
				},
			}),
		)

		return response.data
	}

	/** Выполняет POST-запрос и возвращает тело ответа. */
	async post<ResponseType, RequestType>(
		endpoint: string,
		data: RequestType,
	): Promise<ResponseType> {
		const url = `${this.baseUrl}/${endpoint}`

		const response = await firstValueFrom(
			this.http.post<ResponseType>(url, data, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Api-Key': this.token,
					'Client-Id': this.clientId,
				},
			}),
		)

		return response.data
	}
}
