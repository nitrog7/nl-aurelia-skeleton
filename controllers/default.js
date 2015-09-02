'use strict';

exports.install = function() {
  F.route('/', onView);
};

var onView = function() {
  var self = this;
  self.view('app');
  self.layout('layout');
};
