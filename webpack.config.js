const path = require('path');

// to load toml, yamljs, and json5
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');


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

      /* toml, yamljs, and json5 loading */
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },

    ],
  },
};
