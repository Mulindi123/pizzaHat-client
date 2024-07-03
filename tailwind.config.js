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
      },
    },
  },
  plugins: [],
}