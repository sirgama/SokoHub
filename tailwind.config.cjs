/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react",
  ],
  theme: {
    fontFamily: {
      'sans': 'Pacifico, cursive, sans-serif',
    },
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}