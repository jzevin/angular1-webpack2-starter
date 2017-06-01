const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

options = {
  entry: {
    main: './src/js/index.js',
    vendor: './src/js/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bndl.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     fallbackLoader: 'style-loader',
      //     loader: ['css-loader','sass-loader'],
      //     publicPath: '../' //needed for prod paths to be correct for extracted files and their contained paths
      //   })
      // }
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {pretty: !isProd}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: 'minimal'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack 2 - Starter! Now with Pug',
      hash: true,
      chunks: ['vendor','main'],
      template: './src/index.pug'
    }),
    // new ExtractTextWebpackPlugin({
    //   filename: 'css/main.css',
    //   disable: !isProd
    // })
  ]
}

module.exports = options;
