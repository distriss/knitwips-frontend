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
        pink: '#fe95c3',
        darkpink: '#cb5287',
        sage: '#6c8184',
        lightsage:'#92a6a2',
        lightgray: '#c4c4c4',
        beige: '#d7cdcc',
      }
    },
  },
  plugins: [],
}

