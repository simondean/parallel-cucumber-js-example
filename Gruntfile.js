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
      tests: ['tmp']
    },

    shell: {
      features: {
        command: 'parallel-cucumber-js --workers 4 --profiles.sleep --profiles.busy'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('features', ['shell:features']);

  grunt.registerTask('test', ['jshint', 'features']);
  grunt.registerTask('default', ['test']);

};