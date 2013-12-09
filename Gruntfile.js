'use strict';

var fs = require('fs');

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
            coverage: ['build/coverage'],
            dist: ['dist']
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: 'dist/<%= pkg.name %>.zip'
                },
                src: ['dist/<%= pkg.name %>.js', 'dist/<%= pkg.name %>.min.js']
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
        },
        bump: {
            options: {
                updateConfigs: ['pkg'],
                commitFiles: ['-a'],
                commitMessage: 'chore: release v%VERSION%',
                push: false
            }
        }
    });

    // Register tasks.
    grunt.registerTask('git:commitHook', 'Install git commit hook', function () {
        grunt.file.copy('validate-commit-msg.js', '.git/hooks/commit-msg');
        fs.chmodSync('.git/hooks/commit-msg', '0755');
        grunt.log.ok('Registered git hook: commit-msg');
    });

    grunt.registerTask('test', ['git:commitHook', 'clean:jasmine', 'jshint:test', 'jasmine_node']);
    grunt.registerTask('build', ['clean:dist', 'test', 'concat', 'uglify', 'compress']);
    grunt.registerTask('cover', ['clean:coverage', 'jshint:test', 'bgShell:coverage', 'open']);
    grunt.registerTask('ci', ['clean', 'jshint:jslint', 'jshint:checkstyle', 'bgShell:coverage', 'bgShell:cobertura', 'jasmine_node']);
    grunt.registerTask('release', 'Bump version, update changelog and tag version', function (version) {
        grunt.task.run([
            'bump:' + (version || 'patch') + ':bump-only',
            'build',
            'changelog',
            'bump-commit'
        ]);
    });

    // Default task.
    grunt.registerTask('default', 'build');
};