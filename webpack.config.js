var path = require('path')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '.'),
    filename: './dist/standalone-anchoring.js',
    library: 'anchoring',
  },
};