module.exports = function(grunt) {
  let target = grunt.cli.tasks.join(',').indexOf('dev') !== -1;
  return {
    options: {
      browsers: ['last 2 versions'],
      map: target
    },
    your_target: {
      files: {
        './src/tmp/css/main-pref.css': ['./src/tmp/css/main.css']
      }
    }
  }
};