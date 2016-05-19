var logger = {}
logger.log = function(req, res) {
  var date = new Date().toISOString();
  console.log(date + ' ' + req.method + ' ' + req.url);
}
module.exports = logger;
