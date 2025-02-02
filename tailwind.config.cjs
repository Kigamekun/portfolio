/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: "#3f2d6c",
        grey: "#9EB5CB",
        "primary-black": "#26343B",
      },
    },
  },
  plugins: [],
};
