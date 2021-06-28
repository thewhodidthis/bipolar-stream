## about

Helps detect change in a streaming fashion.

## setup

Download from the _npm_ registry:

```sh
# Add to package.json
npm install @thewhodidthis/bipolar-stream

# Try out the enclosed example
node node_modules/bipolar-stream/example
```

## usage

Give it a starting value then use like any other stream:

```js
import bender from "bipolar-stream"
import process from "process"

const output = bender(100)

process.stdin.pipe(output).pipe(process.stdout)

output.on("data", () => {
  process.stdout.write("\n")
})

output.on("error", console.error)
```
