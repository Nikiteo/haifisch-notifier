import { Module } from '@nestjs/common'
import { OzonModule } from './ozon/ozon.module.js'
import { TbankModule } from './tbank/tbank.module.js'
import { YandexModule } from './yandex/yandex.module.js'

@Module({
	imports: [YandexModule, OzonModule, TbankModule],
})
export class MarketplaceModule {}
