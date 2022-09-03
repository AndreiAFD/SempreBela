module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recomended',
    'plugin:import/errors',
    'plugin:imports/warnings',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'module-resolver'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.json'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'module-resolver/use-alias': 2,
        // 'import-named': 2,
        // 'import/namespace': 2,
        // 'import/default': 2,
        // 'import/export': 2,
        // 'import/no-unresolved': [2, {commonjs: true, amd: true}],
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
