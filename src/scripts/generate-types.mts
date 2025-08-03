import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { generateApi } from 'swagger-typescript-api'

import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prefix = '/** THIS FILE WAS GENERATED */\n'

const configs = [
	{
		fileName: 'yandex-types.ts',
		input: 'scripts/yandex.yaml',
		output: '/Users/nzhigiley/Работа/haifisch-notifications/src/modules/marketplace/yandex/types',
	},
	{
		fileName: 'api.ts',
		input: 'scripts/api.yaml',
		output: '/Users/nzhigiley/Работа/haifisch-notifications/src/modules/marketplace/yandex/types',
	},
	{
		fileName: 'ozon-types.ts',
		input: 'scripts/ozon.yaml',
		output: '/Users/nzhigiley/Работа/haifisch-notifications/src/modules/marketplace/ozon/types',
	},
	{
		fileName: 'tbank-types.ts',
		input: 'scripts/tbank.yaml',
		output: '/Users/nzhigiley/Работа/haifisch-notifications/src/modules/marketplace/tbank/types',
	},
]

async function generateAll() {
	for (const { fileName, input, output } of configs) {
		const inputPath = path.resolve(__dirname, '..', input)
		const outputPath = path.resolve(__dirname, '..', output)

		try {
			const { files } = await generateApi({
				fileName,
				input: inputPath,
				output: outputPath,
				generateClient: false,
				extractRequestBody: false,
				extractResponseBody: false,
				extractEnums: true,
			})

			files.forEach(({ fileName: outName, fileContent }) => {
				const content = prefix + fileContent.replace(/any/g, 'unknown')
				writeFileSync(path.resolve(outputPath, outName), content, 'utf-8')
				console.log(`✅ Generated: ${outName}`)
			})
		}
		catch (err) {
			console.error(`❌ Failed to generate ${fileName}:`, err)
		}
	}
}

void generateAll()
