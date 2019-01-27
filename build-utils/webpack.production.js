const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  devtool: "nosources-source-map",
  output: {
    path: path.join(__dirname, "../static"),
    filename: "banner.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
