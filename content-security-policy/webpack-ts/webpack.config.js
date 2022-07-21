const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
require('dotenv').config()

function WebpackConfig(context, options) {
  // console.log(options.mode, options.env);

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new CspHtmlWebpackPlugin({
        "script-src": "'strict-dynamic'",
        "default-src": "'self'",
        "img-src": "*",
        "media-src": "*",
      }),
      new Dotenv(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 4000,
    },
  };
}

module.exports = WebpackConfig;
