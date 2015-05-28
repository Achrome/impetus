'use strict';

var session = require('express-session');
var RedisStore = require('connect-redis')(session);

module.exports = session({
  store: new RedisStore({
          host: '127.0.0.1',
          port: '6379'
        }),
  secret: 'a careening void',
  resave: false,
  saveUninitialized: false
});
