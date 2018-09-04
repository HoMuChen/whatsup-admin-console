const merge = require('webpack-merge');
const paths = require('../paths');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  output: {
    path: paths.build,
    filename: '[name].[chunkhash].js'
  },
});
