/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#2B2D42',
      'secondary': '#8D99AE',
      'tertiary': '#EDF2F4',
      'accentPrimary': '#D90429',
      'accentSecondary': '#EF233C',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
