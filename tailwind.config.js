/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      fontFamily: {
        scada: ["Scada", "sans-serif"],
        satoshi: ["satoshi", "sans-serif"],
        OverpassMono: ["Overpass Mono", "sans-serif"],
      },
      backgroundImage: {
        heroBg: 'url("/src/assets/heroBg.jpg")',
        dashedBg: 'url("/src/assets/dashed-bg.jpg")',
      },
      colors: {
        primaryColor: "#8E44AD",
        dark132: "rgba(132, 132, 132, 0.50)",
        dark238: "rgba(238, 238, 238, 0.50)",
      },
    },
  },
  plugins: [],
};
