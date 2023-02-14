const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // height: (theme) => ({
    //   auto: "auto",
    //   ...theme("spacing"),
    //   full: "100%",
    //   screen: "calc(var(--vh) * 100)",
    // }),
    // minHeight: (theme) => ({
    //   0: "0",
    //   ...theme("spacing"),
    //   full: "100%",
    //   screen: "calc(var(--vh) * 100)",
    // }),
    colors: {
      white: colors.white,
      black: colors.black,
      primary: colors.gray, //gray-200
      secondary: colors.gray, //gray-300
      focus: colors.gray, //gray-400
    },
    extend: {
      // BRAND fonts
      fontFamily: {
        montagaText: ["var(--font-montaga)", ...fontFamily.sans],
        spectralHeader: ["var(--font-spectral)", ...fontFamily.sans],
      },
      // animation
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "ping-slow": "ping 1s cubic-bezier(1, 1, 0.2, 1)",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 1.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
  },
};
