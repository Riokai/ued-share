'use strict';

module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    connect: {
      options: {
        port: 3000,
        hostname: '0.0.0.0',
        livereload: 35729
      },

      livereload: {

      }
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
    'connect',
    'watch:livereload'
  ]);

  grunt.registerTask('demo02', [
    'connect',
    'watch:livereload'
  ]);

};