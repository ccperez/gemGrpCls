module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'},
        ],
        exclude: /node_modules/
      }
    ]
  }
};
