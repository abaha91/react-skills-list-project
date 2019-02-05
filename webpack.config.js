const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: 'css-loader' }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({template: './src/index.html'}),
    ]
};