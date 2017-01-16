
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 700,
            height: 525,
            suffix: 'med',
            quality: 15
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
};
