const productionError =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'next',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: [
    '@typescript-eslint',
    '@emotion',
    '@next/next',
    'import',
    'prettier',
    'react-hooks',
    'unicorn',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': 'off',
    'consistent-return': 'off',
    curly: ['error', 'multi-line'],
    'default-case': 'off',
    'function-paren-newline': 'off',
    'guard-for-in': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          getInitialProps: true,
          params: true,
          props: true,
          Props: true,
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-confusing-arrow': 'off',
    'no-console': productionError,
    'no-debugger': productionError,
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { consistent: true }],
  },
  root: true,
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: '*.js',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: 'next-env.d.ts',
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      files: 'src/pages/**/*.tsx',
      rules: {
        'no-restricted-exports': 'off',
      },
    },
    {
      files: ['src/pages/_app.tsx', 'src/pages/_document.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
