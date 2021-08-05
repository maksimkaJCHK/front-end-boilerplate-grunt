module.exports = function(grunt){
  let target = grunt.cli.tasks.join(',').indexOf('dev') !== -1;
  return {
    main: {
      options: {
        map: target,
        sort: false
      },
  
      expand: false,
      cwd: '',
      src: './src/tmp/css/main-pref.css',
      dest: './src/tmp/css/main-mqr.css'
    }
  }
};