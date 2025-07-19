import { Injectable } from '@nestjs/common'
import { AppLogger } from '@shared/logger.service'

@Injectable()
export class OzonService {
	constructor(private readonly logger: AppLogger) {
	}
}
