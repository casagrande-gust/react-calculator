module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 'off',
  },
  'globals': {
    'fetch': false
  }
}
