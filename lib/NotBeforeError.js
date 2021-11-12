var JsonWebTokenTokenError = require('./JsonWebTokenTokenError');

var NotBeforeError = function (message, date) {
  JsonWebTokenTokenError.call(this, message);
  this.name = 'NotBeforeError';
  this.date = date;
};

NotBeforeError.prototype = Object.create(JsonWebTokenTokenError.prototype);

NotBeforeError.prototype.constructor = NotBeforeError;

module.exports = NotBeforeError;