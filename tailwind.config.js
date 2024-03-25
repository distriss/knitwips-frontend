/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        main1: '#ededed',
        main2: '#cfcbc9',
        main3: '#364659',
        primary1: '#211712',
        primary2: '#efebe9',
        primary3: '#b28c65',
        accent1: '#858970',        
        accent1d: '#6a6d5a', 
        accent2: '#c64a39',
        accent2d: '#8a3428',       
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    }
  },
  plugins: [],
}

