const Filter = require('../');

const output = new Filter(100);
const feed = setInterval((stream) => {
  const input = Math.floor(Math.random() * 100) - 50;

  console.log('\n----');
  console.log(input);

  stream.write(input.toString());
}, 200, output);

const stop = () => {
  console.log('\n----\n');

  output.end();
  clearInterval(feed);
};

console.log('Starting from 100, seed with random numbers and log deltas:');

setTimeout(stop, 1000);

output.pipe(process.stdout);
output.on('error', console.error);

