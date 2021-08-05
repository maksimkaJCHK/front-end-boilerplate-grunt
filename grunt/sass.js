const sass = require('node-sass');

module.exports = function(grunt) {
  let target = grunt.cli.tasks.join(',').indexOf('dev') !== -1;

  return {
    options: {
      implementation: sass,
      sourceMap: false,
      sourceMapContents: target,
      sourceMapEmbed: target
    },
    dist: {
      files: {
        './src/tmp/css/main.css': './src/styles/main.scss'
      }
    }
  }
};