'use strict'

const stream = require('stream')

const bipolar = (prev) => {
  let memo = prev

  return new stream.Transform({
    transform(chunk, encoding, callback) {
      const next = parseFloat(chunk)
      const diff = next - memo

      memo = next

      callback(null, diff.toString())
    }
  })
}

module.exports = bipolar
