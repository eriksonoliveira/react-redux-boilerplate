const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const SRC_DIR = "./src/";
const DIST_DIR = path.resolve(__dirname + "dist");

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + "index.html"
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000
  }
};
