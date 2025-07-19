import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MoyskladService } from './moysklad.service'

/**
 * Модуль для работы с API МойСклад.
 */
@Module({
	imports: [ConfigModule],
	providers: [MoyskladService],
	exports: [MoyskladService],
})
export class MoyskladModule {}
