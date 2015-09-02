'use strict';
/* global F */

var crypto = require('crypto');
var aws = require('aws-sdk');
var ua = require('universal-analytics');
var _ = require('lodash');
var Promise = require('bluebird');

F.nlUtils = {};

F.nlUtils.getId = function(id) {
  var params = {};

  if(_.isString(id) && id !== 'undefined') {
    if(id.indexOf('@') === 0) {
      params.isUsername = true;
      params.id = id.substr(1, id.length);
    } else {
      params.isUsername = false;
      params.id = id;
    }

    params.id = params.id ? this.parseID(params.id) : '';
  } else {
    params.id = '';
  }

  return params;
};

F.nlUtils.getParams = function(self) {
  var params = self.post || {};

  // Remove reserved properties
  var keys = Object.keys(params);

  for(var g=0; g<keys.length; g++) {
    var k = keys[g];
    if(k.indexOf('_') === 0) {
      delete params[k];
    }
  }

  // Get session data
  params.session = self.user || {};

  params.itemID = params.itemID ? this.parseID(params.itemID) : '';

  // Key
  params.key = params.key || self.req.cookie('key') || '';
  params.key = params.key ? this.parseID(params.key) : '';

  // Language
  params.lang = params.lang || self.req.cookie('lang') || 'en';
  params.lang = this.parseChar(params.key);

  params.username = params.username ? this.parseVarChar(params.username, 32) : '';
  params.itemType = params.itemType ? this.parseVarChar(params.itemType, 10) : '';

  //Type
  params.type = params.type ? this.parseVarChar(params.type, 10) : '';

  switch(params.type.toLowerCase()) {
    case 'facebook':
    case 'google':
      params.type = params.type.toLowerCase();
      break;
    default:
      params.type = '';
      break;
  }

  //Paging
  if(params.limit === undefined || params.limit < 1) {
    params.limit = 15;
  } else {
    params.limit = parseInt(params.limit);
  }

  if(params.offset === undefined || params.offset <= 0) {
    params.offset = 0;
  } else {
    params.offset = parseInt(params.offset);
  }

  //Sorting order
  params.order = false;
  var regex = new RegExp('^[a-z]*$');

  if(params.orderasc !== undefined) {
    if(regex.test(params.orderasc)) {
      params.order = {'direction': 'ASC', 'field': params.orderasc};
    }
  }
  if(params.orderdesc !== undefined) {
    if(regex.test(params.orderdesc)) {
      params.order = {'direction': 'DESC', 'field': params.orderasc};
    }
  }

  return params;
};

//Get the current date/timestamp
F.nlUtils.getTimestamp = function() {
  var date = new Date();
  return date.getTime();
};

function twoDigits(d) {
  if(0 <= d && d < 10) {
    return '0' + d.toString();
  }
  if(-10 < d && d < 0) {
    return '-0' + (-1 * d).toString();
  }

  return d;
}

F.nlUtils.cleanPost = function(data) {
  delete data.key;
  delete data.added;
  delete data.modified;

  return data;
};

F.nlUtils.cleanResults = function(data) {
  if(_.isArray(data)) {
    for(var g = 0; g < data.length; g++) {
      data[g] = removeProp(data[g]);
    }
  } else {
    data = removeProp(data);
  }

  return data;
};

function removeProp(results) {
  var obj = {},
    keys = Object.keys(results);

  for(var g=0; g<keys.length; g++) {
    var k = keys[g];

    // Remove OrientDB properties
    if(k.indexOf('@') === 0 || k.indexOf('_') === 0) {
      continue;
    }

    // Format RID
    if(k === 'rid' && _.isString(results[k])) {
      obj[k] = results[k].toString();
    } else {
      obj[k] = results[k];
    }

    // Remove password and salt
    if(k === 'password' || k === 'salt') {
      continue;
    }
  }

  return obj;
}

F.nlUtils.parseParams = function(params, remove, add) {
  var vals = [];
  var val, g;
  remove = remove ? remove : [];
  add = add ? add : [];

  var keys = Object.keys(params);

  for(g=0; g<keys.length; g++) {
    var k = keys[g];
    val = params[k];

    if(val !== undefined) {
      if(k.indexOf('_') !== 0 && k.indexOf('@') !== 0) {
        if(remove.indexOf(k) < 0) {
          vals.push(k + '=:' + k);
        }
      }
    }
  }

  for(g=0; g<add.length; g++) {
    vals.push(add[g]);
  }

  return vals.join(', ');
};

F.nlUtils.generateHash = function(key) {
  //Get Milliseconds
  var date = new Date();
  var time = date.getTime();

  //Create Hash
  date = time + key;
  var md5 = crypto.createHash('md5');
  md5.update(date, 'utf8');
  return md5.digest('hex');
};

F.nlUtils.createPassword = function(password, salt) {
  //Create encrypted password
  if(salt && password) {
    var secret = crypto.pbkdf2Sync(password, salt, 10000, 32);
    var md5 = crypto.createHash('md5');
    md5.update(secret, 'utf8');
    return md5.digest('hex');
  } else {
    return '';
  }
};

F.nlUtils.formatPhotoImage = function(uid, photoID) {
  var config = F.nlConfig;
  var img;

  if(photoID) {
    img = 'http://box.'+config.domain+'/users/' + uid + '/photos/images/' + photoID + '.jpg';
  } else {
    img = 'http://box.'+config.domain+'/defaults/photo.jpg';
  }

  return img;
};

F.nlUtils.formatPhotoThumb = function(uid, photoID) {
  var config = F.nlConfig;
  var img;

  if(photoID) {
    img = 'http://box.'+config.domain+'/users/' + uid + '/photos/thumbs/' + photoID + '.jpg';
  } else {
    img = 'http://box.'+config.domain+'/defaults/thumb.jpg';
  }

  return img;
};

F.nlUtils.errorMsg = function(code, msg, error) {
  var data = {};
  data.status = 0;
  data.code = code;
  data.message = msg;
  data.error = error;

  return data;
};

F.nlUtils.errorHandler = function(res, message) {
  var data = {};
  data.status = 0;
  data.code = 103;
  data.message = message || 'Request Error.';

  if(res) {
    res.statusCode = 500;
    res.json(data);
  }

  return false;
};

F.nlUtils.notAllowed = function(res) {
  var data = {};
  data.status = 0;
  data.code = 101;
  data.message = 'Method not allowed.';

  if(res) {
    res.statusCode = 405;
    res.json(data);
  }

  return false;
};

F.nlUtils.notFound = function(res) {
  var data = {};
  data.status = 0;
  data.code = 100;
  data.message = 'Method not found.';

  if(res) {
    res.statusCode = 404;
    res.json(data);
  }

  return false;
};

F.nlUtils.parseTags = function(list) {
  list = list.split(',');
  var k;
  var regex = new RegExp('^[a-z][a-z0-9]*$');

  for(k in list) {
    if(list.hasOwnProperty(k)) {
      list[k] = list[k].trim().toLowerCase();

      if(!regex.test(list[k])) {
        delete list[k];
      } else {
        list[k] = '"' + list[k] + '"';
      }
    }
  }

  return list;
};

F.nlUtils.stripHTML = function(html) {
  if(_.isString(html) && html !== 'undefined') {
    html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '');
  } else {
    html = '';
  }

  return html;
};

F.nlUtils.parseUrl = function(url) {
  if(_.isString(url) && url !== 'undefined') {
    url = encodeURI(url);
  } else {
    url = '';
  }

  return url;
};

F.nlUtils.parseID = function(id) {
  if(_.isString(id) && id !== 'undefined') {
    id.replace(/[^\w]/g, '').substr(0, 32);
  } else {
    id = '';
  }

  return id;
};

F.nlUtils.parseChar = function(str, max) {
  if(_.isString(str) && str !== 'undefined') {
    str.replace(/[^a-zA-Z]+/g, '').substr(0, max);
  } else {
    str = '';
  }

  return str;
};

F.nlUtils.parseVarChar = function(str, max) {
  if(_.isString(str) && str !== 'undefined') {
    str.replace(/[^\w]/g, '').substr(0, max);
  } else {
    str = '';
  }

  return str;
};

F.nlUtils.parseNum = function(num) {
  if(_.isString(num)) {
    num.replace(/[^0-9]+/g, 0);
  }

  return parseInt(num);
};

F.nlUtils.parseDateTime = function(val) {
  var date = new Date(val);
  var year = date.getFullYear();
  var month = twoDigits(date.getMonth() + 1);
  var day = twoDigits(date.getDate());
  var hour = twoDigits(date.getHours());
  var min = twoDigits(date.getMinutes());
  var sec = twoDigits(date.getSeconds());

  return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
};

F.nlUtils.parseDate = function(val) {
  var date = new Date(val);
  var year = date.getFullYear();
  var month = twoDigits(date.getMonth() + 1);
  var day = twoDigits(date.getDate());

  return year + '-' + month + '-' + day;
};

//Users
F.nlUtils.getPathUserMessages = function(userID, msgID) {
  return 'users/' + userID + '/messages/' + msgID;
};

F.nlUtils.getPathUserEvents = function(userID, eventID) {
  return 'users/' + userID + '/events/' + eventID;
};

F.nlUtils.getPathUserPhotos = function(userID, photoID) {
  return 'users/' + userID + '/photos/images/' + photoID + '.jpg';
};

F.nlUtils.getPathUserThumbs = function(userID, photoID) {
  return 'users/' + userID + '/photos/thumbs/' + photoID + '.jpg';
};

// Profile Photo
F.nlUtils.getPathProfilePhoto = function(userID, photoID) {
  return 'users/' + userID + '/profile/images/default.jpg';
};
F.nlUtils.getPathProfileThumb = function(userID, photoID) {
  return 'users/' + userID + '/profile/thumbs/default.jpg';
};

// Groups
F.nlUtils.getPathAppTagDesc = function(appID, tagName) {
  return 'apps/' + appID + '/tags/' + tagName + '/desc.html';
};

// Photos
F.nlUtils.parseBase64 = function(list) {
  var photos = [];

  //Convert from base64 to binary
  var photo;

  if(list && _.isArray(list)) {
    for(var g = 0; g < list.length; g++) {
      photo = parsePhoto(list[g]);
      photos.push(photo);
    }
  } else {
    photo = parsePhoto(list);
    photos.push(photo);
  }

  return photos;
};

function parsePhoto(item) {
  var photo = {};
  var base64 = item.base64 || '';
  var name = item.name || '';
  var size = item.size || '';
  var type = item.type || '';

  photo.file = new Buffer(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  photo.name = name;
  photo.size = size;
  photo.type = type;

  return photo;
}

//AWS S3
F.nlUtils.s3Get = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var s3 = new aws.S3();
  var data = {};

  if(!params.Bucket) {
    params.Bucket = config.aws.bucket;
  }

  s3.getObject(params, function(error, results) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = results;
    }

    return self.emit('s3_get_complete', data);
  });
};

F.nlUtils.s3Put = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var s3 = new aws.S3();
  var data = {};

  if(!params.Bucket) {
    params.Bucket = config.aws.bucket;
  }

  if(!params.StorageClass) {
    params.StorageClass = 'REDUCED_REDUNDANCY';
  }

  s3.putObject(params, function(error, results) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = results;
    }

    return self.emit('s3_put_complete', data);
  });
};

F.nlUtils.s3Del = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var s3 = new aws.S3();
  var data = {};

  if(!params.Bucket) {
    params.Bucket = config.aws.bucket;
  }

  s3.deleteObject(params, function(error, results) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = results;
    }

    return self.emit('s3_del_complete', data);
  });
};

F.nlUtils.s3DelList = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var s3 = new aws.S3();
  var data = {};

  if(!params.Bucket) {
    params.Bucket = config.aws.bucket;
  }

  s3.deleteObjects(params, function(error, results) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = results;
    }

    return self.emit('s3_del_complete', data);
  });
};

//AWS DynamoDB
F.nlUtils.dynamoGet = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var dynamodb = new aws.DynamoDB();
  var data = {};
  params.ConsistentRead = false;

  dynamodb.getItem(params, function(error, r) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = r;
    }

    return self.emit('dynamodb_get_complete', data);
  });
};

F.nlUtils.dynamoGetList = function(self, params, index) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var dynamodb = new aws.DynamoDB();
  var data = {};

  if(index) {
    params.ExclusiveStartKey = index;
  }
  if(!params.ConsistentRead) {
    params.ConsistentRead = false;
  }

  dynamodb.query(params, function(error, r) {
    if(error) {
      data.status = 0;
      data.error = error;
      return self.emit('dynamodb_get_complete', data);
    } else {
      //Save list of items
      list = list.concat(parseDynamo(r));

      if(r.LastEvaluatedKey) {
        //Save last index before looping
        index = r.LastEvaluatedKey;
        F.nlUtils.dynamoGetList(self, params, index);
      } else {
        //Query complete, return final list
        data.status = 1;
        data.results = list;
        return self.emit('dynamodb_get_complete', data);
      }
    }

  });
};

F.nlUtils.dynamoPut = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var dynamodb = new aws.DynamoDB();
  var data = {};
  params.ConsistentRead = false;

  dynamodb.getItem(params, function(error, r) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = r;
    }

    return self.emit('dynamodb_put_complete', data);
  });
};

F.nlUtils.dynamoPutList = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var dynamodb = new aws.DynamoDB();
  var data = {};
  //params.ConsistentRead	= false;

  dynamodb.batchWriteItem(params, function(error, r) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = r;
    }

    return self.emit('dynamodb_put_complete', data);
  });
};

F.nlUtils.dynamoDel = function(self, params) {
  var config = F.nlConfig;
  aws.config.update(config.aws);
  var dynamodb = new aws.DynamoDB();
  var data = {};
  params.ConsistentRead = true;

  dynamodb.getItem(params, function(error, r) {
    if(error) {
      data.status = 0;
      data.error = error;
    } else {
      data.status = 1;
      data.results = r;
    }

    return self.emit('dynamodb_get_complete', data);
  });
};

var list = [];

function parseDynamo(results) {
  var items = results.Items;
  var data = [];
  var g, k, obj, tmp;

  for(g = 0; g < items.length; g++) {
    tmp = items[g];
    obj = {};

    for(k in tmp) {
      if(tmp.hasOwnProperty(k)) {
        if(tmp[k].S) {
          obj[k] = tmp[k].S.toString();
        }
        else if(tmp[k].N) {
          obj[k] = parseFloat(tmp[k].N);
        } else {
          obj[k] = tmp[k].B;
        }
      }
    }

    data.push(obj);
  }

  return data;
}

//Analytics
F.nlUtils.analytics = ua(F.nlConfig.analytics.account);