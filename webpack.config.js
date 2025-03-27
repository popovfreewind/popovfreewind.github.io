const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeFetch = require('node-fetch');

module.exports = async (env, argv) => {
    const isProduction = argv.mode === 'production';
    const projectsConfigPath = "https://popovfreewind.github.io/all-my-projects-data/projects.json";

    const response = await nodeFetch(projectsConfigPath);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${projectsConfigPath}: ${response.statusText}`);
    }
    const projectsData = await response.json();
    const pages = [
        {
            name: 'home',
            template: './src/modules/pages/home/home.hbs',
            entry: './src/modules/pages/home/home.js',
            filename: 'index.html',
            templateParameters: { currentPage: 'home' }
        },
        {
            name: 'about',
            template: './src/modules/pages/projects/projects.hbs',
            entry: './src/modules/pages/projects/projects.js',
            filename: 'projects.html',
            templateParameters: { currentPage: 'projects', projects: projectsData }
        },
        {
            name: 'contact',
            template: './src/modules/pages/contact/contact.hbs',
            entry: './src/modules/pages/contact/contact.js',
            filename: 'contact.html',
            templateParameters: { currentPage: 'contact' }
        }
    ]

    // Dynamically build entries
    const entries = {
        shared: './src/modules/shared/shared.js',
        project: './src/modules/pages/project/project.js'
    };
    pages.forEach(page => {
        entries[page.name] = page.entry;
    });

    // add pages from projectsData
    projectsData.forEach(project => {
        const sanitizedFilename = project.name.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
        const page = {
            name: "project",
            template: './src/modules/pages/project/project.hbs',
            filename: `${sanitizedFilename}.html`,
            templateParameters: { currentPage: 'projects', project }
        };
        pages.push(page);
    });

    // Dynamically create HtmlWebpackPlugin instances
    const htmlPlugins = pages.map(page => new HtmlWebpackPlugin({
        template: page.template,
        filename: page.filename,
        minify: isProduction,
        chunks: ['shared', page.name],
        templateParameters: page.templateParameters,
    }));

    return {
        entry: entries,
        mode: argv.mode,
        devtool: isProduction ? false : 'source-map',
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
            new CleanWebpackPlugin(),
            ...htmlPlugins,
            new CopyPlugin({
                patterns: [
                    { from: "./src/assets", to: "assets" },
                    { from: "./src/google-verification" },
                ],
            }),
        ],
    };
};