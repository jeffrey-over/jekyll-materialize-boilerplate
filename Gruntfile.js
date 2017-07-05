module.exports = function (grunt) {

    var log = function (err, stdout, stderr, cb) {
        if(stdout) {
            grunt.log.writeln(stdout);
        }
        if(stderr) {
            grunt.log.error(stderr);
        }
        cb();
    };

    grunt.initConfig({
        shell: {
            jekyllClean: {
                command: 'jekyll clean',
                options: {
                    callback: log
                }
            },
            jekyllBuild: {
                command: 'jekyll build JEKYLL_ENV=dev',
                options: {
                    callback: log
                }
            }
        },
        watch: {
            posts:{
                files:[
                    '_config.yml',
                    'source/*.html',
                    'source/*.md',
                    'source/_data/*.*',                    
                    'source/_layouts/**',
                    'source/_posts/**',
                    'source/_drafts/**',
                    'source/_includes/**',
                    'source/assets/**/*.*',
                    'source/_scss/**/*.*',
                    'source/_scss/*.*',
                    'source/css/**/*.*'
                ],
                tasks: ['shell:jekyllBuild']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'static/**/*.*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './static'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('build',['shell:jekyllBuild']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
    grunt.registerTask('clean',['shell:jekyllClean']);
};