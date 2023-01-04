module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dev: {    // indicates that it will be used only during development
			  files: {
				// destination     // source file
				'build/scss/all.css': 'src/scss/all.scss',
			  }
			}
		},
		uglify: {
			dev: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'build/js'
				  }]
			}
		},
		watch: {
			sass: {
				files: '**/*.scss', // ** any directory; * any file
				tasks: ['sass']
			},
			js: {
				files: '**/*.js', // ** any directory; * any file
				tasks: ['uglify']
			}
		},
	});
	//grunt.registerTask('default', ['sass'] );
};
