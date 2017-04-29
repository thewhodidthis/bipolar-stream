'use strict';

var stream = require('stream');

class BipolarStream extends stream.Transform {
  constructor(input) {
    super();

    this.memo = input;
  }

  _transform(chunk, encoding, callback) {
    const input = parseFloat(chunk);
    const delta = input - this.memo;

    this.memo = input;

    callback(null, delta.toString());
  }
}

module.exports = BipolarStream;
