/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primarybackground' : '#F7F8FC', 
        'secondarybg' : '#3639AE',
        'primaryLetterColor' : '#122672',
        'secondaryLetterColor' :'#2C6DFF',
        'tertiaryLetterColor' : '#82C519',
        'colorCard1' : '#FFF2F2',
        'colorCard2' : '#FFF9F1',
        'colorCard3' : '#EDFFEC',
        'colorCard4' : '#F4FCFF',
        'bisque' : '#FFE4C4',
        'quarteryLetterColor' : '#FF6A07',
        'quinaryLetterColor' : '#B70202',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}