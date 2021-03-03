# react-native-universal-storybook

react-native-universal-storybook

## Installation

```sh
npm install react-native-universal-storybook
```

## Usage

This is an example how you can use storybook with react native and react native web to render components for ios/android/web. You can check the example/ folder to run ios/android project or see how components are rendered on the web with the help of next.js.

### Running native storybook
You can run storybook directly on device and control view on multiple devices with storybook server.
- Run yarn storybook:server from root directory
- cd example/ start bundler with yarn start, run react-native run-ios

### Running web storybook
- just run storybook:web command

Note: you can run it all simultaneously

### Render React Native components on the web
React Native components can be rendered on the web thanks to [RNW](https://github.com/necolas/react-native-web).

Example app contains integration with Nextjs. In order to preview it run yarn next from example/ directory.

### Optimizations
Babel presets can be optimized to resolve specific presets for react native/web. There is an option to use @expo/next-adapter

## License

MIT

## This project is currently work in progress
