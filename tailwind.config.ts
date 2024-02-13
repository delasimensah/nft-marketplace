/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
