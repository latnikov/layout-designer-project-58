/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#fe8a02',
        'primary-dark': '#42413c', 
        white: '#fff',
        'white-50': '#d7ccc0',
        light: '#f5f4f0',
        dark: '#2a2626',
        'dark-50': '#908d8b',
        brown: '#b09a81',
        blue: '#1085c5',
      }
    },
    fontFamily: {
      neucha: ['Neucha'],
      opensans: ['Open Sans'],
    }
  },
  plugins: [],
}