'use strict'

const bender = require('./')

const random = (x = 100) => Math.floor(Math.random() * x) - (x * 0.5)
const filter = bender(100)

filter.pipe(process.stdout)
filter.on('error', console.error)

const repeat = setInterval((stream) => {
  const data = random().toString()

  console.log('----')
  console.log(data)
  stream.write(data)
  console.log()
}, 200, filter)

const cancel = (timer, stream) => {
  clearInterval(timer)

  console.log('----')
  stream.end()
}

console.log('Starting from 100, seed with random numbers, log deltas:')

setTimeout(cancel, 1000, repeat, filter)
