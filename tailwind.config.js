/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        playball: ['Playball', 'sans-serif'],
        anek: ['Anek Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

