// Karma configuration
import config from './build/config';

module.exports = function(cfg) {
  cfg.set({
    // List of files
    // Patterns to load in the browser
    files: [
      './node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js'
    ],

    // List of files to exclude
    exclude: [],

    // Continuous Integration mode
    // If true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // Frameworks to use
    // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jspm',
      'jasmine'
    ],

    plugins: [
      'karma-babel-preprocessor',
      'karma-jasmine',
      'karma-jspm',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],

    // Preprocess matching files before serving them to the browser
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [config.path.test.unit]: ['babel', 'sourcemap'],
      [config.path.src.js]: ['babel', 'sourcemap', 'coverage']
    },

    // Babel
    'babelPreprocessor': {
      options: config.babel
    },

    // Level of logging
    // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    // Start these browsers
    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS'
    ],

    // Test results reporter to use
    // Possible values: 'dots', 'progress'
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      'spec',
      'coverage'
    ],
    proxies: {
      ['/' + config.directories.src + '/']: '/base/' + config.directories.src + '/',
      ['/' + config.directories.common + '/']: '/base/' + config.directories.common + '/',
      ['/' + config.directories.test + '/']: '/base/' + config.directories.test + '/'
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'html',
          subdir: 'report-html'
        }
      ]
    },

    // JSPM
    jspm: {
      config: config.filenames.config,
      packages: config.directories.common,
      loadFiles: [
        config.path.src.js,
        config.path.test.unit
      ],
      paths: {
        '*': '*.js',
        'github:*': config.directories.common + '/github/*.js',
        'npm:*': config.directories.common + '/npm/*.js'
      }
    }
  });
};
