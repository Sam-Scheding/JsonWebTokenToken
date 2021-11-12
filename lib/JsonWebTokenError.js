var JsonWebTokenTokenError = function (message, error) {
  Error.call(this, message);
  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'JsonWebTokenTokenError';
  this.message = message;
  if (error) this.inner = error;
};

JsonWebTokenTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenTokenError.prototype.constructor = JsonWebTokenTokenError;

module.exports = JsonWebTokenTokenError;
