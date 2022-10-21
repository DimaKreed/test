module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-plusplus': 0,
    'max-len': ['error', { code: 150 }],
    'no-use-before-define': 1,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 1,
    'no-underscore-dangle':1
  },
};
