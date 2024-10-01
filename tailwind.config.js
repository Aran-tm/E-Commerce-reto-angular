/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        color: {    // global variables
          primary: '#000000',
          blue: '#377DFF',
          green: '#38CB89',
          orange: '#FFAB00',
          red: '#FF5630',
          neutralOne: '#141718',
          neutralTwo: '#232627',
          neutralThree: '#343839',
          neutralFour: '#6C7275',
          neutralFive: '#E8ECEF',
          neutralSix: '#F3F5F7',
          neutralSeven: '#FEFEFE',
        },
      }
    },
  },
  plugins: [],
}
