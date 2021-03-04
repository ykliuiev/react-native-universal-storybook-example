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

![Running native storybook](https://i.imgur.com/ODDf3zK.gif)

### Running web storybook
- just run storybook:web command

Note: you can run it all simultaneously

### Render React Native components on the web
React Native components can be rendered on the web thanks to [RNW](https://github.com/necolas/react-native-web).

Example app contains integration with Nextjs. In order to preview it run yarn next from example/ directory.
![Render RN button on the web](https://lh3.googleusercontent.com/fife/ABSRlIoetSu3wo2DuXT0d85FMH9XJtAaXspmL_MP22OAR1f466G_PvCNko2fxE8KJXcpK5Y8Uqd70Qmj8i2HIH9NtGHJJrtHWUn6D0-eNKXtrh7DAkgCVRS8Mu_lThd501QhNMRoJnfs-9zmZqPRCkw4OIDoCWMUXkEYKa3Je4TI-p2Mwx0Nqg9nLD8zFwK_yt5kNhBi3tFi82dJdIh0cJqtseq7CX0sPgvpkE_ybnFTtOHpYTVeLlwBFkVIg6FTqDBA6QmEVBMwuviprxoE5Zr9vFMb7G9zP_Lg_AEeqLaL32F4ZEukyrEfZTxlBcT9twRiB6EAW4uGZEpIZCZCIQb1BAKk-66ukzUNrkEO8rtVzD857syXs69egoik3ARc7KtVMtFZ8l4zO4jPL-yxKUWgTk_KoyQe_kvbd6-S0kiKEMJrP8L4fnxRh_LvsRW9feBV4IVwIc7ZDURdqU_y5MO06xSqQrq2QqVoe-bylAQ6Ysm2qpT_MN2vt0YhrfSBnlAWd_bluFkrIElKvnvih1mE2t6beog0q1CUSKOih2xtDfWo0709wDfWCaV3AKZCiAQn0fkiO2xuYa2P0N77pgcW0BymLuMTbQYq_bLyBbex3BtukHYUsYVJpBwe2hcNuyyJyLC1CszCeVKNfPMpgPlYY9AA5FJAtZbqZOt-VHqnJLblDugvxuw9YmkEIWGRLkKRYvO3ZEPM78szjGB4k5O2OUjHI0QQfmsCrkA=w1920-h976-ft)

### Optimizations
Babel presets can be optimized to resolve specific presets for react native/web. There is an option to use @expo/next-adapter

## License

MIT

## This project is currently work in progress
