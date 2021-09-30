module.exports = {
  plugins: [
    require(`postcss-import`),
    require(`tailwindcss`),
    require(`autoprefixer`)({
      overrideBrowserslist: [`> 0%`],
      grid: true,
    }),
  ],
};
