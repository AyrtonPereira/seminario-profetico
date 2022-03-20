module.exports = grunt => {
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-sass");
    const sass = require("node-sass");
    const imageminOptipng = require('imagemin-optipng');
    const imageminJpegtran = require('imagemin-jpegtran');
    const imageminSvgo = require('imagemin-svgo');
    
    grunt.initConfig({
        concat: {
                sass: {
                    src: [
                        './src/assets/sass/*.scss'
                    ],
                    dest: './src/assets/sass/all.scss'
                },
                js: {
                    src: [
                        './src/assets/js/*.js',
                    ],
                    dest: './src/assets/js/all.js'
                }
        },
        sass: {
            options: {
                implementation: sass,
                expand: true,
            },
            build: {
                files:[{
                    src: ['src/assets/sass/all.scss'],
                    dest: 'src/assets/css/all.css'
                }]
            }
        },
        cssmin: {
            styles: {
                files: {
                    './src/assets/css/all.min.css': ['./src/assets/css/all.css']
                }
            }
        },
        uglify: {
            functions: {
                files: {
                    './src/assets/js/all.min.js': ['./src/assets/js/all.js']
                }
            }
        },
        watch: {
            scss: {
                files: ['src/assets/sass/*.scss', '!src/assets/sass/all.scss'],
                tasks: ['clean:css', 'concat:sass', 'sass', 'cssmin']
            },
            js: {
                files: ['src/assets/js/*.js', '!src/assets/js/all.js'],
                tasks: ['clean:js', 'concat:js', 'uglify']
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [imageminOptipng(), imageminJpegtran(), imageminSvgo()]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/img/*.{png,jpg,gif,jpeg}'],
                    dest: 'dist/assets/img'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                  removeComments: true,
                  collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'dist/'
                }]
              },
        },
        clean: {
            build: ['./dist/*'],
            dev: ['./src/assets/**/*.min.*', './src/assets/**/all.*'],
            js: ['./src/assets/js/*.min.*', './src/assets/js/all.*'],
            css: ['./src/assets/sass/*.min.*', './src/assets/sass/all.*', './src/assets/css/*.min.*', './src/assets/css/all.*'],
            release: ['./src/assets/**/*.min.*']
        },
        copy: {
            main: {
                files: [
                    {
                  expand: true,
                  cwd: 'src/',
                  src: ['*.{png,ico,jpg,js,json,xml}'],
                  dest: 'dist/',
                  flatten: true,
                  filter: 'isFile',
                },
                {   
                    expand: true,
                    cwd: 'src/assets/',
                    src: ['**/*.min.{js,css}', '**/_main.{js,css}'],
                    dest: 'dist/assets/',
                    filter: 'isFile',
                },
                {
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: ['*'],
                    dest: 'dist/assets/img',
                    filter: 'isFile',
                }],
            }
        },
    });

    grunt.registerTask('build', function() {
        grunt.task.run(['clean:dev', 'clean:build', 'concat', 'sass', 'cssmin', 'uglify', 'htmlmin', 'copy', 'clean:release']);
    });
    grunt.registerTask('dev', function() {
        grunt.task.run(['watch']);
    });
};