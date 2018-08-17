module.exports = function (grunt) {
    'use strict';


    //plugins && variables
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);

    //config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourceMap: true,
                    implementation: sass
                },
                files: {
                    'css/main.css': 'css/main.sass'
                }
            }
        },
        watch: {
            css: {
                files: ['css/main.css', 'css/main.sass'],
                tasks: ['sass']
            }
        }
    });

    //tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch', 'sass']);
};