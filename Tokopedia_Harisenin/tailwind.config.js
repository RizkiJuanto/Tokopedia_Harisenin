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
        '10vh': '10vh',
      },
      width: {
        '8vw':'8vw',
        '20vw': '20vw',
      },
      padding: {
        '1vh':'1vh',
      },
    },
    colors: {
      pgrimary: 'var(--color-primary)',
    }
  },
  plugins: [],
}

