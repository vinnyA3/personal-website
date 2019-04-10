const webpack = require('webpack');
const path = require('path');
const src_dir = path.resolve(__dirname, './client/src');
const public_path = path.resolve(__dirname, './dist');
const port = 8000;

module.exports = {
  entry: { styles: src_dir + '/sass.js', main: src_dir + '/index.js' },
  output: {
    filename: '[name].js',
    path: public_path,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devServer: {
    port,
    publicPath: public_path,
    writeToDisk: true,
  },
};
