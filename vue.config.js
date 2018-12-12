const path = require('path')

module.exports = {
  baseUrl: '/',
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_reset.scss";
          @import "@/styles/_base.scss";
        `,
        rules: [{
          test: /\.scss$/,
          use: {
            loader: 'sass-loader',
            options: {
              includePaths: ['@/styles/*'],
            }
          },
        }]
      },
    },
  },
}
