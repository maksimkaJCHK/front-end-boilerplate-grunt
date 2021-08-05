module.exports = {
  target: {
    files : [
      {
        //data: 'path/to/datafile.json',
        data: {
          title: 'Главная страница'
        },
        expand: true,
        cwd: './src/templates/pages/',
        src: ['*.twig'],
        dest: './src/tmp/',
        ext: '.html'
      }
    ]
  }
};