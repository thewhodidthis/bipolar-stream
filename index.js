'use strict'

const { Transform } = require('stream')

const bipolar = (prev) => {
  let memo = prev

  return new Transform({
    transform(chunk, encoding, callback) {
      const next = parseFloat(chunk)
      const diff = next - memo

      memo = next

      callback(null, diff.toString())
    }
  })
}

module.exports = bipolar
