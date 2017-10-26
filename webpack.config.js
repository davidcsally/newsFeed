const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill',
    './src/index.js'],
  output: {
    filename: './build/bundle.js',
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
