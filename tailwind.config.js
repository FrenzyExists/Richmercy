import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
// const plugin = require('tailwindcss/plugin');
// const defaultTheme = require('tailwindcss/defaultTheme')

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
          // '--prism-background': '#0c0a29',
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
          '--tw-prose-th-borders': theme('colors.pink[300]'),
          '--tw-prose-td-borders': theme('colors.pink[200]'),
          '--tw-prose-body': theme('colors.dark-text'),
          '--tw-prose-headings': theme('colors.dark-acc'),
          '--tw-prose-lead': theme('colors.dark-text-soft'),
          '--tw-prose-links': theme('colors.white'),
          '--tw-prose-bold': theme('colors.white'),
          '--tw-prose-counters': theme('colors.dark-acc-soft'),
          '--tw-prose-bullets': theme('colors.dark-acc'),
          '--tw-prose-hr': theme('colors.acc-soft'),
          '--tw-prose-quotes': theme('colors.dark-acc-soft'),
          '--tw-prose-quote-borders': theme('colors.dark-acc'),
          '--tw-prose-captions': theme('colors.pink[400]'),
          '--tw-prose-code': theme('colors.white'),
          // '--tw-prose-pre-code': theme('colors.pink[300]'),
          // '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
          '--tw-prose-th-borders': theme('colors.dark-acc'),
          '--tw-prose-td-borders': theme('colors.dark-acc-soft'),
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
      'montserrat-alternate': ['Montserrat Alternate'],
      'montserrat-alternate': "'Montserrat Alternates', sans-serif"
    },
    colors: {
      'dark-bg': '#1E375F',
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
      'dark-red-soft': '#cd9c9c',
      'dark-blue': '#4270E8',
      'dark-blue-soft': '#9c9fcd',
      'dark-green': '#65cfa2',
      'dark-yellow': '#FFD275',
      'dark-border': '#253765',
      'dark-blog': '#567cb40f',
    }
  },
  screens: {
    'xs': '320px',
    'mld': '640px',
    ...defaultTheme.screens
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(10px)' },
      '50%': { transform: 'translateY(-10px)' }
    }
  },
  animation: {
    'based-spin': 'spin 1.7s cubic-bezier(1, -0.54, 0, 1.67) infinite',
    'float': 'float 3.35s ease-in-out infinite;'
  },
  
};
// #2a3e64 -> --tw-prose-th-borders
// #22365d --tw-prose-td-borders
// #0c0a29 -> prism-background
// #4da883 -> prism-boolean
// -> prism-string#ffb089
// rgb(4 35 72 / 53%) inner background
// --prism-foreground -acc
export const plugins = [
  require('@tailwindcss/typography'),
  plugin(({ addBase, theme }) => {
    addBase({
      '.scrollbar': {
        overflowY: 'auto',
      },
      '::-webkit-scrollbar': {
        width: '.55rem',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme('colors.dark-acc'),
      },
      '::-webkit-scrollbar-track-piece': {
        backgroundColor: theme('colors.dark-bg-mute'),
      },
      '.tag-btn': {
        transition: 'transform 0.2s, background-color 0.25s;',
        color: theme('colors.dark-green'),
        background: theme('colors.dark-bg-mute')
      },
      '.tag-btn:hover': {
        transform: 'scale(1.2)',
        background: `linear-gradient(to right, ${theme('colors.dark-green')}, ${theme('colors.dark-green')})`,
        backgroundClip: 'text',
        '-webkit-text-fill-color': 'transparent'
      },
      '.shadow-strong': {
        '-moz-box-shadow': '0px 5px 5px 0px rgba(0, 0, 0, 0.3)',
        'box-shadow': '1px 5px 5px 0px rgba(0, 0, 0, 0.3)',
        '-webkit-box-shadow': '1px 5px 5px 0px rgba(0, 0, 0, 0.3)'
      },
      '.main-app:has(.article)': {
        background: theme('colors.dark-blog'),
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
        'background-image': `linear-gradient(to right, ${theme('colors.dark-green')}, ${theme('colors.dark-blue')})`,
        '-webkit-mask-size': '54px 54px',
        '-webkit-mask-image':
        'linear-gradient(rgba(255, 255, 255, 0.136) 1px, transparent 0), linear-gradient(90deg, rgba(255, 255, 255, 0.115) 1px, transparent 0)',
      }
    })
  })
];

