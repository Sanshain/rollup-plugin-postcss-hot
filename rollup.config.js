//@ts-check

const { default: resolve } = require('@rollup/plugin-node-resolve');
const { default: commonjs } = require('@rollup/plugin-commonjs');
const { default: json } = require('@rollup/plugin-json');


let config = {
  input: './src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css']
    }),
    commonjs(),
    json()
  ]
}


exports.default = config;
