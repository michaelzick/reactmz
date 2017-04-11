'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    vendors: [
      // '/home/ubuntu/workspace/public/js/vendor/react/react.js',
      // '/home/ubuntu/workspace/public/js/vendor/react/jsx-transformer.js',
      '/home/ubuntu/workspace/public/js/vendor/jquery.easing-1.3.js',
      '/home/ubuntu/workspace/public/js/vendor/fancybox/lib/jquery.mousewheel-3.0.6.pack.js',
      '/home/ubuntu/workspace/public/js/vendor/fancybox/source/jquery.fancybox.pack.js',
      '/home/ubuntu/workspace/public/js/vendor/fancybox/source/helpers/jquery.fancybox-buttons.js',
      '/home/ubuntu/workspace/public/js/vendor/fancybox/source/helpers/jquery.fancybox-media.js',
      '/home/ubuntu/workspace/public/js/vendor/fancybox/source/helpers/jquery.fancybox-thumbs.js'
    ],
    jsx: [
      '/home/ubuntu/workspace/public/js/components/about.jsx',
      '/home/ubuntu/workspace/public/js/components/mainComponent.jsx',
      '/home/ubuntu/workspace/public/js/components/nav.jsx',
      '/home/ubuntu/workspace/public/js/components/projectImages.jsx',
      '/home/ubuntu/workspace/public/js/components/skills.jsx',
    ],
    app: '/home/ubuntu/workspace/public/js/views/app.js'
  },
  output: {
    path: path.resolve(__dirname, "public/build"), // string
    filename: "[name].js", // string
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: [['react']]
              }
          }
      ]
    }
};

module.exports = config;
