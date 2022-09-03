module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg',
          '.png',
        ],
        alias: {
          '@screens': './src/ui/screens',
          '@components': './src/ui/components',
          '@assets': './src/ui/assets',
          '@infra': './src/infra',
        },
      },
    ],
  ],
};
