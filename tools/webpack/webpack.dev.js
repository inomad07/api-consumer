const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const commonWebpack = require('./webpack.common');

//-------------------------------------
// Webpack Development Configuration
//-------------------------------------

const devConfig = commonWebpack.config({
  /** Mode of this configuration */
  mode: 'development',

  /** Entry points */
  entry: [
    /** Patch to keep local component states during HMR */
    'react-hot-loader/patch',

    /** Main Entry File */
    path.join(cwd, commonWebpack.settings.mainEntryFile),
  ],

  /** Output files */
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },

  /** Plugins for development build */
  plugins: [
    /** Error Overlay Plugin */
    new ErrorOverlayPlugin(),

    /** Hot Module Replacement Plugin*/
    new webpack.HotModuleReplacementPlugin(),

    /** HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: commonWebpack.settings.htmlTemplateFile,
      inject: true,
    }),
  ],

  /** Stats to output in console */
  stats: 'errors-warnings',

  /** Dev Server */
  devServer: {
    stats: 'errors-warnings',
    hot: true,
    historyApiFallback: true
  },

  /** Optimization of development build */
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  /** Performance of development build */
  performance: {
    hints: false,
  },

  /** Aliases to resolve */
  aliases: {
    'react-dom': '@hot-loader/react-dom',
  },

  /** Source Maps Devtool */
  devtool: 'cheap-module-source-map',
});

//-------------------------------------
// Modules Exporting
//-------------------------------------

module.exports = devConfig;
