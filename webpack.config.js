var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '.'),
    filename: './dist/StandaloneAnchoring.js',
    library: 'anchoring',
  },
};