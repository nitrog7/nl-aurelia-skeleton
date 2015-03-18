'use strict';

module.exports = {
  port: 9000,
  index: 'index.html',

  path: {
    src : {
      dir: './src',
      config: './config.js',
      js: './src/**/*.js',
      html: './src/**/*.html',
      img: './src/img/**/**.*',
      less: [
        './src/less/common.less',
        './src/less/core.less'
      ]
    },

    dist: {
      dir: './public',
      css: './public/css',
      img: './public/img'
    },

    doc: './doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/',

    common: {
      dir: './common'
    }
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

  babel: {
    filename: '',
    filenameRelative: '',
    blacklist: [],
    whitelist: [],
    modules: '',
    sourceMap: true,
    sourceMapName: '',
    sourceRoot: '',
    moduleRoot: '',
    moduleIds: false,
    experimental: false,
    format: {
      comments: false,
      compact: false,
      indent: {
        parentheses: true,
        adjustMultilineComment: true,
        style: "  ",
        base: 0
      }
    }
  },

  onError: function(err) {
    console.log(err);
  }
};