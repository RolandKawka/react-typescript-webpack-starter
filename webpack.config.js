const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                  use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader?modules&sass',
                        options: {
                            modules: true,
                            namedExport: true
                        }
                    },
                    "sass-loader"
                  ]
            }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[name].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }
}