const path = require('path');
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const htmlwebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "public/index.js"),
    output: {
        path: path.join(__dirname, "public/dist"),
        filename: "bundle.js"
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [htmlwebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
    }
}