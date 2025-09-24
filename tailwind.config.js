/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'east-bay': {
          '50': '#f4f7fa',
          '100': '#e7ebf2',
          '200': '#d4dce9',
          '300': '#b7c5d9',
          '400': '#94a7c6',
          '500': '#7a8db7',
          '600': '#6878a8',
          '700': '#5c6899',
          '800': '#515981',
          '900': '#434a65',
          '950': '#2c2f3f',
        }
      }
    },
  },
  plugins: [],
}