/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E2E2E",
        secondary: "#F97316",
        muted: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
