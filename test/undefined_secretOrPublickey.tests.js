var jwt = require('../index');
var JsonWebTokenTokenError = require('../lib/JsonWebTokenTokenError');
var expect = require('chai').expect;

var TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.t-IDcSemACt8x4iTMCda8Yhe3iZaWbvV5XKSTbuAn0M';

describe('verifying without specified secret or public key', function () {
  it('should not verify null', function () {
    expect(function () {
      jwt.verify(TOKEN, null);
    }).to.throw(JsonWebTokenTokenError, /secret or public key must be provided/);
  });

  it('should not verify undefined', function () {
    expect(function () {
      jwt.verify(TOKEN);
    }).to.throw(JsonWebTokenTokenError, /secret or public key must be provided/);
  });
});