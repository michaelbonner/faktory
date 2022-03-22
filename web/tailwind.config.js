const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#746f4b",
        orange: "#e66448",
        almostWhite: "#f4f4f4",
        mint: "#bedbd4",
        "light-gray": "#e2e2e2",
        "medium-gray": "#818180",
        "dark-gray": "#2f2d2d",
        peach: "#eebaa5",
      },
    },
    fontFamily: {
      serif: ["Vollkorn", ...defaultTheme.fontFamily.serif],
      display: ["Oswald", ...defaultTheme.fontFamily.sans],
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
}
