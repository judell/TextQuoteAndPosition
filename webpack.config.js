var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '.'),
    filename: './dist/StandaloneAnchoring.js',
    library: 'anchoring',
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
       use: ['source-map-loader'],
      }
    ]
  }
};