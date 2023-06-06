/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero' : "url('hero-bg.png')"
      }
    },
    plugins: [],
  }
}