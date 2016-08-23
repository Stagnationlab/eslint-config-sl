module.exports = {
	parser: 'babel-eslint',
	rules: {
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'space-before-function-paren': [2, 'never'],
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'quote-props': [2, 'consistent-as-needed'],
		'max-len': [2, 120, 4],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-no-bind': 0,
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
		'eol-last': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'jsx-a11y/label-has-for': 0,

		// disable deprecated
		'react/require-extension': 0,
		'no-mixed-operators': [2, { 'allowSamePrecedence': true }]
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
