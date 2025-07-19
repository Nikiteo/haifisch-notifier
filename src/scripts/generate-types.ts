import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { generateApi } from 'swagger-typescript-api'

const prefix = '/** THIS FILE WAS GENERATED */\n'

const configs = [
	{
		name: 'yandex-types.ts',
		input: 'scripts/yandex.yaml',
		output: 'src/modules/marketplace/yandex/types',
	},
	{
		name: 'ozon-types.ts',
		input: 'scripts/ozon.yaml',
		output: 'src/modules/marketplace/ozon/types',
	},
	{
		name: 'tbank-types.ts',
		input: 'scripts/tbank.yaml',
		output: 'src/modules/marketplace/tbank/types',
	},
]

async function generateAll() {
	for (const config of configs) {
		const { name, input, output } = config

		const inputPath = path.resolve(__dirname, '..', input)
		const outputPath = path.resolve(__dirname, '..', output)

		try {
			const { files } = await generateApi({
				name,
				input: inputPath,
				output: outputPath,
				generateClient: false,
				extractRequestBody: false,
				extractResponseBody: false,
				extractEnums: true,
				prettier: {
					printWidth: 120,
					tabWidth: 4,
					singleQuote: true,
					semi: false,
					trailingComma: 'none',
					parser: 'typescript',
				},
			})

			files.forEach(({ fileContent }) => {
				const fullContent
					= prefix + fileContent.replace(/any/g, 'unknown')

				writeFileSync(path.resolve(outputPath, name), fullContent, 'utf-8')
				console.log(`✅ Generated: ${name}`)
			})
		}
		catch (err) {
			console.error(`❌ Failed to generate ${name}:`, err)
		}
	}
}

void generateAll()
