/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryOne: "#F4F4FF",
      primaryTwo: "#EF6B4A",
      black: "rgba(9, 9, 55, 0.6)",
      blackTwo: " rgba(29, 29, 78, 0.2) 0%, rgba(9, 9, 55, 0.7) 100%)",
    },
    textColor: {
      black: "rgba(9, 9, 55, 0.6)",
      colorOne: "#090937",
      inputColor: "rgba(9, 9, 55, 0.4)",
      checkBox: "#6251DD",
      white: "#ffff",
      yellow: "#F0B861",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
