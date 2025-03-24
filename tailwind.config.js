/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    extend: {
      screens: {
        xs: "0px", //
        sm: "360px", // Small screens (mínimo 640px)
        md: "744px", // Medium screens (mínimo 768px)
        lg: "1200px", // Large screens (mínimo 1024px)
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        sans: ["var(--font-work-sans)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)"],
      },
      colors: {
        cs50: "#fff3ed",
        cs100: "#ffe2d4",
        cs200: "#ffc2a8",
        cs300: "#ff9770",
        cs400: "#ff6037",
        cs500: "#FF441F",
        cs600: "#f01d06",
        cs700: "#c71007",
        cs800: "#9e0f0e",
        cs900: "#7f110f",
        cs950: "#450507",
        cstext: "#272727",
      },
    },
  },
  plugins: [],
};
