import type { GoodsFeedbackDescriptionDTO } from '../types/api.js'

/**
 * Формирует полный текст отзыва из его компонентов
 */
export function composeFeedbackText(
	description: GoodsFeedbackDescriptionDTO,
): string {
	const parts: string[] = []

	if (description.advantages !== undefined) {
		parts.push(`Достоинства: ${description.advantages}`)
	}
	if (description.disadvantages !== undefined) {
		parts.push(`Недостатки: ${description.disadvantages}`)
	}
	if (description.comment !== undefined) {
		parts.push(`Комментарий: ${description.comment}`)
	}

	return parts.join('\n\n') || 'Без текстового описания'
}
