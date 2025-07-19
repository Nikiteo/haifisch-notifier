import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppLogger } from './shared/logger.service'

async function bootstrap() {
	const appLogger = new AppLogger()
	const app = await NestFactory.create(AppModule, {
		logger: appLogger,
	})
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }))
	await app.listen(3001)

	appLogger.log(`App running on http://localhost:3001`)
}
void bootstrap()
