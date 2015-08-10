'use strict';

import gulp from 'gulp';
import config from '../config';
import util from 'gulp-util';
import inject from 'gulp-inject';
import httpProxy from 'http-proxy';
import browserSync from 'browser-sync';
import history  from 'connect-history-api-fallback';
import runSequence from 'run-sequence';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;
const TEST_OPTIMIZE = 'test-optimize';

//=============================================
//         COMMAND LINE ERROR HANDLING
//=============================================

let ENV = !!argv.env ? argv.env : 'DEV';
let OPTIMIZE = !!argv.optimize ? argv.optimize : 'false';
let OPEN_BROWSER = !!argv.open ? argv.open : 'true';

if(!OPEN_BROWSER.match(new RegExp(/true|false|TRUE|FALSE/))) {
  LOG(COLORS.red(`Error: The argument 'open' has incorrect value ${OPEN_BROWSER}! Usage: --open=(true|false)`));
  process.exit(1);
} else {
  OPEN_BROWSER = OPEN_BROWSER === 'true' || OPEN_BROWSER === 'TRUE';
}

if(!OPTIMIZE.match(new RegExp(/true|false|TRUE|FALSE/))) {
  LOG(COLORS.red(`Error: The argument 'optimize' has incorrect value ${OPEN_BROWSER}! Usage: --optimize=(true|false)`));
  process.exit(1);
} else if(OPTIMIZE === 'true' || OPTIMIZE === 'TRUE') {
  ENV = TEST_OPTIMIZE;
}

if(!ENV.match(new RegExp(/prod|dev|test|DEV|TEST|PROD/))) {
  LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(DEV|TEST|PROD)`));
  process.exit(1);
}

//=============================================
//           PROXY CONFIGURATION
//=============================================

// This configuration allow you to configure browser sync to proxy your backend
const proxyTarget = config.api; // The location of your backend API
const proxyApiPrefix = 'api'; // The element in the URL which differentiate between API request and static file request

let proxy = httpProxy.createProxyServer({
  target: proxyTarget
});

function proxyMiddleware(req, res, next) {
  if (req.url.includes(proxyApiPrefix)) {
    proxy.web(req, res);
  } else {
    next();
  }
}

function startBrowserSync(files, isDev, done) {
  files = files === undefined ? 'default' : files;

  browserSync.instance = browserSync.init(files, {
    open: false,
    port: isDev ? config.port.dev : config.port.release,
    ghostMode : false,
    server: {
      startPath: '/',
      excludedFileTypes: ['woff2'],
      baseDir: config.path.dist.dir,
      index: config.path.dist.index,
      middleware: [history(), function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }]
    }
  }, done);
}


//=============================================
//                 TASKS
//=============================================

/**
 * The 'config' task is to configure environment by injecting
 * global env variable into the `index.html`.
 *
 * @return {Stream}
 */
gulp.task('config', () => {
  const optimize = OPTIMIZE === 'true';
  const env = ENV === TEST_OPTIMIZE ? 'test' : ENV;
  return gulp.src(config.path.src.html.index)
    .pipe(inject(gulp.src('.'), {
      starttag: '<!-- inject:env -->',
      transform: () => `mock: ${ENV.toLowerCase() === 'test' || OPTIMIZE === 'true'}, optimize: ${optimize}, environment: '${env.toLowerCase()}'`
    }))
    .pipe(gulp.dest(config.path.src.dir));
});

/**
 * The 'startBrowserSync' task start BrowserSync and open the browser.
 */
gulp.task('server', (done) => {
  let startBrowserSyncTask;
  let files = [];

  switch(ENV) {
    case 'DEV':
    case 'dev':
    case 'TEST':
    case 'test':
      files.concat(config.path.src.sass.files, config.path.src.img.files);
      startBrowserSyncTask = startBrowserSync(files, true, done);
      break;
    case 'PROD':
    case 'prod':
    case TEST_OPTIMIZE:
      startBrowserSyncTask = startBrowserSync([config.path.dist.dir], false, done);
      break;
  }

  return startBrowserSyncTask;
});