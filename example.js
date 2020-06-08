'use strict'

const bender = require('./')

const random = (mid = 100) => Math.floor(Math.random() * mid) - (mid * 0.5)
const filter = bender(100)

filter.pipe(process.stdout)
filter.on('error', console.error)

const repeat = setInterval((stream) => {
  const data = random().toString()

  // Insert line break
  console.log()
  console.log(data)

  stream.write(data)

  console.log()
}, 200, filter)

const cancel = (timer, stream) => {
  clearInterval(timer)

  stream.end()

  console.log()
}

console.log('Starting from 100, seed with random numbers, log deltas:')

setTimeout(cancel, 1000, repeat, filter)
