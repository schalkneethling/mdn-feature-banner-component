const webpack = require("webpack");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.jsx?$/,
            exclude: "/node_modules/",
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test: /\.png$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: ["file-loader", "svgo-loader"]
          }
        ]
      },
      entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/ClientApp.js"
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
          title: "Featured Banner",
          template: "./src/tmpl/banner.html"
        })
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
