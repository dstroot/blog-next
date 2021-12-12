const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  safelist: ['aspect-w-16', 'aspect-h-9'],
  darkMode: 'class', // true, false, 'media' or 'class'
  /*
  The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints, etc. — anything related to the visual design of your site.
  */
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      blue: colors.blue,
    },
    extend: {
      colors: {
        'dark-1': '#1a1a1a', // main background color
        'dark-2': '#222222',
        'dark-3': '#282828',
        'dark-4': '#252628', // 2A2B2D  1D1E20  252628
        'mac-cls': '#FF605C',
        'mac-min': '#FFBD44',
        'mac-max': '#00CA4E',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      outline: {
        transparent: '2px #983799',
      },
      typography(theme) {
        return {
          /*   The light side (default)   */
          DEFAULT: {
            css: [
              {
                'ul > li::before': {
                  backgroundColor: theme('colors.gray.700'),
                },
                'ol > li::before': { color: theme('colors.gray.700') },

                blockquote: {
                  borderLeftWidth: '0.5rem',
                  borderLeftColor: theme('colors.gray.300'),
                },
                'blockquote p:first-of-type::before': false,
                'blockquote p:last-of-type::after': false,

                a: {
                  color: theme(`colors.blue.500`),
                  textDecoration: `none`,
                  '&:hover': {
                    textDecoration: `underline`,
                  },
                },

                'code::before': false,
                'code::after': false,
              },
            ],
          },
          /*      Size     */
          lg: {
            css: [
              {
                li: {
                  marginTop: '0',
                  marginBottom: '0',
                },
                cite: {
                  fontSize: '1.0rem',
                },
              },
            ],
          },
          /*   The dark side   */
          dark: {
            css: [
              {
                color: theme('colors.gray.300'),
                '[class~="lead"]': {
                  color: theme('colors.gray.300'),
                },
                a: {
                  color: theme('colors.blue.300'),
                },
                strong: {
                  color: theme('colors.white'),
                },
                'ol > li::before': {
                  color: theme('colors.gray.400'),
                },
                'ul > li::before': {
                  backgroundColor: theme('colors.gray.400'),
                },
                hr: {
                  borderColor: theme('colors.gray.200'),
                },
                blockquote: {
                  color: theme('colors.gray.200'),
                  borderLeftColor: theme('colors.gray.400'),
                },
                h1: {
                  color: theme('colors.white'),
                },
                h2: {
                  color: theme('colors.white'),
                },
                h3: {
                  color: theme('colors.white'),
                },
                h4: {
                  color: theme('colors.white'),
                },
                'figure figcaption': {
                  color: theme('colors.gray.400'),
                },
                code: {
                  color: theme('colors.white'),
                },
                'a code': {
                  color: theme('colors.white'),
                },
                pre: {
                  color: theme('colors.gray.200'),
                  backgroundColor: theme('colors.gray.800'),
                },
                'thead th': {
                  color: theme('colors.white'),
                  borderBottomColor: theme('colors.gray.400'),
                },
                'tbody tr': {
                  borderBottomColor: theme('colors.gray.600'),
                },
              },
            ],
          },
        };
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
