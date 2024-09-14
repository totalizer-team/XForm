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
  ignorePatterns: [
    'jest.config.ts',
    'docs/*/examples/*',
  ],
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
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
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
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
    'no-cond-assign': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-else-return': 0,
  },
};
