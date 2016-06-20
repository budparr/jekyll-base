var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'autoprefixer'
  ],
  input: '_app/css/main.css',
  dir: './assets/css',
  cssnano: {
     discardComments: {
        removeAll: true
    }
  }

}