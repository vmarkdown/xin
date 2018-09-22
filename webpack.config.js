const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const production = (process.env.NODE_ENV === 'production');


const config = {
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: production?'[name].[hash].js':'[name].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'text-loader'
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
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

module.exports = [
    merge(config, {
        entry: {
            editor: path.resolve(__dirname, 'src/editor/panel.js')
        },
        output: {
            library: "EditorPanel"
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
            preview: path.resolve(__dirname, 'src/preview/panel.js')
        },
        output: {
            library: "PreviewPanel"
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

