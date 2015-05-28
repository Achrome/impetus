'use strict';

var passport = require('passport');
var sessionStore = require('./session');

module.exports.init = function(app) {
  app.use(sessionStore);
  app.use(passport.initialize());
  app.use(passport.session());
};
