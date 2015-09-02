'use strict';

module.exports = {
  port: {
    dev: 9000,
    release: 8080
  },

  path: {
    src : {
      dir: 'src',
      config: 'config.js',
      html: {
        files: 'src/views/**/*.html'
      },
      js: {
        files: [
          'src/**/*.js'
        ],
        copy: {
          base:[
            'config.js',
            'common/system.js',
            'common/system.js.map',
            'common/es6-module-loader.js',
            'common/es6-module-loader.js.map'
          ],
          misc: [
            'src/js/**/*.js'
          ]
        }
      },
      sass: {
        files: [
          'src/scss/**/*.scss',
          'src/views/**/*.scss'
        ],
        includes: [],
        main: [
          'src/scss/core.scss',
          'src/scss/common.scss'
        ]
      },
      img: {
        files: [
          'src/img/**/*.{png,jpg,gif,svg}',
          'src/views/**/*.{png,jpg,gif,svg}',
          'src/favicon.ico'
        ]
      },
      fonts: {
        files: [
          'node_modules/font-awesome/fonts/*.{otf,eot,svg,ttf,woff,woff2}'
        ]
      }
    },

    dist: {
      dir: 'dist/',
      index: 'index.html',
      build: 'build.js',
      config: 'dist/config.js',
      views: 'dist/views/',
      img: 'dist/img/',
      css: 'dist/css/',
      fonts: 'dist/css/fonts/',
      templates: 'dist/views/'
    },

    dev: {
      dir: 'dev/',
      index: 'index.html',
      config: 'dev/config.js',
      views: 'dev/views/',
      img: 'dev/img/',
      css: 'dev/css/',
      fonts: 'dev/css/fonts/',
      templates: 'dev/views/'
    },

    clean: [
      'dist/views',
      'dist/main.js'
    ],

    doc: {
      dir: 'doc'
    },

    common: {
      dir: 'common'
    }
  },

  autoprefixer: [
    'last 5 Chrome versions',
    'last 5 Firefox versions',
    'last 2 Safari versions',
    'Explorer >= 10'
  ],

  bundle: {
    name: 'app'
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
      "es7.decorators",
      "es7.classProperties"
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