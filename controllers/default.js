'use strict';

exports.install = function() {
  F.route('/*', onView);
};

var onView = function() {
  this.view('app');
};
