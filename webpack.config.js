var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var JS_PATH = path.resolve(SRC_PATH, 'js');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports= {
    entry: {
        index: path.resolve(JS_PATH, 'main/index.js'),
        main: path.resolve(JS_PATH, 'main/main.js')
    },
    output: {
        path: DIST_PATH,
        filename: 'js/[name].[hash].js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.scss?$/,
                loader: ['style', 'css', 'sass'],
                include: SRC_PATH
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template : path.resolve(SRC_PATH, 'views/index.html')
        }),
        new HtmlWebpackPlugin({
            title: 'main',
            template : path.resolve(SRC_PATH, 'views/main.html')
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};