'use strict';

var express = require('express');
var path = require('path');

module.exports.init = function(app) {
  var __approot = global.__approot;
  app.use('/build', express.static(path.join(__approot, 'build')));
  app.use('/assets', express.static(path.join(__approot, 'assets')));
};
