/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      title: ['32px', '48px'],
      cardTitle:['20px','24px'],
      cardText:['16px', '150%'],
      linkText:['18px','40px'],
      footerText:['14px', '21px']
    },
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
      main:'#FF5B00'
    },
    
  },
  plugins: [],
}
