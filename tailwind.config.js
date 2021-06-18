module.exports = {
  darkMode: 'media',
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

/*
By adding darkmode: 'class' to the config, you've instructed TailwindCSS to include all of the CSS utility classes for dark mode. This enables a dark variant that you can now add as classes to your React elements like className="bg-white dark:bg-gray-900" and the correct class will be provided when dark is active on your html element.
*/