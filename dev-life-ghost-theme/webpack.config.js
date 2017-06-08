const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
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
        use: [
          {
            loader: 'url-loader'
          },
          {
            loader: 'svgo-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
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
                require('postcss-cssnext')(),
                autoprefixer()
              ]
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
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
                require('postcss-cssnext')(),
                autoprefixer()
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'dist',
        to: '../../../ghost/content/themes/dev-life'
      }
    ])
  ]
};
