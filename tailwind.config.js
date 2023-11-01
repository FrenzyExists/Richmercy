module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-background': '#1E375F',
				'background': '#B8CFD2',

				'dark-text': '#d8e2eb',
				'text': '#415560',

				'accent': '#67404a',
				'dark-accent': '#E57C23'
			}
		},
		animation: {
			'based-spin': 'spin 1.7s cubic-bezier(1, -0.54, 0, 1.67) infinite',
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
