var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    // renderer: `${SRC_DIR}/Renderer.jsx`,
    // components: [`${SRC_DIR}/components/Title.jsx`, `${SRC_DIR}/components/SizeSelector.jsx`]
    app: `${SRC_DIR}/components/App.jsx`,
    urlScriptGenerator: `${SRC_DIR}/UrlScriptGenerator.js`
  },
  output: {
    filename: "[name]-bundle.js",
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new Dotenv()]
};
