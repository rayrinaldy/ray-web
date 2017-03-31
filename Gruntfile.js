module.exports = function(grunt) {
    require('jit-grunt')(grunt, {
        express : 'grunt-express-server'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
            compile: {
                options: {
                    pretty: true,
                },
                files: [{
                    expand: true,
                    cwd: 'app/pug/',
                    src: ['*.pug'],
                    dest: 'public',
                    ext: '.html',
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/scss',
                    src: ['*.scss'],
                    dest: 'public/css/',
                    ext: '.css',
                }]
            }
        },
        connect: {
            server: {
                options: {
                    open: true,
                    port: 9001,
                    livereload: true,
                    base: 'public'
                }
            }
        },
        express: {
            options: {
            },
            dev:{
                options: {
                    script: './app.js',
                    background: true,
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            pug: {
                files: 'app/pug/*.pug',
                tasks: ['pug']
            },
            sass: {
                files: 'app/scss/*.scss',
                tasks: ['sass'],
                options: {
                    debounceDelay: 250,
                },
            },
            express: {
                files: ['./app.js'],
                tasks: ['express:dev'],
                options: {
                    event: ['changed'],
                    spawn: false,
                    debounceDelay: 500,
                    interrupt: true,
                }
            },
        },
    });

    grunt.registerTask('default', ['express:dev', 'pug', 'sass', 'watch']);
    grunt.registerTask('build', ['pug', 'sass', 'express:dev']);

}