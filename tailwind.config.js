/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': {
          DEFAULT: '#12518d',
          light: '#1a69b5',
          dark: '#0c3b68',
        },
        'secondary': {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        'dark': {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          paper: '#1e293b',
          text: {
            primary: '#f8fafc',
            secondary: '#94a3b8'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 