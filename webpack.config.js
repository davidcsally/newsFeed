const path = require('path');
/* eslint-disable */ // shhh eslint, we are using webpack
const webpack = require('webpack');
/* eslint-enable */

module.exports = {
  entry: ['babel-polyfill',
    './src/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
