module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: "./app",
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader?limit=8192']
      }
    ]
  }
};
