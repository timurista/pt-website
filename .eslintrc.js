module.exports = {
  extends: [
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: [
    'airbnb',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-tag-spacing': [0],
    'react/jsx-space-before-closing': [0],
    'react/prefer-stateless-function': [0],
    'jsx-quotes': [0],
    'no-param-reassign': [0],
    'react/require-default-props': [0],
    'react/forbid-prop-types': [0],
    'react/no-unused-prop-types': [1],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', {
      aspects: ['invalidHref']
    }],
    'prettier/prettier': ['error', {
      'trailingComma': 'all',
      'singleQuote': true
    }],
  },
  globals: {
    require: true,
    window: true,
    it: true,
    describe: true,
    beforeAll: true,
    beforeEach: true,
    afterAll: true,
    afterEach: true,
    jest: true,
    expect: true
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};