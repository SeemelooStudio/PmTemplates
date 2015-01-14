/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        sass: {
            dist: {
                files: {
                    'tour.css': 'tour.scss'
                }
            }
        },
        less: {
            dist: {
                files: {
                    'coupon.css': 'coupon.less'
                }
            }
        },
        serve: {
            options: {
                port: 8899
            }
        },
        watch: {
            css: {
                files: ['*.scss','*.less'],
                tasks: ['sass', 'less'],
                options: {},
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-serve');

    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit']);
    grunt.registerTask('server', ['serve']);
};