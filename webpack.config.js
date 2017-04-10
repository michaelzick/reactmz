const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    vendors: [
      './public/js/vendor/react/react.js',
      './public/js/vendor/react/jsx-transformer.js',
      './public/js/vendor/jquery.easing-1.3.js',
      './public/js/vendor/fancybox/lib/jquery.mousewheel-3.0.6.pack.js',
      './public/js/vendor/fancybox/source/jquery.fancybox.pack.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-buttons.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-media.js',
      './public/js/vendor/fancybox/source/helpers/jquery.fancybox-thumbs.js'
    ],
    // jsx: [
    //   './public/js/components/about.jsx',
    //   './public/js/components/mainComponent.jsx',
    //   './public/js/components/nav.jsx',
    //   './public/js/components/projectImages.jsx',
    //   './public/js/components/skills.jsx',
    // ],
    main: './public/js/views/main.js'
  },
  output: {
    path: __dirname + 'build',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};

module.exports = config;

// module.exports = {
//   cache: true,
//   entry: {
//     main:  './src/index.jsx',
//     surfing: './src/surfing.jsx',
//     contact: './src/contact.jsx',
//   },
//   output: {
//     path: 'public/build',
//     filename: '[name].js'
//   },
//   module: {
//     loaders: [
//       {test: /\.jsx$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
//       {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['react', 'es2015'] }},
//     ]
//   },
//   plugins: [
//     definePlugin,
//     commonsPlugin
//   ]
// };
