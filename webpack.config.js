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
            contact: './src/modules/pages/contact/contact.js',

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
            publicPath: isProduction ? 'https://popovfreewind.github.io/' : 'http://localhost:3000/',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.hbs$/, loader: "handlebars-loader", options: {
                        helperDirs: path.resolve(__dirname, './src/handlebars-helpers')
                    }
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/modules/pages/home/home.hbs',
                filename: 'index.html',
                minify: isProduction,
                chunks: ['shared', 'home'],
                templateParameters: { currentPage: 'home' }
            }),
            new HtmlWebpackPlugin({
                template: './src/modules/pages/projects/projects.hbs',
                filename: 'projects.html',
                minify: isProduction,
                chunks: ['shared', 'projects'],
                templateParameters: { currentPage: 'projects' }
            }),
            new HtmlWebpackPlugin({
                template: './src/modules/pages/contact/contact.hbs',
                filename: 'contact.html',
                minify: isProduction,
                chunks: ['shared', 'contact'],
                templateParameters: { currentPage: 'contact' }
            }),
            new CopyPlugin({
                patterns: [
                    { from: "./src/assets", to: "assets" },
                ],
            }),
        ],
    }
};