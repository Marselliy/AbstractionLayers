cookies = {}

var cookieParser = {}
cookieParser.parse = function(req) {
  var cookie = req.headers.cookie,
      cookies = {};
  if (cookie) cookie.split(';').forEach(function(item) {
    var parts = item.split('=');
    cookies[(parts[0]).trim()] = (parts[1] || '').trim();
  });
}
cookieParser.cookies = cookies;

module.exports = cookieParser;
