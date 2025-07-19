import { Module } from '@nestjs/common'
import { OzonModule } from './ozon/ozon.module'
import { TbankModule } from './tbank/tbank.module'
import { YandexModule } from './yandex/yandex.module'

@Module({
	imports: [YandexModule, OzonModule, TbankModule],
})
export class MarketplaceModule {}
