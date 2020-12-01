const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-jsx'],
            babelrcRoots: ['.', '../']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  }

};