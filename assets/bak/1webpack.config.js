const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        editorPanel: path.resolve(__dirname, 'src/editor/panel.js'),
        previewPanel: path.resolve(__dirname, 'src/preview/panel.js'),
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    externals: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'editor.[hash].html',
            template: 'src/editor/editor.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'preview.[hash].html',
            template: 'src/preview/preview.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            templateParameters: function (compilation) {
                console.log('main=============');
                var hash = compilation.children[0].hash;
                return {
                    hash: hash
                };
            }
        })
    ]
};

