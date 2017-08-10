module.exports = {
	parser: 'babel-eslint',
	rules: {
		'arrow-parens': 0,
		'class-methods-use-this': 0,
		'eol-last': 0,
		'import/no-extraneous-dependencies': [2, { devDependencies: true }],
		'import/prefer-default-export': 0,
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/no-noninteractive-tabindex': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'linebreak-style': 0,
		'max-len': [2, 120, 4],
		'no-mixed-operators': 2,
		'no-plusplus': 0,
		'no-restricted-syntax': [
			2,
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never ' +
					'what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and ' +
					'understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and ' +
					'optimize.',
			},
		],
		'no-tabs': 0,
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'react/forbid-prop-types': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-no-undef': [2, { allowGlobals: true }],
		'react/no-danger': 0,
		'react/require-default-props': 0,
		'react/sort-comp': [2, {
			order: [
				'static-methods',
				'lifecycle',
				'render',
				'/^render.+$/',
				'/^handle.+$/',
				'everything-else',
			],
		}],
		'quote-props': [2, 'consistent-as-needed'],
		'space-before-function-paren': [2, 'never'],
	},
	globals: {
		// jsx control statement globals
		If: true,
		Choose: true,
		When: true,
		Otherwise: true,
	},
	extends: 'airbnb',
};
