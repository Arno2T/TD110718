module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-json-minification');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-dom-munger2');


   



    grunt.initConfig({
        htmlmin: {                                     // Task
          build: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
              'dist/index.html': 'src/index.html'     // 'destination': 'source'
            }
          }
        },
        uglify: {
            build: {
              files: {
                'dist/scripts/output.min.js': ['src/scripts/*.js']
              }
            }
          },
          cssmin: {
            build: {
              files: [{
                expand: true,
                cwd: 'src/assets',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/assets/',
                ext: '.min.css'
              }]
            }
          },
          imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                   // use: [mozjpeg()] // Example plugin usage
                },
                // files: {
                //     'dist/img.png': 'src/img.png',
                //     'dist/img.jpg': 'src/img.jpg',
                //     'dist/img.gif': 'src/img.gif'
                // }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/assets/img'
                }]
            }
        },
        json_minification: {
            build: {
              files: [{
                expand: true,
                cwd: 'src/data',
                src: ['*.json', '!*.min.json'],
                dest: 'dist/data',
                ext: '.json'
              }]
            }
          },
          clean: ['dist/'],
          dom_munger: {
            build: {
              options: {
                //You typically would only specify one option per target but they may be combined
                //All options (except callback) can be arrays
                update: [ {selector:'#movies',attribute:'href', value:'assets/movies.min.css'},
                 {selector:'#normalize',attribute:'href', value:'assets/normalize.min.css'},
                 {selector:'#modalJS',attribute:'src', value:'scripts/output.min.js'},
                 {selector:'#posterJS',attribute:'src', value:'scripts/output.min.js'}
                ],
                remove: "#modalJS",

               
              },
              src: 'dist/index.html', //could be an array of files
              dest: 'dist/index.html' //optional, if not specified the src file will be overwritten
            },
          },

          

    }),

    grunt.registerTask('default', ['clean', 'htmlmin','uglify', 'cssmin', 'imagemin', 'json_minification','dom_munger'])
};