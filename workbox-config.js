module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,ico,png,html,js,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};