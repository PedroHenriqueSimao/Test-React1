/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007F2D',
        secondary: '#E30613',
        neutral: '#BDBCBC',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};