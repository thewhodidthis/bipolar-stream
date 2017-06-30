const assert = require('assert');
const Transform = require('stream').Transform;
const Filter = require('../');

assert.ok(Filter.prototype instanceof Transform);

const input = 100;
const bipolar = new Filter(input);

bipolar.write(input.toString());
assert.equal(parseInt(bipolar.read(), 10), input - input);

