'use strict';

module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    connect: {
      options: 3000,
      hostname: '0.0.0.0',
      livereload: 35729
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'demo01/{,**/}*.html'
        ]
      }
    }

  });

  grunt.registerTask('demo01', [
    'connection:livereload',
    'watch:livereload'
  ]);

};