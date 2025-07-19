import fs from 'node:fs'
import path from 'node:path'

import process from 'node:process'

import {
	Injectable,
	LoggerService,
} from '@nestjs/common'
import winston from 'winston'

const logsDir = path.resolve(__dirname, '..', 'logs')

if (!fs.existsSync(logsDir)) {
	fs.mkdirSync(logsDir, { recursive: true })
}

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
}

const NODE_ENV = process.env.NODE_ENV

function level(): string {
	const env = (NODE_ENV != null) || 'development'
	const isDevelopment = env === 'development'
	return isDevelopment ? 'debug' : 'warn'
}

const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'green',
	http: 'magenta',
	debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
	winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
	winston.format.colorize({ all: true }),
	winston.format.printf(
		info => `${info.timestamp as string} ${info.level}: ${info.message as string}`,
	),
)

const transports = [
	new winston.transports.Console(),
	new winston.transports.File({
		filename: path.resolve('logs/error.log'),
		level: 'error',
	}),
	new winston.transports.File({
		filename: path.resolve('logs/all.log'),
		level: 'info',
	}),
]

@Injectable()
export class AppLogger implements LoggerService {
	private logger: winston.Logger

	constructor() {
		this.logger = winston.createLogger({
			level: level(),
			levels,
			format,
			transports,
			exitOnError: false,
		})
	}

	log(message: string) {
		this.logger.info(message)
	}

	error(message: string, trace?: string) {
		this.logger.error(`${message} ${(trace != null) || ''}`)
	}

	warn(message: string) {
		this.logger.warn(message)
	}

	debug?(message: string) {
		this.logger.debug(message)
	}

	verbose?(message: string) {
		this.logger.http(message)
	}
}
