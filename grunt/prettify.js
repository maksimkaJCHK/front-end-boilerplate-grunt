module.exports = {
  options: {
    indent: 2,
    indent_char: ' ',
    wrap_line_length: 78,
    brace_style: 'expand',
    unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
  },
  task: {
    expand: true,
    cwd: './src/tmp/',
    src: ['*.html'],
    dest: './public/',
    ext: '.html',
  }
};