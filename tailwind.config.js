module.exports = {
  mode: "jit",
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class", // true, false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "dark-1": "#1a1a1a", // #1a1a1a 121212
        "dark-2": "#222222",
        "dark-3": "#282828",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/*
By adding darkmode: 'class' to the config, you've instructed TailwindCSS to include all of the CSS utility classes for dark mode. This enables a dark variant that you can now add as classes to your React elements like className="bg-white dark:bg-gray-900" and the correct class will be provided when dark is active on your html element.

By default, the dark variant is enabled for backgroundColor, borderColor, gradientColorStops, placeholderColor, and textColor.
*/
