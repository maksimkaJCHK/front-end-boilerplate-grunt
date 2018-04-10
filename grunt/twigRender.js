module.exports = {
  your_target: {
    files : [
      {
        //data: 'path/to/datafile.json',
        data: {
          title: 'Главная страница'
        },
        expand: true,
        cwd: 'front-end/templates/pages/',
        src: ['*.twig'],
        dest: 'public/',
        ext: '.html'
      }
    ]
  }
};