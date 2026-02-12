const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  devServer: { 
    port: 4201,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: { 
    publicPath: "http://localhost:4201/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeAuth",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginScreen": "./src/screens/LoginScreen.jsx",
        "./RegisterScreen": "./src/screens/RegisterScreen.jsx",
        "./ProfileScreen": "./src/screens/ProfileScreen.jsx",
        "./AuthProvider": "./src/contexts/AuthContext.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: false, eager: false },
        "react-dom": { singleton: true, requiredVersion: false, eager: false },
        "react-router-dom": { singleton: true, requiredVersion: false, eager: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
