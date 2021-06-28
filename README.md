## about

Helps detect change in a streaming fashion.

## setup

Fetch the latest version from the _npm_ registry:

```sh
# Add to "dependencies"
npm install @thewhodidthis/bipolar-stream

# Try out the enclosed example
node node_modules/bipolar-stream/example
```

## usage

Give it a starting value then use like any other stream:

```js
const output = require('bipolar-stream')(100)

process.stdin.pipe(output).pipe(process.stdout)

output.on('data', () => {
  process.stdout.write('\n')
})

output.on('error', console.error)
```
