/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTextCol: "#F2F3F4",
        dimLightTextCol: "rgba(242, 243, 244, 0.6)",
        darkTextCol: "#282933",

        bgPrimaryCol: "#282933",
        bgSecondaryCol: "#F2F3F4",
        navCol: "#353646",
        iconCol: "#F2F3F4",

        inputCol: "#E0E4E8",

        success: "#5CAB23",
        warning: "#FFAE33",
        failure: "#DA1301",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        sansSource: ["Sans Source Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
