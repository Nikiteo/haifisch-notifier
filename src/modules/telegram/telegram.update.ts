import { ConfigService } from '@nestjs/config'
import dayjs from 'dayjs'
import { AttributeType, Demand, DemandOverheadDistribution, Entity, MediaType } from 'moysklad-ts'
import { Command, Ctx, Update } from 'nestjs-telegraf'
import { Context } from 'telegraf'
import { AppLogger } from '../../shared/logger.service.js'
import { commissionTypes, fbsHfProject, fbsTopProject, states } from '../marketplace/yandex/database.js'
import { GetOrdersStatsRequest, GetOrdersStatsResponse, OrdersStatsOrderDTO } from '../marketplace/yandex/types/api.js'
import { YandexApiService } from '../marketplace/yandex/yandex.api.js'
import { MoyskladService } from '../moysklad/moysklad.service.js'

/**
 * Утилита для разбивки массива на чанки
 * Позволяет запрашивать API порциями (например, по 200 заказов)
 */
function chunk<T>(arr: T[], size: number): T[][] {
	return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
		arr.slice(i * size, i * size + size))
}

/**
 * TelegramUpdate — NestJS Update, который слушает команды в Telegram
 * Команда /check_commissions проверяет и обновляет комиссии в заказах и отгрузках
 */
@Update()
export class TelegramUpdate {
	constructor(
		private readonly moyskladService: MoyskladService, // сервис для работы с МойСклад
		private readonly api: YandexApiService, // сервис для работы с Яндекс.Маркет
		private readonly logger: AppLogger, // логирование
		private readonly config: ConfigService, // конфигурация (campaignId и др.)
	) { }

	/**
	 * Обработчик команды /check_commissions
	 * Проверяет заказы за последние 2 месяца
	 * Заполняет комиссии в заказах и суммарно в отгрузках
	 */
	@Command('check_commissions')
	async checkCommissions(@Ctx() ctx: Context) {
		await ctx.reply('🔍 Проверяю комиссии за последний месяц...')
		const ms = this.moyskladService.getClient() // получаем клиент МС

		const stores = ['Haifisch', 'Top'] as const
		for (const store of stores) {
			try {
				this.logger.log(`[${store}] 🔎 Начало проверки`)

				// Получаем campaignId для конкретного магазина
				const campaignId
					= store === 'Haifisch'
						? this.config.get<string>('YANDEX_CAMPAIGN_ID_HF')
						: this.config.get<string>('YANDEX_CAMPAIGN_ID_TOP')

				// Берем заказы за последние 1 месяц
				const since = dayjs().subtract(1, 'month').format('YYYY-MM-DD')
				const { rows: recentOrders } = await ms.customerOrder.list({
					filter: {
						moment: { gt: since }, // заказы позже даты
						project: {
							eq: store === 'Haifisch' ? fbsHfProject.meta.href : fbsTopProject.meta.href,
						},
						state: { eq: states.DELIVERED.meta.href }, // только доставленные
					},
					pagination: { limit: 1000 },
				})

				this.logger.log(`[${store}] Всего заказов найдено: ${recentOrders.length}`)

				// Идентификаторы атрибутов комиссий
				const requiredAttrs = commissionTypes.map(c => c.id)

				// Фильтруем заказы, у которых хотя бы один атрибут комиссии не заполнен
				const ordersWithEmptyAttrs = recentOrders.filter(order =>
					requiredAttrs.some(attrId =>
						!order.attributes?.some(a => a.id === attrId && a.value !== null && a.value !== ''),
					),
				)

				const ordersToFetch = ordersWithEmptyAttrs.map(o => Number(o.name))

				if (ordersToFetch.length === 0) {
					await ctx.reply(`[${store}]: ✅ Нет заказов с пустыми атрибутами`)
					continue
				}

				// Запрашиваем статистику по заказам в ЯМ API порциями по 200
				const ordersStats: OrdersStatsOrderDTO[] = []
				for (const batch of chunk(ordersToFetch, 200)) {
					this.logger.log(`[${store}] Запрос статистики по ${batch.length} заказам`)
					const result = await this.api.post<GetOrdersStatsResponse, GetOrdersStatsRequest>(
						`campaigns/${campaignId}/stats/orders?limit=200`,
						store,
						{ orders: batch },
					)
					ordersStats.push(...(result.result?.orders ?? []))
				}

				// Формируем массив заказов с атрибутами комиссий для апдейта
				const msOrdersWithCommissions = ordersWithEmptyAttrs
					.map((orderInMs) => {
						const stats = ordersStats.find(o => o.id === Number(orderInMs.name))
						// eslint-disable-next-line ts/strict-boolean-expressions
						if (!stats?.commissions?.length)
							return null

						const commissionAttrs = stats.commissions
							.map((c) => {
								const ref = commissionTypes.find(ct => ct.type === c.type)
								if (!ref)
									return null

								// Проверка: уже заполнено в МС
								const alreadySet = orderInMs.attributes?.some(
									a => a.id === ref.id && a.value != null && a.value !== '',
								)
								if (alreadySet)
									return null

								// Формируем атрибут для апдейта
								return {
									meta: {
										href: `https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/${ref.id}`,
										type: Entity.AttributeMetadata,
										mediaType: MediaType.Json,
									},
									id: ref.id,
									type: AttributeType.Double,
									value: c.actual ?? 0,
								}
							})
							.filter((c): c is NonNullable<typeof c> => c !== null)

						if (!commissionAttrs.length)
							return null

						return {
							meta: orderInMs.meta,
							attributes: [...(orderInMs.attributes ?? []), ...commissionAttrs],
						}
					})
					.filter((o): o is NonNullable<typeof o> => o !== null)

				// Обновляем заказы в МС пачкой
				if (msOrdersWithCommissions.length > 0) {
					// eslint-disable-next-line ts/ban-ts-comment
					// @ts-expect-error
					await ms.customerOrder.upsert(msOrdersWithCommissions)
					this.logger.log(`[${store}] Обновлено ${msOrdersWithCommissions.length} заказов`)
					await ctx.reply(`[${store}]: 🔄 Обновлено ${msOrdersWithCommissions.length} заказов`)
				}
				else {
					this.logger.log(`[${store}] Не найдено заказов к обновлению`)
				}

				// Работа с отгрузками: получаем все отгрузки по заказам
				const orderIds = recentOrders.map(o => o.name)
				const { rows: demands } = await ms.demand.list({
					filter: { name: orderIds },
					pagination: { limit: 1000 },
				})
				this.logger.log(`[${store}] Найдено отгрузок: ${demands.length}`)

				// Формируем массив отгрузок, которые нужно обновить
				const shipmentsToUpdate: Pick<Demand, 'meta' | 'overhead'>[] = []
				for (const order of recentOrders) {
					// Считаем сумму только нужных комиссий
					const commissionSum = (order.attributes ?? [])
						.filter(a => requiredAttrs.includes(a.id))
						.reduce((acc, a) => acc + (Number(a.value) || 0), 0)

					if (!commissionSum)
						continue

					// Находим отгрузки, связанные с заказом
					const linkedDemands = demands.filter(d => d.customerOrder?.meta?.href === order.meta.href)
					if (!linkedDemands.length)
						continue

					for (const demand of linkedDemands) {
						// Обновляем только если сумма отличается или не заполнена
						const currentSum = demand.overhead?.sum ?? 0
						if (currentSum !== Math.round(commissionSum * 100)) {
							shipmentsToUpdate.push({
								meta: demand.meta,
								overhead: {
									sum: Math.round(commissionSum * 100),
									distribution: DemandOverheadDistribution.Price,
								},
							})
						}
					}
				}

				// Апдейтим отгрузки пачкой
				if (shipmentsToUpdate.length > 0) {
					this.logger.log(JSON.stringify(shipmentsToUpdate))
					const shipmentChunks = chunk(shipmentsToUpdate, 50) // разбиваем на чанки по 50
					for (const [i, chunkedShipments] of shipmentChunks.entries()) {
						this.logger.log(`[${store}] Обновляю пачку ${i + 1}/${shipmentChunks.length} отгрузок`)
						await ms.demand.upsert(chunkedShipments)
						await ctx.reply(`[${store}]: 📦 Обновлено ${chunkedShipments.length} отгрузок в пачке ${i + 1}`)
					}
				}
				else {
					this.logger.log(`[${store}] Не найдено отгрузок к обновлению`)
				}
			}
			catch (err) {
				this.logger.error(`[${store}] ❌ Ошибка: ${err instanceof Error ? err.message : String(err)}`, err as string)
				await ctx.reply(`[${store}]: ⚠️ Ошибка при проверке комиссий — смотри логи`)
			}
		}

		await ctx.reply('✅ Проверка завершена')
	}
}
