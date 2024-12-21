/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Satoshi','Supreme', 'sans-serif']
    },
    extend: {
      display:["group-hover"]
    },
  },
  plugins: [],
}

