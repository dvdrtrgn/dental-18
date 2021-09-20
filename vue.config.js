let out = 'health-advantage/';
let dist = 'dist/'; // default: dist

module.exports = {
  /* only sets name of "distribution" folder */
  outputDir: `${dist}${out}`,
  /* only rewrites pathname in "production" mode */
  publicPath: process.env.NODE_ENV === 'production' ? `` : ``,
  css: {
    loaderOptions: {
      // sass: {
      //   data: '@import "@/scss/settings.scss";',
      // },
    },
  },
};
