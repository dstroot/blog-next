const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      keyframes: true,
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
        "dark-4": "#252628", // 2A2B2D  1D1E20  252628
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      typography(theme) {
        return {
          /*   The light side (default) */
          DEFAULT: {
            css: {
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              "ol > li::before": { color: theme("colors.gray.700") },

              blockquote: {
                borderLeftWidth: "0.5rem",
                borderLeftColor: theme("colors.gray.300"),
              },
              "blockquote p:first-of-type::before": false,
              "blockquote p:last-of-type::after": false,

              "code::before": false,
              "code::after": false,

              a: {
                color: theme(`colors.blue.500`),
                textDecoration: `none`,
                "&:hover": {
                  textDecoration: `underline`,
                },
              },
            },
          },
          /*   The dark side   */
          dark: {
            css: [
              {
                color: theme("colors.gray.300"),
                '[class~="lead"]': {
                  color: theme("colors.gray.300"),
                },
                a: {
                  color: theme("colors.blue.300"),
                },
                strong: {
                  color: theme("colors.white"),
                },
                "ol > li::before": {
                  color: theme("colors.gray.400"),
                },
                "ul > li::before": {
                  backgroundColor: theme("colors.gray.400"),
                },
                hr: {
                  borderColor: theme("colors.gray.200"),
                },
                blockquote: {
                  color: theme("colors.gray.200"),
                  borderLeftColor: theme("colors.gray.400"),
                },
                h1: {
                  color: theme("colors.white"),
                },
                h2: {
                  color: theme("colors.white"),
                },
                h3: {
                  color: theme("colors.white"),
                },
                h4: {
                  color: theme("colors.white"),
                },
                "figure figcaption": {
                  color: theme("colors.gray.400"),
                },
                code: {
                  color: theme("colors.white"),
                },
                "a code": {
                  color: theme("colors.white"),
                },
                pre: {
                  color: theme("colors.gray.200"),
                  backgroundColor: theme("colors.gray.800"),
                },
                thead: {
                  color: theme("colors.white"),
                  borderBottomColor: theme("colors.gray.400"),
                },
                "tbody tr": {
                  borderBottomColor: theme("colors.gray.600"),
                },
              },
            ],
          },
        };
      },
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};

/*
By adding darkmode: 'class' to the config, you've instructed TailwindCSS to include all of the CSS utility classes for dark mode. This enables a dark variant that you can now add as classes to your React elements like className="bg-white dark:bg-gray-900" and the correct class will be provided when dark is active on your html element.

By default, the dark variant is enabled for backgroundColor, borderColor, gradientColorStops, placeholderColor, and textColor.
*/

/*
module.exports: {
  theme: {
    extend: {
      typography: {
        excerpt: {
          css: {
            p: {
              fontFamily: `${theme('fontFamily.display')}`,
              letterSpacing: theme('letterSpacing.tight'),
              fontSize: theme('fontSize.2xl'),
              lineHeight: theme('lineHeight.8'),
            }
          }
        },
      },
    },
  },
}


https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
https://zaengle.com/blog/tailwind-typography-plugin
https://tjaddison.com/blog/2020/08/updating-to-tailwind-typography-to-style-markdown-posts/
https://github.com/jjranalli/nightwind
https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
*/
