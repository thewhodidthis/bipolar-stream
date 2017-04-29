export default {
  entry: 'index.es',
  external: [
    'stream'
  ],
  targets: [
    {
      format: 'cjs',
      dest: 'index.js',
      interop: false
    }
  ]
};
