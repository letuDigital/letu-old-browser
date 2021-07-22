import { minifyHtml } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

const viteConfig = {
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },

  plugins: [
    viteSingleFile(),
    minifyHtml({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeEmptyElements: true
    })
  ]
};

export default viteConfig;
