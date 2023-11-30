/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        headerMobile: "url('/src/assets/images/illustration-sign-up-mobile.svg')",
        headerDesktop:"url('/src/assets/images/illustration-sign-up-desktop.svg')",
      },
      colors: {
        primary: {
          paleNavy: '#36384D',
          darkNavy: '#242742',
        },
        secondary: {},
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
