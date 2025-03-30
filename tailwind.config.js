/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryTitle: '#B771E5',
        PrimaryContent: '#1F0802',
        PrimarySubcontent: '#38184C',
        PrrimaryBase: '#A6F1E0',
        PrimaryAccent: '#38184C',
        PrimaryBg: '#f6f6f6',
      },
    },
  },
  plugins: [],
}

