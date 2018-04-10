module.exports = {
  options: {
    browsers: ['last 5 versions']
  },
  your_target: {
    files: {
      'front-end/tmp/css/main-pref.css': ['front-end/tmp/css/main.css']
    }
  }
};