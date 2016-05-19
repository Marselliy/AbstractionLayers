var fs = require('fs');

var businessLogic = {}


businessLogic.readFile = function(req, res) {
  console.log('Read data from file');
  var data = fs.readFileSync('./person.json');
  var obj = JSON.parse(data);
  obj.birth = new Date(obj.birth);
  var difference = new Date() - obj.birth;
  obj.age = Math.floor(difference / 31536000000);
  delete obj.birth;
  var data = JSON.stringify(obj);
  return data;
}
businessLogic.writeFile = function (req, res) {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    var data = Buffer.concat(body).toString();
    var obj = JSON.parse(data);
    if (obj.name) obj.name = obj.name.trim();
    data = JSON.stringify(obj);
    cache[req.url] = data;
    fs.writeFile('./person.json', data, function(err) {
      if (!err) {
        res.writeHead(200);
        res.end('File saved');
      } else {
        res.writeHead(500);
        res.end('Write error');
      }
    });
  });
}
module.exports = businessLogic;
