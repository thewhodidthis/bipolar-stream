const bipolar = require('./')

const filter = bipolar(100)

const repeat = setInterval((stream) => {
  const data = Math.floor(Math.random() * 100) - 50

  console.log('\n----')
  console.log(data)

  stream.write(data.toString())
}, 200, filter)

const cancel = () => {
  console.log('\n----\n')

  filter.end()
  clearInterval(repeat)
}

console.log('Starting from 100, seed with random numbers, log deltas:')

setTimeout(cancel, 1000)

filter.pipe(process.stdout)
filter.on('error', console.error)
