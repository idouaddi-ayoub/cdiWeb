/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["38px", "54px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "gray-5": "#0D0D0D",
        "red-500": "rgba(242, 48, 5, 0.70)",
        "white-700": "rgba(255, 255, 255, 0.10)",
        "pink-5": "#F2055C",
        "yellow-200": "#F2E205",
        "yellow-600": "#F2B705",
        "orange-6": "#F28705",
        "red-300": "#F23005",
        "yellow-2": "#6D560F",
        "orange-2": "#6D430F",
        "red-2": "#6D200F",
      },
      boxShadow: {
        "3xl": "0 30px 20px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        hero: "url('assets/images/AssassinCreed.png)",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
      width: {
        "game-img-width": "85%",
      },
      minWidth: {
        "game-width": "33rem",
        "game-s-width": "25rem",
      },
      height: {
        "game-img-height": "85%",
      },
      minHeight: {
        "game-height": "40rem",
        "game-s-height": "32rem",
      },
      borderRadius: {
        "game-img-border": "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
