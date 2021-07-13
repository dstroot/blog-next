const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      keyframes: true,
    },
    transform: {
      md: (content) => {
        return remark().process(content);
      },
    },
  },
  darkMode: "class", // true, false or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
    },
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "dark-1": "#1a1a1a",
        "dark-2": "#222222",
        "dark-3": "#282828",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
    },
  },
  variants: {
    // extend: { translate: ["dark"] },
  },
  plugins: [],
};

/*
By adding darkmode: 'class' to the config, you've instructed TailwindCSS to include all of the CSS utility classes for dark mode. This enables a dark variant that you can now add as classes to your React elements like className="bg-white dark:bg-gray-900" and the correct class will be provided when dark is active on your html element.

By default, the dark variant is enabled for backgroundColor, borderColor, gradientColorStops, placeholderColor, and textColor.
*/
