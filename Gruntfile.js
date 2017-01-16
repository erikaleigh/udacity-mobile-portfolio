
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
            quality: 25
          },
          {
            width: 200,
            height: 75,
            suffix: 'sm',
            quality: 20
          }],
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'views/images_src',
          dest: 'views/images'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
};
