module.exports = {
  publicPath: 'dental',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";',
      },
    },
  },
};
