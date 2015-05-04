'use strict';

module.exports = {
  port: {
    dev: 9000,
    release: 9000
  },
  index: 'index.html',

  path: {
    src : {
      dir: './src',
      config: './config.js',
      js: ['./src/**/*.js', './src/app.js'],
      html: ['./src/**/*.html', './src/*.html'],
      img: './src/img/**/**.*',
      fonts: './src/fonts/**/**.*',
      less: [
        './src/less/common.less',
        './src/less/core.less'
      ],
      lessOutput: [
        './src/less/common.less',
        './src/less/core.less'
      ]
    },

    dist: {
      dir: './public',
      css: './public/css',
      cssFiles: './public/css/**/**.*',
      img: './public/img',
      fonts: './public/fonts'
    },

    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',

    common: {
      dir: './common'
    }
  },

  autoprefixer: [
    'last 5 Chrome versions',
    'last 5 Firefox versions',
    'last 2 Safari versions',
    'Explorer >= 11'
  ],

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

  babel: {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: false,
    stage:2,
    optional: [
      "es7.decorators",
      "es7.classProperties"
    ]
  },

  onError: function(err) {
    console.log(err);
  }
};