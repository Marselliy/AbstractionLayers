var cacher = require('./cacher.js'),
    businessLogic = require('./businessLogic.js');
var rooter = {}
var rooting = {}
rooting['GET'] = {}
rooting['POST'] = {}
rooting['GET']['/'] = function(req, res) {
  var ip = req.connection.remoteAddress;
  res.writeHead(200);
  res.end('<h1>Welcome</h1>Your IP: ' + ip);
}
rooting['GET']['/person'] = function (req, res) {
  var data = businessLogic.readFile(req, res);
  if (data) {
    res.writeHead(200);
    res.end(data);
  } else {
    res.writeHead(500);
    res.end('Read error!');
  }
  return data;
}
rooting['POST']['/person'] = function(req, res) {
  businessLogic.writeFile(req, res);
}

rooter.root = function(req, res) {
  if (rooting[req.method] && rooting[req.method][req.url]) {
    cache = cacher.getData(req.url);
    if (req.method === 'GET') {
      if (!cache) {
        cache = rooting[req.method][req.url](req, res);
        cacher.setData(req.url, cache);
      }
      res.writeHead(200);
      res.end(cache);
    } else {
      rooting[req.method][req.url](req, res);
    }
  } else {
    res.writeHead(200);
    res.end('404 Page not found!');
  }
}
module.exports = rooter;
