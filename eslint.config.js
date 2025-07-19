import antfu from '@antfu/eslint-config'

export default antfu({
	type: 'src',
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	typescript: { tsconfigPath: 'tsconfig.json' },
	rules: {
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
	},
})
