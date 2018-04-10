module.exports = {
  styles: {
    files: [
      'front-end/styles/*.scss',
      'front-end/styles/**/*.scss'
    ],
    tasks: ['sass', 'autoprefixer', 'css_mqpacker', 'cssUrlEmbed', 'cssmin'],
    options: {
      spawn: false,
      livereload: true
    },
  },
  script: {
    files: [
      'front-end/js-concat/*.js',
      'front-end/js-concat/**/*.js'
    ],
    tasks: ['uglify'],
    options: {
      spawn: false,
      livereload: true
    },
  },
  templates: {
    files: [
      'front-end/templates/**/*.twig'
    ],
    tasks: ['twigRender'],
    options: {
      spawn: false,
      livereload: true
    },
  }
};