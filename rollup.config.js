// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Entry file
  output: {
    file: 'dist/bundle.js', // Output file
    format: 'iife', // Immediately Invoked Function Expression
    name: 'unique', // Global variable name (optional)
  },
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS to ES6
    babel({
      babelHelpers: 'bundled', // Required for @rollup/plugin-babel
      exclude: 'node_modules/**', // Transpile only your source code
      babelrc: false, // Ignore .babelrc file
    }),
  ],
};