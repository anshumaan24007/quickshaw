/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo"],
        serif: ["Brawler"],
      },
      colors: {
        primary: {
          25: "#FEF8E7",
          50: "#FFF9E1",
          100: "#FFD66F",
          200: "#FFE5A3",
          300: "#FFEEC9",
          400: "#fb923c",
          500: "#FCB607", // Main yellow-orange
          600: "#E3A606",
          700: "#FCB607",
          800: "#5C4200",
          900: "#3B210A",
        },
      },
    },
  },
  plugins: [],
};
