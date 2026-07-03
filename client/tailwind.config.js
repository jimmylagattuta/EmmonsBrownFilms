/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        ember: "#B99A68",
        forest: "#0D1A16",
        ink: "#020303",
        smoke: "#111417",
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        scriptAllura: ['"Allura"', "cursive"],
        scriptParisienne: ['"Parisienne"', "cursive"],
        scriptAlex: ['"Alex Brush"', "cursive"],
        scriptSacramento: ['"Sacramento"', "cursive"],
        scriptYellowtail: ['"Yellowtail"', "cursive"],
        scriptDancing: ['"Dancing Script"', "cursive"],
        scriptPacifico: ['"Pacifico"', "cursive"],
        scriptLobster: ['"Lobster"', "cursive"],
        scriptHerr: ['"Herr Von Muellerhoff"', "cursive"],
        display: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        cinematic: "0.18em",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};