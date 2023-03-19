/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tab: { max: "768px" },
      },
      colors: {
        primary: "#6FA7B4",
        grey: { 600: "#F7F7F7", 500: "#8B8BA4" },
        green: "#6FA7B4;",
      },
      fontSize: {
        xs: "10px",
        base: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
        xxxl: "40px",
        "2xl": "48px",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/public/static/images/HeroImage.png')",
        filter: "linear-gradient(180deg, rgba(0, 35, 125, 0.6) 0%, rgba(0, 0, 0, 1) 100%)",
        register: "url('/public/static/images/aeroplane.png')",
        apply: "url('../src/assets/apply-bg.png')",
      }),

      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "25% ": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "75%": {
            opacity: 0,
          },
          "100% ": { opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100% ": { opacity: 1 },
        },
        zoom: {
          "0%": { transform: "scale(100%)" },
          "50%": { transform: "scale(110%)" },
          "100%": { transform: "scale(100%)" },
        }
      },
      animation: {
        "slide-in": "slide-in 0.5s forwards",
        "slide-out": "slide-out 0.5s forwards",
        "fade-in": "fade-in 2s forwards ",
        "fade-out": "fade-out 2s forwards ",
        "ltr-linear-infinite": "ltr-linear-infinite 10s linear infinite",
        zoom: "zoom 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
