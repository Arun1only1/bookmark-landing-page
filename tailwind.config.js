/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
    extend: {
      colors: {
        'bookmark-purple': '#5267DF',
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
};
