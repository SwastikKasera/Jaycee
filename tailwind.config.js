/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#185ADB',
        secondary: '#0A1931',
        accent: '#FFC947',
        background: '#EFEFEF',
      },
      fontFamily: {
        vidaloka: ['Vidaloka', 'serif'],
        martel: ['Martel', 'serif'],
        karla: ['Karla', 'serif'],
      }
    },
  },
  plugins: [],
}

