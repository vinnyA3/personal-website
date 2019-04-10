const path = require('path');
const dist_path = path.resolve(__dirname, './dist');
const port = 8000;

module.exports = () => ({
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
  devServer: {
    port,
    publicPath: dist_path,
    writeToDisk: true,
  },
});
