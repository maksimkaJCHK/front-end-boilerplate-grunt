module.exports = {
  all: {
     options: {
      optimizationLevel: 3,
      svgoPlugins: [{removeViewBox: false}]
    },
    files: [{
      expand: true,
      cwd: 'public/optimaze_images/',
      src: ['*.{png,jpg,gif}'],
      dest: 'public/images/'
    }]
  }
};