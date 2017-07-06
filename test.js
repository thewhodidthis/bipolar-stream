const Transform = require('stream').Transform

const test = require('tape')
const bipolar = require('./')

test('does inherit', (t) => {
  const filter = bipolar()

  t.ok(filter instanceof Transform, 'is a transform stream')
  t.end()
})

test('will compute', (t) => {
  const source = 100
  const filter = bipolar(source)

  filter.write(source.toString())

  t.equals(parseInt(filter.read(), 10), source - source)
  t.end()
})
