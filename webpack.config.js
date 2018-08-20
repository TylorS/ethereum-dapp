const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'docs')
const entry = path.join(srcPath, 'bootstrap.tsx')

const HtmlOptions = {
  filename: `index.html`,
  inject: `body`,
  template: path.join(srcPath, 'index.ejs'),
}

const config = {
  entry,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin(HtmlOptions),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: distPath,
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || 8081,
    watchContentBase: true,
    disableHostCheck: true,
    hot: true,
  },
  resolve: {
    mainFields: ['module', 'jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
    publicPath: '/ethereum-dapp',
  },
}

module.exports = config
