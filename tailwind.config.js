/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('./assets/star.png')",
        'fondomini': "url('./assets/star_mini.png')",
        'logo': "url('./assets/logo.png')",
      }
    },
  },
  plugins: [],
}
