const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fff",
        darkBgColor: "#031B30",   
        textColor: "#475467",
        darkTextColor: "rgba(255,255,255,0.7)",
        tempSectionColor: "red",
        sectionBgColor: "#FCFCFD",
        darkSectionBgColor: "rgba(255,255,255,0.01)",
        gray: "rgba(3,27,48,0.06);",
        primaryColor: "#031B30",
        darkPrimaryColor: "#fff",
        secondaryColor: "#475467",
        darkSecondaryColor: "rgba(255,255,255,0.7)",
        accentColor: "#027A48",
        darkAccentColor: "#239465",
        success50: "#ECFDF3"

        
      },
      borderColor: {
        gray100: "rgba(255,255,255,0.1)",
        gray200: "#E6E7EE",
        gray300: "#D0D5DD"
      },
      boxShadow: {
        inputShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        langSwitcherShadow:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)"
      },
      screens: {
        xs: "375px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1440px"
      }
    }
  },
  plugins: plugins
};
