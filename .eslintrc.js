module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import-helpers', 'prettier'],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    // typescript-eslint
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',

    'no-empty-function': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-mixed-spaces-and-tabs': 'off',

    // eslint-plugin-react jsx-specific
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    //eslint-plugin-react
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/self-closing-comp': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  }
};
