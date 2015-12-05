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
          'demo01/{,**/}*.html',

          'demo02/{,**/}*.html',
          'demo02/css/{,**/}*.css'
        ]
      },

      sass: {
        files: ['demo02/scss/*.scss'],
        // tasks: ['sass:demo02']
        tasks: ['sass:demo02', 'autoprefixer:demo02']
      }
    },

    sass: {
      options: {
        sourcemap: 'none',
        // expanded, nested, compressed, compact
        style: 'expanded',
        compass: false
      },

      demo02: {
        files: [{
          expand: true,
          cwd: 'demo02/scss',
          src: ['*.scss'],
          dest: 'demo02/css',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 0%']
      },

      demo02: {
        files: [{
          expand: true,
          cwd: 'demo02/css/',
          src: '{,*/}*.css',
          dest: 'demo02/css/'
        }]
      }
    }

  });

  grunt.registerTask('demo01', [
    'connect',
    'watch:livereload'
  ]);

  grunt.registerTask('demo02', [
    'connect',
    'sass:demo02',
    'autoprefixer:demo02',
    'watch'
  ]);

};