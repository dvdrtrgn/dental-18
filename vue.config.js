module.exports = {
  publicPath: 'rs/dental',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";',
      },
    },
  },
};
