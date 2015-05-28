'use strict';

module.exports.home = function(req, res) {
  res.render('index');
};

module.exports.chat = function(req, res) {
  res.render('chat');
};
