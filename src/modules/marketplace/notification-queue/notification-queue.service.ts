import { Injectable } from '@nestjs/common'

type Task = () => Promise<void>

@Injectable()
export class NotificationQueueService {
	private queue: Task[] = []
	private isProcessing = false
	private delayMs = 0

	setDelay(ms: number) {
		this.delayMs = ms
	}

	async add(task: Task): Promise<void> {
		this.queue.push(task)
		await this.processQueue()
	}

	private async processQueue() {
		if (this.isProcessing)
			return

		this.isProcessing = true

		while (this.queue.length > 0) {
			const task = this.queue.shift()
			try {
				if (task) {
					await task()
				}
			}
			catch (e) {
				console.error('[QUEUE ERROR]', e)
			}

			if (this.delayMs > 0) {
				await this.sleep(this.delayMs)
			}
		}

		this.isProcessing = false
	}

	private async sleep(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
}
