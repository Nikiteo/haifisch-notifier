import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { AppLogger } from './shared/logger.service.js'

async function bootstrap() {
	const appLogger = new AppLogger()
	const app = await NestFactory.create(AppModule, {
		logger: appLogger,
	})
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }))
	await app.listen(4000)

	appLogger.log(`App running on http://localhost:4000`)
}
void bootstrap()
