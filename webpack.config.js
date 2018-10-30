const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const production = (process.env.NODE_ENV === 'production');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const pac = require('./package.json');

const minify = production? {
    minifyCSS: true,
    minifyJS: true,
    collapseWhitespace: true,
    removeComments: true
}: false;

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
            'vmarkdown': path.resolve(__dirname, 'www', 'vmarkdown.bdefa65328a00e4e1ff3.min.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(md|svg)$/,
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
        // 'flowchart': 'flowchart',
        // 'katex': 'katex',
        // 'mermaid': 'mermaid',
        // 'underscore': '_'


        'katex': 'katex',
        'lowlight': 'lowlight',
        'flowchart.js': 'flowchart',
        'underscore': '_',
        'mermaid': 'mermaid',
        '@antv/g2': 'G2',

        // 'vmarkdown': 'VMarkDown'
    },
    plugins: [
        new CleanWebpackPlugin(production?['dist/*.*']:[]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            'VERSION': JSON.stringify(pac.version)
            // 'VERSION': JSON.stringify(pac.version + ':' +new Date())
        }),

    ],
    devServer: {
        // hotOnly: true,
        hot: false,
        inline: false,
        contentBase: path.join(__dirname, "www")
    }
};

module.exports = [

    merge(config, {
        entry: {
            editor: path.resolve(__dirname, 'src/editor/index.js')
        },
        output: {
            // library: "editorPanel"
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: production?'editor.[hash].html':'editor.html',
                template: 'src/editor/index.ejs',
                minify: minify,
                templateParameters: {
                    production: production
                }
            }),
            new AssetsPlugin({
                keepInMemory: production,
                prettyPrint: true,
                update: true,
                path: path.join(__dirname, 'dist'),
                filename: 'editor.json',
                processOutput: function (assets) {
                    if(!production) return assets;
                    const html = assets[""].html;
                    return JSON.stringify({
                        'editor': html
                    },null,2);
                }
            })
        ]
    }),

    merge(config, {
        entry: {
            preview: path.resolve(__dirname, 'src/preview/index.js')
        },
        output: {
            // library: "previewPanel"
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: production?'preview.[hash].html':'preview.html',
                template: 'src/preview/index.ejs',
                minify: minify,
                templateParameters: {
                    production: production
                }
            }),
            new AssetsPlugin({
                keepInMemory: production,
                prettyPrint: true,
                update: true,
                path: path.join(__dirname, 'dist'),
                filename: 'preview.json',
                processOutput: function (assets) {
                    if(!production) return assets;
                    const html = assets[""].html;
                    return JSON.stringify({
                        'preview': html
                    },null,2);
                }
            })
        ]
    }),
    //

    merge(config, {
        entry: {
            main: path.resolve(__dirname, 'src/main/index.js')
        },
        externals: {

        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.ejs',
                minify: minify,
                templateParameters: {
                    production: production
                }
            })
        ]
    }),

];

