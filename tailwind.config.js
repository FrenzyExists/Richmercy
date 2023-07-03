/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
              '--tw-prose-body': 'var(--color-text)',
            h2: {
              color: 'var(--color-accent-soft)',
              fontSize: '2.25rem',
            },
            h3: {
              color: 'var(--color-accent)',
              fontSize: '1.75rem '
            }
          }
        },
        sm: {
          css: {
            padding: '20rem'
          }
        }
      },


      fontFamily: {
        whyte: ['Whyte']
      },
      colors: {
        'color-bg': 'var(--color-background)',
        'color-acc': 'var(--color-accent)',
        'color-acc-soft': 'var(--color-accent-soft)',
        'color-text': 'var(--color-text)',
        'color-text-acc': 'var(--color-text-accent)',
        'color-bg-soft': 'var(--color-background-soft)',
        'color-bg-mute': 'var(--color-background-mute)',
        'color-shadow': 'var(--color-shadow)',

      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

