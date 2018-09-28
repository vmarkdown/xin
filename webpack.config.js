const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const production = (process.env.NODE_ENV === 'production');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pac = require('./package.json');

const config = {
    mode: 'none',
    output: {
        path: path.resolve(__dirname, production?'dist':'www'),
        filename: production?'[name].[hash].js':'[name].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    resolve: {
        alias: {
            'vmarkdown': path.resolve(__dirname, 'assets', 'vmarkdown.js'),
        }
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'text-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    externals: {
        'flowchart': 'flowchart',
        'hljs': 'hljs',
        'katex': 'katex',
        'mermaid': 'mermaid',
        'underscore': '_'
    },
    plugins: [
        new CleanWebpackPlugin(production?['dist/*.*']:[]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            'VERSION': JSON.stringify(pac.version)
        })
    ],
    devServer: {
        // hotOnly: true,
        contentBase: path.join(__dirname, "dist")
    }
};

module.exports = [
    merge(config, {
        entry: {
            editor: path.resolve(__dirname, 'src/editor/index.js')
        },
        output: {
            library: "editorPanel"
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'editor.html',
                template: 'src/editor/editor.html'
            })
        ]
    }),
    merge(config, {
        entry: {
            preview: path.resolve(__dirname, 'src/preview/index.js')
        },
        output: {
            library: "previewPanel"
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'preview.html',
                template: 'src/preview/preview.html'
            })
        ]
    }),
    merge(config, {
        entry: {
            main: path.resolve(__dirname, 'src/index.js')
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html'
            })
        ]
    })

];

