const {resolve} = require('path');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: './scripts/app.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(mp3|waw)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(mp4|mov|avi)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ["optipng", { optimizationLevel: 1 }]
                ]
            },
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new CssMinimizerPlugin()
    ]
}