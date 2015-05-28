'use strict';

var morgan = require('morgan');
var uuid = require('node-uuid');
var chalk = require('chalk');

module.exports.init = function(app) {
  app.use(function(req, res, next) {
    req.id = uuid.v4();
    next();
  });
  morgan.token('id', function(req) {
    return req.id;
  });
  app.use(morgan(chalk.yellow(':id') +
    ' :method ' +
    ':url ' +
    chalk.green(':status ') +
    ':response-time' + ' ms'));
};
