/* eslint-disable */
const path = require("path")

module.exports = {
  entry: ["./src/client-src/index.js"],
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "./dist/static/js"),
    clean: false,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src/client-src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
}
