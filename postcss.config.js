var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-advanced-variables',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-color-function',
    'postcss-flexibility',    
    'autoprefixer',
    'cssnano'
  ],
  input: '_app/css/main.css',
  dir: './assets/css'
}