const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Directory from the entry point.
  output: {
    path: path.resolve(__dirname, "./static/frontend"), // Output 
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Minimize the JS 
  },
  plugins: [ // This is about optimization.
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};