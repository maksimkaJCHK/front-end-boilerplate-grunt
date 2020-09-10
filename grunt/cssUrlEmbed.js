module.exports = {
  encodeWithBaseDir: {
    options: {
      baseDir: './src'
    },
    files: {
      './public/css/main.css': ['./src/tmp/css/main-mqr.css']
    }
  }
};