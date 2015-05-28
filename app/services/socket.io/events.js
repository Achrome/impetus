'use strict';

module.exports.attachTo = function(io) {
  io.on('connection', function(socket) {
    socket.emit('user:connected', { msg: 'Welcome, user'});
  });
};
