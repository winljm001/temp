// const os = require('os')
// const isMacOs = os.platform() === 'darwin'
module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: isMacOs
  //   ? ['plugin:vue/strongly-recommended', '@vue/prettier']
  //   : ['plugin:vue/essential', '@vue/prettier'],
  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
