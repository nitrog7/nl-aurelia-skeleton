import path from 'path';

let config = {
  port: {
    dev: 9000,
    release: 9000
  },

  filenames: {
    index: 'index.html',
    config: 'config.js'
  },

  directories: {
    src: 'src',
    dist: 'dist',
    common: 'common',
    test: 'test',
    doc: 'doc'
  }
};

// Utilities
const basePath = path.resolve(__dirname, '../');
config.absolute = (...args) => path.resolve.apply(path.resolve, [basePath, ...args]);
config.relative = (...args) => [...args].join('/');

// Paths
config.path = {
  src: {
    html: {
      files: [
        config.relative(config.directories.src, '**/*.html')
      ]
    },
    js: config.relative(config.directories.src, '**/*.js'),
    css: config.relative(config.directories.src, 'css'),
    scss: {
      main: config.relative(config.directories.src, 'scss/core.scss'),
      files: [
        config.relative(config.directories.src, '**/*.scss')
      ],
      includes: []
    },
    img: {
      files: [
        config.relative(config.directories.src, 'img/**/*.{png,jpg,gif,svg}'),
        config.relative(config.directories.src, 'views/**/*.{png,jpg,gif,svg}'),
        config.relative(config.directories.src, 'favicon.ico')
      ]
    },
    fonts: {
      dir: config.relative(config.directories.src, 'fonts/'),
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
    css: config.relative(config.directories.dist, 'css/'),
    fonts: config.relative(config.directories.dist, 'fonts/'),
    clean: [
      'aurelia.js'
    ]
  },

  common: {
    files: [
      config.relative(config.directories.common, 'system.js'),
      'aurelia.js'
    ]
  },

  test: {
    e2e: './test/e2e/**/*.js',
    unit: './test/unit/**/*.js'
  }
};

// Styling
config.scss = {
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
};

config.autoprefixer = [
  'last 5 Chrome versions',
  'last 5 Firefox versions',
  'last 2 Safari versions',
  'Explorer >= 10'
];

// Bundling
config.bundle = {
  force: true,
  packagePath: '.',
  bundles: {
    'aurelia': {
      includes: [
        'core-js',
        'text',
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
};

// Testing
config.karma = {
  configFile: __dirname + '/../karma.conf.js'
};

// HTML
config.htmlhint = {
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
};

config.htmlmin = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true
};

// Javascript
config.eslint = {
  useEslintrc: true
};

config.babel = {
  moduleIds: false,
  comments: false,
  compact: false,
  stage: 0,
  sourceMap: 'inline',
  optional: [
    'es7.decorators',
    'es7.classProperties'
  ]
};

// Documentation
config.yuidoc = {
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
        }
        ,
        linkNatives: true,
        attributesEmit: true,
        outdir: "docs/api"
      }
    }
  }
  ,
  render: {}
};

export default config;