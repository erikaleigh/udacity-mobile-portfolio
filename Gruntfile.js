
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 700,
            height: 525,
            suffix: 'sm',
            quality: 30
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

    /* Clear out the images directory if it exists */
    // clean: {
    //   dev: {
    //     src: ['images'],
    //   },
    // },
    //
    // /* Generate the images directory if it is missing */
    // mkdir: {
    //   dev: {
    //     options: {
    //       create: ['images']
    //     },
    //   },
    // },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
