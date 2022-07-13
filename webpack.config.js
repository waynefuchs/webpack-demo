const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",

  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

};
