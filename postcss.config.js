var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-color-function',
    'postcss-discard-comments',
    'autoprefixer'
  ],
  input: '_app/css/main.css',
  dir: ['./_site/assets/css', './assets/css']
}