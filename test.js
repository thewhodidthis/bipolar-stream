'use strict'

const { Transform } = require('stream')
const { ok, equal } = require('tapeless')
const bipolar = require('./')

const source = 100
const filter = bipolar(source)

filter.write(source.toString())

ok(filter instanceof Transform, 'is a transform stream', 'does inherit')
equal(parseInt(filter.read(), 10), source - source, 'math is accurate', 'will compute')
