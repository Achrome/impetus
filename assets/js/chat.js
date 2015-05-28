'use strict';

require.config({
  paths: {
    'react': '../vendor/react/react-with-addons',
    'JSXTransformer': '../vendor/react/JSXTransformer',
    'jsx': '../vendor/requirejs-react-jsx/jsx',
    'text': '../vendor/requirejs-text/text',
    'socketio': '/socket.io/socket.io'
  },

  shim: {
    'react': 'React',
    'JSXTransformer': 'JSXTransformer',
    'socketio': 'io'
  },

  jsx: {
    fileExtension: '.jsx',
    transformOptions: {
      harmony: true,
      stripTypes: false
    },
    usePragma: false
  }
});

require(['jsx!components/chat-app'], function(ChatApp) {
  var app = new ChatApp();
  app.init();
});
