// eslint-disable-next-line import/no-extraneous-dependencies
const { fixBabelImports } = require('customize-cra');

module.exports = {
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    // eslint-disable-next-line no-param-reassign
    webpackConfig = fixBabelImports(
      'import', { libraryName: 'antd', style: 'css' },
    )(webpackConfig);

    return webpackConfig;
  },
};
