'use strict';

var router = require('express').Router();
var index = require('./controllers/index');

router.get('/', index.home);
router.get('/chat', index.chat);

module.exports.init = function() {
  return router;
};
