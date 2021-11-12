module.exports = {
  verify: require('./verify'),
  sign: require('./sign'),
  JsonWebTokenTokenError: require('./lib/JsonWebTokenTokenError'),
  NotBeforeError: require('./lib/NotBeforeError'),
  TokenExpiredError: require('./lib/TokenExpiredError'),
};

Object.defineProperty(module.exports, 'decode', {
  enumerable: false,
  value: require('./decode'),
});
