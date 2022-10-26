module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@ui': './src/ui',
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
  ],
};
