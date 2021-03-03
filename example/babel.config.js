const path = require('path');
const pak = require('../package.json');

module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
