/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      width: {
        128: "65rem",
      },
      height: {
        129: "45rem",
      },
      gap: {
        12: "1",
      },
      colors: {
        bgGray: "#D6E0E9",
        lightYellow: "#FBE89C",
        lightGreen: "#10B6AC",
      },
    },
  },
  plugins: [],
};
