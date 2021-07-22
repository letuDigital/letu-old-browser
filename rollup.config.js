import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/main.js',
  output: {
    file: '../old-browser.js',
    format: 'iife'
  },

  plugins: [
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.html']
    }),
    terser()
  ]
};
