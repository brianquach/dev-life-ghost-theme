const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/dev-life/assets/js')
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'src/css/',
        from: '*.css',
        to: 'dist/dev-life/assets/css'
      },
      {
        from: 'src/fonts',
        to: 'dist/dev-life/assets/fonts'
      },
    ], {
      copyUnmodified: true
    })
  ]
};
