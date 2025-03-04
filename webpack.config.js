const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3000,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new CopyPlugin({
                patterns: [
                  { from: "./src/assets", to: "assets" },
                ],
              }),
        ],
    }
};