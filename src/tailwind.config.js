/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'brightness-0',
    'brightness-50',
    'brightness-75',
    'brightness-90',
    'brightness-100',
    'brightness-125',
    'brightness-150',
    'brightness-200',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
