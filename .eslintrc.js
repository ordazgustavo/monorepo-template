module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:jest/all',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/strict',
    'xo-space',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/**/tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    'arrow-body-style': 'off',

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-literals': 'warn',
    'react/jsx-props-no-spreading': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/no-empty-interface': 'off',
  },
};
