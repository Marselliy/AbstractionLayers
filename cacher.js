cache = []

var cacher = {}

cacher.getData = function(url) {
  console.log('Get data from cache: ' + url + " " + cacher[url]);
  return cacher[url];
}
cacher.setData = function(url, data) {
  console.log('Send data to cache: ' + url + " " + data);
  cacher[url] = data;
}

module.exports = cacher;
