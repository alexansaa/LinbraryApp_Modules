// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: __dirname + '/', // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule to JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for transpilation
          options: {
            presets: ['@babel/preset-env'], // Use preset-env for modern JavaScript support
          },
        },
      },
    ],
  },
};
