
function logger(req, res, next) {
  console.log('Request at', req.originalUrl, res.statusCode);
  next();
}

module.exports = {logger};
