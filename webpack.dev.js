const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const { watchFile } = require("fs");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
