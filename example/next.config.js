const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('tsx|ts')) {
        rule.include = [
          ...rule.include,
          require('path').join(__dirname, '../src/components'),
        ];
      }
    });

    return config;
  },
});
