/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'light-grayish-cyan':'hsl(180, 52%, 96%)',
        'filter-cyan':'hsl(180, 31%, 95%)',
        'dark-cyan':'hsl(180, 8%, 52%)',
        'darkest-cyan':'hsl(180, 14%, 20%)',
        'text-cyan':' hsl(180, 29%, 50%)'
      }
    },

    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}