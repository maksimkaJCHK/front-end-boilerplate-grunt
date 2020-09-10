module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  your_target: {
    files: {
      './src/tmp/css/main-pref.css': ['./src/tmp/css/main.css']
    }
  }
};