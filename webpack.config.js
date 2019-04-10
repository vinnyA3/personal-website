const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const path = require('path');
const src_dir = path.resolve(__dirname, './client/src');
const dist_path = path.resolve(__dirname, './dist');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: { styles: src_dir + '/sass.js', main: src_dir + '/index.js' },
      output: {
        filename: '[name].js',
        path: dist_path,
        publicPath: '/',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: '!!raw-loader!build-utils/templates/index.ejs',
          filename: path.join(__dirname, './server/views/pages/index.ejs'),
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
          },
        }),
        new webpack.ProgressPlugin(),
      ],
      resolve: {
        extensions: ['.js', '.jsx', '.scss'],
      },
    },
    modeConfig(mode)
  );
};
