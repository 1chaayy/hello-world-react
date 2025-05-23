module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true, 
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react'
    ],
    rules: {
      // Примеры правил:
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };