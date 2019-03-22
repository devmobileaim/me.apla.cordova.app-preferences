'use strict';

module.exports = function (context) {
      path = require('path'),
      pathParse = require ('./lib/path-parse');

  path.parse = path.parse || pathParse;

  return true;
};
