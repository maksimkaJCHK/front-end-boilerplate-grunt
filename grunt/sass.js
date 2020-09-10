const sass = require('node-sass');

module.exports = {
  options: {
    implementation: sass,
    sourceMap: true
  },
  dist: {
    files: {
      './src/tmp/css/main.css': './src/styles/main.scss'
    }
  }
};