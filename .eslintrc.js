module.exports = {
	root: true,
	extends: '@react-native',
	rules: {
		'react-native/no-inline-styles': 0,
		'react/no-unstable-nested-components': [
			'warn',
			{
				allowAsProps: true,
				customValidators: [] /* optional array of validators used for propTypes validation */,
			},
		],
	},
};
