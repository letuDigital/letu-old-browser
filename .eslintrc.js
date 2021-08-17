module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    amd: true,
    es6: true
  },
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    curly: ['error', 'all'],
    'import/no-webpack-loader-syntax': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],
    'max-len': ['error', { code: 120, ignoreUrls: true, ignoreComments: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-mixed-operators': 'error',
    'no-unexpected-multiline': 'error',
    'no-var': 'error'
  }
};
