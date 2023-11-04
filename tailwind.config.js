module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-background': '#1E375F',
				'background': '#B8CFD2',

				'background-mute': '#82adb5',
				'dark-background-mute': '#081F44',

				'dark-text': '#d8e2eb',
				'text': '#44525e',
				

				'accent': '#67404a',
				'dark-accent': '#E57C23',
				
				'text-soft': '#415560',
				'dark-text-soft': '#adbed3',

				'dark-background-hard': '#122D57',
				'background-hard': '#b6d3d7',

				'dark-accent-soft': '#E8AA42',
				'accent-soft': '#85233c',

				'dark-background-harder': '#0C254D',
				'background-harder': '#a0c0c5',

				'red': '#936666',
				'green': '#395c4d',
				'blue': '#666693',
				'yellow': '#aaaa86',

				'dark-red': '#E84242',
				'dark-yellow': '#d3a62a',

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
