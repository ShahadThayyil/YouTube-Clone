/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        fade:'fadeOut 5s ease-in-out',
      },

      keyframes: theme =>({
        fadeOut:{
          '0%':{backgroundColor:theme("colors.black")},
          '50%':{backgroundColor:theme("colors.black")},
          '100%':{backgroundColor:theme("colors.transparent")},
        }
      })
    },
  },
  plugins: [],
}

