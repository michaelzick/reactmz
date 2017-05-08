'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    vendors: [
      './public/js/vendor/jquery.easing-1.3.js',
      './public/js/vendor/fancybox/lib/jquery.mousewheel-3.0.6.pack.js',
      './public/js/vendor/fancybox/source/jquery.fancybox.pack.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-buttons.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-media.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-thumbs.js'
    ],
    jsx: [
      './public/js/components/about.jsx',
      './public/js/components/mainComponent.jsx',
      './public/js/components/nav.jsx',
      './public/js/components/projectImages.jsx',
      './public/js/components/skills.jsx',
    ],
    app: './public/js/views/app.js'
  },
  output: {
    path: path.resolve(__dirname, "public/build"), // string
    filename: "[name].js", // string
  },
  module: {
    loaders: [
      {test: /\.jsx|js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }}
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
};

module.exports = config;
