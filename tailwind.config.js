/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      300: "300px",
      400: "400px",
      handy: "370px",
      500: "500px",
      sm: "640px",
      600: "600px",
      700: "700px",
      md: "768px",
      800: "800px",
      900: "900px",
      lg: "1024px",
      1100: "1100px",
      xl: "1280px",
      1400: "1400px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightTextCol: "#F2F3F4",
        dimLightTextCol: "rgba(242, 243, 244, 0.6)",
        darkTextCol: "#282933",

        bgPrimaryCol: "#282933",
        bgSecondaryCol: "#F2F3F4",
        bgSecondaryDarkCol: "#1C1D24",
        navCol: "#353646",
        iconTransCol: "#F2F3F490",

        inputCol: "#E0E4E8",
        inputPlaceholderCol: "#E0E4E860",

        default: "#F2F3F4",
        success: "#5CAB23",
        warning: "#FFAE33",
        failure: "#DA1301",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
      },
      dropShadow: {
        cardIcon: "0px 8px 24px #000000",
      },
    },
  },
  plugins: [],
};
