const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: { 
    rules: [
      /* chain: style-loader and css-loader */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      /* Asset Modules: Image Processing */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },

      /* Asset Modules: Fonts */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      /* Load Data (csv & xml) Json is built-in */
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.(xml)$/i,
        use: ['xml-loader'],
      },

    ],
  },
};
