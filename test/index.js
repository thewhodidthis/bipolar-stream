const test = require('tape');
const Transform = require('stream').Transform;
const Filter = require('../');

test('does inherit', (t) => {
  t.ok(Filter.prototype instanceof Transform, 'is a transform stream');
  t.end();
});

test('will compute', (t) => {
  const input = 100;
  const bipolar = new Filter(input);

  bipolar.write(input.toString());

  t.equals(parseInt(bipolar.read()), input - input);
  t.end();
});

