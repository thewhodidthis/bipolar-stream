'use strict'

const { Transform } = require('stream')
const { ok, equal } = require('tapeless')
const bender = require('./')

const offset = 100
const filter = bender(offset)

filter.write(offset.toString())

ok(filter instanceof Transform, 'is a transform stream', 'does inherit')
equal(parseInt(filter.read(), 10), offset - offset, 'math is accurate', 'will compute')
