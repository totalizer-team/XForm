module.exports = {
  // extends: require.resolve('@umijs/lint/dist/config/eslint'),
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:import/react'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-danger': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-vars': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 0,
    'no-plusplus': 0,
  },
};
