module.exports = function(grunt){
  //Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
        dest: 'build/styles.css'
      }
    },
    sass: {
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/styles.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: 'build/scripts.js',
          dest: 'build/scripts.js'
        }],  
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'build/index.html': 'html/index.html'     // 'destination': 'source'
        }
      },
    }
  });
  //Load a plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  //Register tasks, for example run grunt concat-js
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  
  //Default task, runs all task with grunt command
  grunt.registerTask('default', ['concat-js', 'concat-css', 'sass', 'uglify', 'htmlmin']);
}