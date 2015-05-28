'use strict';

var sessionMiddleware = require('../../middleware/session');
var ioEvents = require('./events');

module.exports.inject = function(io) {
  io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
  });
  ioEvents.attachTo(io);
};
