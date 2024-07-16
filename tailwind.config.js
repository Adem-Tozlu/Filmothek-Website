/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
        center:true
    },
    extend: {
        fontFamily:{
            gemunu:["Gemunu Libre", "sans-serif"],
            open: ["Open Sans", "sans-serif"]
        },colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}