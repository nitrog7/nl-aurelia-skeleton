import hello from './hello.js';

module.exports.load = function() {
  return [].concat(
    hello
  );
};