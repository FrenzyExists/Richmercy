const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    typography: ({ theme }) => ({
      'toy-story': {
        css: {
          '--tw-prose-body': theme('colors.text'),
          '--tw-prose-headings': theme('colors.acc'),
          '--tw-prose-lead': theme('colors.acc-soft'),
          '--tw-prose-links': theme('colors.links'),
          '--tw-prose-bold': theme('colors.acc'),
          '--tw-prose-counters': theme('colors.pink[600]'),
          '--tw-prose-bullets': theme('colors.acc'),
          '--tw-prose-hr': theme('colors.pink[300]'),
          '--tw-prose-quotes': theme('colors.acc-soft'),
          '--tw-prose-quote-borders': theme('colors.acc'),
          '--tw-prose-captions': theme('colors.acc-soft'),
          '--tw-prose-code': theme('colors.acc'),
          '--tw-prose-pre-code': theme('colors.pink[100]'),
          '--tw-prose-pre-bg': theme('colors.acc'),
          '--tw-prose-th-borders': theme('colors.pink[300]'),
          '--tw-prose-td-borders': theme('colors.pink[200]'),
          '--tw-prose-invert-body': theme('colors.dark-text'),
          '--tw-prose-invert-headings': theme('colors.dark-acc'),
          '--tw-prose-invert-lead': theme('colors.pink[300]'),
          '--tw-prose-invert-links': theme('colors.white'),
          '--tw-prose-invert-bold': theme('colors.white'),
          '--tw-prose-invert-counters': theme('colors.pink[400]'),
          '--tw-prose-invert-bullets': theme('colors.dark-acc'),
          '--tw-prose-invert-hr': theme('colors.acc-soft'),
          '--tw-prose-invert-quotes': theme('colors.dark-acc-soft'),
          '--tw-prose-invert-quote-borders': theme('colors.dark-acc'),
          '--tw-prose-invert-captions': theme('colors.pink[400]'),
          '--tw-prose-invert-code': theme('colors.white'),
          '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
          '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
          '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
          '--tw-prose-invert-td-borders': theme('colors.acc-soft'),
          h2: {
            fontSize: '2.25rem',
          },
          h3: {
            fontSize: '1.75rem '
          }
        },
      },
    }),
    fontFamily: {
      // 'montserrat-alternate': ['Montserrat Alternate']
      'montserrat-alternate': "'Montserrat Alternates', sans-serif"
    },
    colors: {
      'dark-bg': '#1E375F',
      // 
      'dark-bg-super-hard': '#325285',
      'dark-bg-soft': '#0e264c',
      'dark-bg-mute': '#081F44',
      'dark-bg-hard': '#122D57',
      'dark-bg-softer': '#7A7E803D',
      'dark-bg-harder': '#0C254D',
      'dark-bg-super-soft': '#11224D',
      'dark-bg-super-soft-trans': '#00081cab',
      'dark-bg-super-hard-trans': '#5b77a4ab',
      'dark-acc': '#E57C23',
      'dark-acc-soft': '#E8AA42',
      'dark-text': '#d8e2eb',
      'dark-text-soft': '#adbed3',
      'dark-red': '#E84242',
      'dark-blue': '#4270E8',
      'dark-green': '#65cfa2',
      'dark-yellow': '#d3a62a',
      'dark-border': '#253765',

      'bg': '#b8cfd2',
      'bg-hard': '#b6d3d7',
      'bg-super-hard': '#649096',
      'bg-soft': '#bdd8dc',
      'bg-mute': '#8fb1b7',
      'bg-super-soft-trans': '#5b8a90ab',
      'bg-super-hard-trans': '#649096ab',
      'bg-harder': '#a0c0c5',
      'text': '#415560',
      'links': '#525166',
      'acc': '#67404a',
      'acc-soft': '#85233c',
      'red': '#936666',
      'green': '#395c4d',
      'blue': '#666693',
      'yellow': '#aaaa86',
    }
  },
  screens: {
    'xs': '320px',
    'mld': '640px',
    ...defaultTheme.screens
  },
  animation: {
    'based-spin': 'spin 1.7s cubic-bezier(1, -0.54, 0, 1.67) infinite'
  
  }
};
export const plugins = [
  require('@tailwindcss/typography'),
  plugin(({ addBase, theme }) => {
    addBase({
      '.scrollbar': {
        overflowY: 'auto',
        scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
        scrollbarWidth: 'thin',
      },
      '::-webkit-scrollbar': {
        width: '.55rem',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme('colors.pink[800]'),
      },
      '::-webkit-scrollbar-track-piece': {
        backgroundColor: theme('colors.yellow'),
      },
      '.dark .tag-btn': {
        color: theme('colors.dark-green'),
        background: theme('colors.dark-bg-mute')
      },
      '.tag-btn': {
        transition: 'transform 0.2s, background-color 0.25s;',
        color: theme('colors.green'),
        background: theme('colors.bg-mute')
      },
      '.dark .tag-btn:hover': {
        background: `linear-gradient(to right, ${theme('colors.dark-green')}, ${theme('colors.dark-green')})`,
        backgroundClip: 'text',
      },
      '.tag-btn:hover': {
        transform: 'scale(1.2)',
        background: `linear-gradient(to right, ${theme('colors.green')}, ${theme('colors.green')})`,
        backgroundClip: 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      '.shadow-strong': {
        '-moz-box-shadow': '0px 5px 5px 0px rgba(0, 0, 0, 0.3)',
        'box-shadow': '1px 5px 5px 0px rgba(0, 0, 0, 0.3)',
        '-webkit-box-shadow': '1px 5px 5px 0px rgba(0, 0, 0, 0.3)'
      },
      '.dark .main-app:has(.article)': {
        background: theme('colors.dark-bg-soft'),
      },
      '.main-app:has(.article)': {
        background: theme('colors.bg-soft'),
        zIndex: '10',
        position: 'relative',
        height: '100%',
      },
      '.main-app:has(.article)::before': {
        content: "",
        zIndex: '-10',
        position: 'absolute',
        top: '0',
        left: '-3%',
        width: '103%',
        height: '100%',
        'background-image': `linear-gradient(to right, ${theme('colors.green')}, ${theme('colors.blue')})`,
        'mask-size': '75px 75px',
        'mask-image':
        'linear-gradient(rgba(255, 255, 255, 0.236) 2px, transparent 0), linear-gradient(90deg, rgba(255, 255, 255, 0.315) 2px, transparent 0)',
      },
      '.dark .main-app:has(.article)::before': {
        'background-image': `linear-gradient(to right, ${theme('colors.dark-green')}, ${theme('colors.dark-blue')})`,
      }
    })
  })
];

