var http = require('http'),
    fs = require('fs'),
    logger = require('./logger.js'),
    rooter = require('./rooter.js'),
    cookieParser = require('./cookieParser.js');

var requestHandler = {}


requestHandler.handleRequest = function(req, res) {
  cookieParser.parse(req);
  logger.log(req, res);
  rooter.root(req, res);
}

module.exports = requestHandler;
