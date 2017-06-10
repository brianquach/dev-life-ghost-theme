const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  entry: {
    bundle: './src/assets/js/webpack.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/js')
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff)(\?.*)?$/,
        exclude: /node_modules/,
        use: 'url-loader'
      },
      {
        test: /\.(svg)(\?.*)?$/,
        exclude: /node_modules/,
        use: ['url-loader', 'svgo-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-import')({ root: loader.resourcePath }),
                  require('postcss-cssnext')()
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-import')({ root: loader.resourcePath }),
                  require('postcss-cssnext')()
                ]
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/styles.css"),
    new CopyWebpackPlugin([
      {
        from: 'dist',
        to: '../../../ghost/content/themes/dev-life'
      }
    ])
  ]
};
