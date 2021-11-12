var JsonWebTokenTokenError = require('./JsonWebTokenTokenError');

var TokenExpiredError = function (message, expiredAt) {
  JsonWebTokenTokenError.call(this, message);
  this.name = 'TokenExpiredError';
  this.expiredAt = expiredAt;
};

TokenExpiredError.prototype = Object.create(JsonWebTokenTokenError.prototype);

TokenExpiredError.prototype.constructor = TokenExpiredError;

module.exports = TokenExpiredError;