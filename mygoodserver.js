var http = require('http'),
  requestHandler = require('./requestHandler.js');

http.createServer(function (req, res) {
  requestHandler.handleRequest(req, res);
}).listen(80);
