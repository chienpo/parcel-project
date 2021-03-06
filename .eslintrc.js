module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  plugins: ['react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 'off', // optional props without defaults
    'react/forbid-prop-types': 'warn',
    'quote-props': ['warn', 'as-needed', { numbers: true }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
