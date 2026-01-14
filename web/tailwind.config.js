/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        padree: {
          black: "#050505",
          dark: "#111111",
          gold: "#D4AF37", // Classic gold, adjust if needed
          beige: "#E5D3B3",
          accent: "#FFFFFF",
          text: "#F5F5F5",
          muted: "#888888"
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
