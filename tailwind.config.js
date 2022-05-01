const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  /*
    The theme section is where you define your color palette, fonts, type scale, border 
    sizes, breakpoints, etc. — anything related to the visual design of your site.
  */
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      blue: colors.blue,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        'dark-1': '#1a1a1a', // main background color
        'dark-2': '#222222',
        'dark-3': '#282828',
        'dark-4': '#252628', // 2A2B2D  1D1E20  252628
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
          DEFAULT: {
            css: [
              {
                'blockquote p:first-of-type::before': false,
                'blockquote p:last-of-type::after': false,
                'code::before': false,
                'code::after': false,
              },
            ],
          },
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
        };
      },
    },
  },
  /*
    The plugins section defines any additional tailwind plugins. We are using typography for 
    markdown/.mdx and line-clamp. 
  */
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
