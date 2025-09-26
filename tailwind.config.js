/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // include index.html if needed
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4AC1C1",
          dark: "#391313",
          light: "#F3D4D4",
        },
        secondary: "#14171A",
        tertiary: "#F59E0B",
        text: "#1E1E1E",
        container: "#F8F8F8",
      },
      borderRadius: {
        custom: "12px", // matches your old --border-radius
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        hero: "url('/images/MY-SERVICES.png')", // ✅ use / if file is in public
      },
    },
  },
  plugins: [], // ✅ outside theme
};
