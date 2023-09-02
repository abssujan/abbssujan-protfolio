/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      margin: {
        '100': '0 auto'
      },
      width: {
        '100': '45%',
        '110': '55%',
        '120': '80%',
        '130': '90%'
      }
    },
  },
  plugins: [],
}
