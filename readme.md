## Bipolar stream
> Helps detect change in a streaming fashion

### Setup
```sh
# Install from github
npm install thewhodidthis/bipolar-stream

# Try out example
node node_modules/bipolar-stream/example
```

### Usage
```js
const Filter = require('bipolar-stream');
const output = new Filter(100);

process.stdin.pipe(output).pipe(process.stdout);

output.on('data', function() {
    process.stdout.write('\n');
});

output.on('error', console.error);
```
