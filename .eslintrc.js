module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
		'plugin:vue/base',
		'plugin:vue/strongly-recommended'
    // '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
