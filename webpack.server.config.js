/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: false,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  node: {
    __dirname: true,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/static", to: "static" },
        { from: "./src/views", to: "views" },
      ],
    }),
  ],
}
