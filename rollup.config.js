export default {
  entry: 'index.es',
  external: [
    'stream'
  ],
  targets: [
    {
      format: 'cjs',
      interop: false,
      dest: 'index.js',
    }
  ]
};
