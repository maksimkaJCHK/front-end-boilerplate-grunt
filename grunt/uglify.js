module.exports = {
  concat: {
    options: {
      compress: false,
      beautify: true
    },
    files: {
      './public/js/main.js': [
        './src/js-concat/libraries/_jquery-3.1.1.min.js',
        './src/js-concat/plugins/*.js',
        './src/js-concat/main-function.js',
        './src/js-concat/main.js',
      ]
    }
  },
  min: {
    options: {
      compress: true
    },
    files: {
      './public/js/main.min.js': [
        './public/js/main.js'
      ]
    }
  }
};