module.exports = function(grunt) {
  var waitingFeatureCopies = [];

  for (var i = 1; i < 4; i++) {
    waitingFeatureCopies.push({
      expand: true,
      src: ['features/waiting/original/*'],
      dest: 'features/waiting/copy_' + i + '/',
      filter: 'isFile'
    });
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'Gruntfile.js',
        'features/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp'],
      waitingFeatures: ['features/waiting/copy_*']
    },

    copy: {
      waitingFeatures: {
        files: [
          waitingFeatureCopies
        ]
      }
    },

    shell: {
      features: {
        command: 'parallel-cucumber-js --workers 4 --profiles.sleep --profiles.busy'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('updateWaitingFeatures', ['clean:waitingFeatures', 'copy:waitingFeatures']);
  grunt.registerTask('features', ['shell:features']);

  grunt.registerTask('default', ['jshint', 'updateWaitingFeatures', 'features']);

};