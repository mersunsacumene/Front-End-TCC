/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        azulClaro:"#3317DB",
        azul: "#220F93",
        branco: "#ffffff",
      }
    },
  },
  plugins: [
    require ('@tailwindcss/forms'),
  ],
}

