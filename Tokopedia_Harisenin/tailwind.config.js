/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '3vh': '3vh',
        '4vh': '4h',
        '5vh': '5vh',
        '10vh': '10vh'
      }
    },
  },
  plugins: [],
}

