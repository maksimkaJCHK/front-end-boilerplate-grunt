module.exports = {
  concat: {
    options: {
      compress: false,
      beautify: true
    },
    files: {
      'public/js/main.js': [
        'front-end/js-concat/libraries/_jquery-3.1.1.min.js',
        'front-end/js-concat/plugins/*.js',
        'front-end/js-concat/main-function.js',
        'front-end/js-concat/main.js',
      ]
    }
  },
  min: {
    options: {
      compress: true
    },
    files: {
      'public/js/main.min.js': [
        'public/js/main.js'
      ]
    }
  }
};