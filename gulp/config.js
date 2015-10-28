'use strict';

module.exports = {
  port: {
    dev: 9000,
    release: 9000
  },

  path: {
    src : {
      dir: 'src',
      config: 'src/config.js',
      html: {
        files: ['src/**/*.html'],
        index: 'index.html'
      },
      js: {
        files: [
          'src/**/*.js',
          '!src/config.js'
        ]
      },
      css: 'src/css',
      scss: {
        main: 'src/scss/core.scss',
        files: ['src/**/*.scss'],
        includes: []
      },
      img: {
        files: [
          'src/img/**/*.{png,jpg,gif,svg}',
          'src/views/**/*.{png,jpg,gif,svg}',
          'src/favicon.ico'
        ]
      },
      fonts: {
        dir: 'src/fonts',
        files: [
          'node_modules/font-awesome/fonts/*.{otf,eot,svg,ttf,woff,woff2}'
        ]
      },
      clean: [
        'src/css',
        'src/fonts'
      ]
    },

    dist: {
      dir: 'dist/',
      index: 'index.html',
      build: 'build.js',
      config: 'dist/config.js',
      img: 'dist/img/',
      css: 'dist/css/',
      fonts: 'dist/fonts/',
      clean: [
        'aurelia.js'
      ]
    },

    common: {
      dir:'common',
      files: [
        'common/system.js',
        'aurelia.js'
      ]
    },


    doc: {
      dir: 'doc'
    }
  },

  scss: {
    dev: {
      errLogToConsole: true,
      outputStyle: 'expanded',
      includePaths: []
    },
    release: {
      errLogToConsole: true,
      outputStyle: 'compressed',
      includePaths: []
    }
  },

  autoprefixer: [
    'last 5 Chrome versions',
    'last 5 Firefox versions',
    'last 2 Safari versions',
    'Explorer >= 10'
  ],

  bundle: {
    force: true,
    packagePath : '.',
    bundles: {
      'aurelia': {
        includes: [
          'core-js',
          'text',
          'fetch',
          'aurelia-framework',
          'aurelia-bootstrapper',
          'aurelia-fetch-client',
          'aurelia-router',
          'aurelia-animator-css',
          'github:aurelia/templating-binding',
          'github:aurelia/templating-resources',
          'github:aurelia/templating-router',
          'github:aurelia/loader-default',
          'github:aurelia/history-browser',
          'github:aurelia/logging-console'
        ],
        options: {
          inject: true,
          minify: true
        }
      }
    }
  },

  karma: {
    configFile: __dirname + '/../karma.conf.js'
  },

  htmlhint: {
    'doctype-first': false,
    'tag-pair': false,
    'tagname-lowercase': true,
    'attr-lowercase': false,
    'attr-value-double-quotes': false,
    'attr-no-duplication': true,
    'id-unique': true,
    'spec-char-escape': false,
    'img-alt-require': false,
    'attr-unsafe-chars': true
  },

  htmlmin: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true
  },

  eslint: {
    useEslintrc: true
  },

  babel: {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: false,
    stage: 2,
    optional: [
      'es7.decorators',
      'es7.classProperties'
    ]
  },

  yuidoc: {
    parser: {
      project: {
        name: "YUI Documentation",
        description: "YUIDoc documentation generated from JavaScript",
        version: "0.1.0",
        url: "http://yuilibrary.com/projects/yuidoc",
        logo: "http://yuilibrary.com/img/yui-logo.png",
        options: {
          external: {
            data: "http://yuilibrary.com/yui/docs/api/data.json"
          },
          linkNatives: true,
          attributesEmit: true,
          outdir: "docs/api"
        }
      }
    },
    render: {}
  },

  onError: function(err) {
    console.log(err);
  }
};