'use strict';

define(function(require) {
  var React = require('react');
  var io = require('socketio');

  function ChatApp() {
    this.ChatAppView = React.createClass({
      getInitialState: function() {
        return {
          message: 'Connecting...'
        }
      },
      componentDidMount: function() {
        var socket = io.connect();
        var _this = this;
        socket.on('user:connected', function(data) {
          _this.setState({message: data.msg});
        })
      },
      render: function() {
        return (
          <div>
            <p>{this.state.message}</p>
          </div>
        );
      }
    });
  };

  ChatApp.prototype.init = function() {
    React.render(<this.ChatAppView />, document.body);
  };

  return ChatApp;
});
