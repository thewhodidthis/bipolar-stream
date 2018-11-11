'use strict'

const { Transform } = require('stream')
const { ok, equal } = require('tapeless')
const bender = require('./')

const offset = 100
const filter = bender(offset)

filter.write(offset.toString())

ok
  .test(filter instanceof Transform)
  .describe('is a transform stream', 'does inherit')

equal
  .describe('math looks accurate', 'will compute')
  .test(parseInt(filter.read(), 10), offset - offset)
