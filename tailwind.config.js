/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "rgba(25, 5, 143, 1)",
        customPink: "rgba(141, 55, 193, 1)",
        customBlue: "rgba(96, 102, 255, 1)",
      },
    },
  },
  plugins: [],
};
