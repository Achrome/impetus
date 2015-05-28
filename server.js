'use strict';

var app = require('express')();
var path = require('path');
var http = require('http');
var middleware = require('./app/middleware');
var ioService = require('./app/services/socket.io');

global.__approot = __dirname;

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'jade');
app.set('view options', { pretty: true });

var server = http.Server(app);
var io = require('socket.io')(server);

ioService.inject(io);
middleware.init(app);

server.listen(3456);
console.log('Server started in %s mode on port %d', app.get('env'), 3456);
