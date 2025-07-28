/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#4B0082", // Indigo for tech vibe
          accent: "#FF6200", // Saffron for Indian roots
        },
        dropShadow: {
          'xl': '0 10px 20px rgba(80, 0, 130, 0.15)',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
        },
      },
    },
    plugins: [],
  };