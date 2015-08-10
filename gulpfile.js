// Automatically compile gulp tasks files on the fly from ES6 to ES5
require('babel/register');

// All gulp tasks are located in the ./gulp/tasks directory
// Gulp configuration is ./gulp/config.js
require('require-dir')('gulp/tasks');
