'use strict';

module.exports = function (grunt) {
    // load npm tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
            ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
            ' */\n\n',
        // Before generating any new files, remove any previously-created files.
        clean: {
            jasmine: ['build/reports/jasmine'],
            coverage: ['build/coverage']
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: 'dist/<%= pkg.name %>.zip'
                },
                src: ['dist/<%= pkg.name %>-<%= pkg.version %>.js', 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            test: ['Gruntfile.js', 'lib/**/.js', 'test/**/*.js'],
            jslint: {
                options: {
                    reporter: 'jslint',
                    reporterOutput: 'build/reports/jshint.xml'
                },
                files: {
                    src: ['Gruntfile.js', 'lib/**/.js', 'test/**/*.js']
                }
            },
            checkstyle: {
                options: {
                    reporter: 'checkstyle',
                    reporterOutput: 'build/reports/jshint_checkstyle.xml'
                },
                files: {
                    src: ['Gruntfile.js', 'lib/**/.js', 'test/**/*.js']
                }
            }
        },
        bgShell: {
            coverage: {
                cmd: 'node node_modules/istanbul/lib/cli.js cover --dir build/coverage node_modules/grunt-jasmine-node/node_modules/jasmine-node/bin/jasmine-node -- test --forceexit'
            },
            cobertura: {
                cmd: 'node node_modules/istanbul/lib/cli.js report --root build/coverage --dir build/coverage/cobertura cobertura'
            }
        },
        open: {
            file: {
                path: 'build/coverage/lcov-report/index.html'
            }
        },
        jasmine_node: {
            specNameMatcher: './*.spec', // load only specs containing specNameMatcher
            projectRoot: 'test',
            requirejs: false,
            forceExit: true,
            verbose: false,
            jUnit: {
                report: true,
                savePath: './build/reports/jasmine/',
                useDotNotation: true,
                consolidate: true
            }
        },
        changelog: {
            options: {
            }
        }
    });

    // Register tasks.
    grunt.registerTask('test', ['clean:jasmine', 'jshint:test', 'jasmine_node']);
    grunt.registerTask('build', ['test', 'concat', 'uglify', 'compress']);
    grunt.registerTask('cover', ['clean:coverage', 'jshint:test', 'bgShell:coverage', 'open']);
    grunt.registerTask('ci', ['clean', 'jshint:jslint', 'jshint:checkstyle', 'bgShell:coverage', 'bgShell:cobertura', 'jasmine_node']);

    // Default task.
    grunt.registerTask('default', 'build');
};