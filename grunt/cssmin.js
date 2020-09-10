module.exports = {
  target: {
    files: [{
      expand: true,
      cwd: './public/css',
      src: ['main.css'],
      dest: './public/css',
      ext: '.min.css'
    }]
  }
};