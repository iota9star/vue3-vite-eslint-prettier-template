module.exports = {
  purge: {
    content: [`./index.html`, `./src/**/*.{vue,js,ts,jsx,tsx}`],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
