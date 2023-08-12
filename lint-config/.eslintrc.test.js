module.exports = {
  env: {
    mocha: true, // Enable Mocha environment
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    // Additional rules or overrides for tests can be added here
    'node/no-unpublished-require': 'off',
  },
};
