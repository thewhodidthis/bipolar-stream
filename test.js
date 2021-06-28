import { Transform } from 'stream'
import { assert, report } from 'tapeless'
import bender from './main.js'

const { ok, equal } = assert

const offset = 100
const filter = bender(offset)

filter.write(offset.toString())

ok
  .describe('is a transform stream', 'does inherit')
  .test(filter instanceof Transform)

equal
  .describe('math looks accurate', 'will compute')
  .test(parseInt(filter.read(), 10), offset - offset)

report()
