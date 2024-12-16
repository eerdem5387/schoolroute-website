/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // TS ve JSX dosyalarını da içerir
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}