const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Title here',
      minify: false,
      hash: true,
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new ExtractTextPlugin('app.css'),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: 'errors-only',
    openPage: '',
    open: true
  }
}

module.exports = webpackConfig;
