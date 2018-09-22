const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const AssetsPlugin = require('assets-webpack-plugin');

const config = {
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'text-loader'
            }
        ]
    },
    externals: {
    },
    plugins: [
    ]
};

const assets = {
    preview: '',
    editor: ''
};

module.exports = [
    merge(config, {
        entry: {
            editor: path.resolve(__dirname, 'src/editor/panel.js')
        },
        output: {
            library: "Panel"
        },
        externals: {

        },
        plugins: [
            // new AssetsPlugin({
            //     prettyPrint: true,
            //     path: path.resolve(__dirname, 'dist'),
            //     filename: 'editor.assets.json'
            // }),
            new HtmlWebpackPlugin({
                filename: 'editor.[hash].html',
                template: 'src/editor/editor.html',
                templateParameters: function (compilation) {
                    console.log('editor=============');
                    // console.log(compilation.children);
                    // console.log(compilation.children[0].hash);
                    assets.preview = compilation.children[0].hash;
                    return {};
                }
            })
        ]
    }),
    merge(config, {
        entry: {
            preview: path.resolve(__dirname, 'src/preview/panel.js')
        },
        output: {
            library: "Panel"
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'preview.[hash].html',
                template: 'src/preview/preview.html',
                templateParameters: function (compilation) {
                    console.log('preview=============');
                    // console.log(compilation.children[0].hash);
                    assets.editor = compilation.children[0].hash;
                    return {};
                }
            }),
            // new AssetsPlugin({
            //     prettyPrint: true,
            //     path: path.resolve(__dirname, 'dist'),
            //     filename: 'preview.assets.json'
            // })
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
                template: 'src/index.html',
                templateParameters: function () {
                    console.log('main=============');
                    console.log(assets);
                    return assets;
                }
            })
        ]
    })
];

