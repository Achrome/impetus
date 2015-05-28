'use strict';

var compressor = require('compression');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = require('../router');
var morgan = require('./morgan');
var passport = require('./passport');
var assets = require('./assets');

module.exports.init = function(app) {
  app.use(compressor());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  passport.init(app);
  morgan.init(app);
  assets.init(app);
  app.use('/', router.init());
};
