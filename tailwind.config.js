/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'slate-600': '#6B46C1',
        'custom-purple': '#5D3464',
        'color-primary': '#E0E0E0',
        'dark-brown': '#5D4037',
        'bright-yellow': '#FFC107',
        'gold': '#FFD700',
        'lime-green': '#32CD32',
        'teal': '#008080',
        'peach': '#FFDAB9',
        'light-gray': '#D3D3D3',
        'white': '#FFFFFF',
        'purple-light': '#D8BFD8',
        'purple-dark': '#800080',
        'green': '#485C65',
      },
    },
  },
  plugins: [],
}