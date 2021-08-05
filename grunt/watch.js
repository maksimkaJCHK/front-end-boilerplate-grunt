module.exports = {
  styles: {
    files: [
      './src/styles/*.scss',
      './src/styles/**/*.scss'
    ],
    tasks: ['sass', 'autoprefixer', 'css_mqpacker', 'cssUrlEmbed', 'cssmin'],
    options: {
      spawn: false,
      livereload: true
    },
  },
  script: {
    files: [
      './src/script/*.js',
      './src/script/**/*.js'
    ],
    tasks: ['webpack'],
    options: {
      spawn: false,
      livereload: true
    },
  },
  templates: {
    files: [
      './src/templates/**/*.twig'
    ],
    tasks: ['twigRender', 'prettify'],
    options: {
      spawn: false,
      livereload: true
    },
  },
};