/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070A10',
          900: '#0B0F19',
          800: '#101826',
        },
      },
    },
  },
  plugins: [],
}
