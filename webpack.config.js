const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: {
            // pages
            home: './src/modules/pages/home/home.js',
            projects: './src/modules/pages/projects/projects.js',

            // shared
            shared: './src/modules/shared/shared.js'
        },
        mode: argv.mode,
        devtool: 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            watchFiles: ['src/**/*.hbs'],
            port: 3000,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.hbs$/, loader: "handlebars-loader" }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ 
                template: './src/modules/pages/home/home.hbs',
                filename: 'index.html',
                minify: isProduction,
                chunks: ['shared', 'home']
             }),
            new HtmlWebpackPlugin({ 
                template: './src/modules/pages/projects/projects.hbs',
                filename: 'projects.html',
                minify: isProduction,
                chunks: ['shared', 'projects']
             }),
            new CopyPlugin({
                patterns: [
                    { from: "./src/assets", to: "assets" },
                ],
            }),
        ],
    }
};