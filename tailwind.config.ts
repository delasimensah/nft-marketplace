/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001F2D",
        secondary: "#4D626C",
        gray: "#74858C",
      },
      fontFamily: {
        "inter-bold": ["InterBold"],
        "inter-semi-bold": ["InterSemiBold"],
        "inter-medium": ["InterMedium"],
        "inter-regular": ["InterRegular"],
        "inter-light": ["InterLight"],
      },
    },
  },
  plugins: [],
};
