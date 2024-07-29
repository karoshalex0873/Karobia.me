/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins","san-seif"],
      },
      colors:{
        primary:"#162c2c",
        secondary:"#098181",
        third:"#025321",
        darkBrand:"#03272d",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
        },
      },

    },
  },
  plugins: [],
}

