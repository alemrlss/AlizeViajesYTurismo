/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      // Tamaño de las media query
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1200px',  // Modificado
        'xl': '1280px',
        'xxl': '1400'
      },
    },
  },
  plugins: [],
}   