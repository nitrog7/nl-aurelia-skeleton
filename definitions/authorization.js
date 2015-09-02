'use strict';
/* global F */

F.onAuthorization = function(req, res, flags, next) {
  var nlUtils = F.nlUtils;
  var headers = req.headers || {};
  var key = headers.key ? nlUtils.parseID(headers.key) : '';

  if(key) {
    next(true);
  } else {
    next(false);
  }

  return;
};