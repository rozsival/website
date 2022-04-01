const productionError =
  process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2022,
    jsxPragma: undefined,
    project: 'tsconfig.json',
    sourceType: 'module',
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
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
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
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
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
    'no-confusing-arrow': 'off',
    'no-console': productionError,
    'no-debugger': productionError,
    'no-magic-numbers': ['error', { ignore: [0, 1], ignoreArrayIndexes: true }],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.mdx', '.tsx'] }],
    'react/jsx-sort-props': [
      'error',
      {
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          getInitialProps: true,
          params: true,
          props: true,
          Props: true,
          ref: true,
          Ref: true,
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }],
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
      files: 'src/blog/**/*.mdx',
      extends: ['plugin:mdx/recommended'],
      plugins: ['mdx'],
      rules: {
        'no-undef': 'off',
        'react/jsx-no-undef': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: 'src/pages/**/*.ts',
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
