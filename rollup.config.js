import { string } from 'rollup-plugin-string';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/main.js',
  output: {
    file: './old-browser.js',
    format: 'cjs'
  },

  plugins: [
    string({
      include: './dist/index.html'
    }),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env']
    }),
    terser()
  ]
};
