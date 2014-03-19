'use strict';

var fs = require('fs');

module.exports = function (grunt) {
    // load npm tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshintFiles: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
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
            reports: ['.reports'],
            coverage: ['.reports/coverage']
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: '<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: '<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            test: '<%= jshintFiles %>',
            jslint: {
                options: {
                    reporter: 'jslint',
                    reporterOutput: '.reports/lint/jshint.xml'
                },
                files: {
                    src: '<%= jshintFiles %>'
                }
            },
            checkstyle: {
                options: {
                    reporter: 'checkstyle',
                    reporterOutput: '.reports/lint/jshint_checkstyle.xml'
                },
                files: {
                    src: '<%= jshintFiles %>'
                }
            }
        },
        bgShell: {
            coverage: {
                cmd: 'node node_modules/istanbul/lib/cli.js cover --dir .reports/coverage node_modules/grunt-jasmine-node/node_modules/jasmine-node/bin/jasmine-node -- test --forceexit'
            },
            cobertura: {
                cmd: 'node node_modules/istanbul/lib/cli.js report --root .reports/coverage --dir .reports/coverage/cobertura cobertura'
            }
        },
        open: {
            file: {
                path: '.reports/coverage/lcov-report/index.html'
            }
        },
        jasmine_node: {
            options: {
                specNameMatcher: './*.spec', // load only specs containing specNameMatcher
                requirejs: false,
                forceExit: true
            },
            test: ['test/'],
            ci: {
                options: {
                    jUnit: {
                        report: true,
                        savePath: '.reports/junit/',
                        useDotNotation: true,
                        consolidate: true
                    }
                },
                src: ['test/']
            }
        },
        changelog: {
            options: {
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
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

    grunt.registerTask('test', ['git:commitHook', 'jshint:test', 'jasmine_node:test']);
    grunt.registerTask('build', ['test', 'concat', 'uglify']);
    grunt.registerTask('cover', ['clean:coverage', 'jshint:test', 'bgShell:coverage', 'open']);
    grunt.registerTask('ci', ['clean', 'jshint:jslint', 'jshint:checkstyle', 'bgShell:coverage', 'bgShell:cobertura', 'jasmine_node:ci']);
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