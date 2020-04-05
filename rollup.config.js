export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'cjs',
      file: 'build/respiration.js',
      indent: '\t',
    },
  ],
  watch: {
    inclue: './dist/**/*.js',
  },
};
