//commonJS
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    
    output:{
        path: path.resolve(__dirname,'static','build'),
       // publicPath:'/'
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                include: path.resolve(__dirname,'src'),
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['@babel/env','@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title:'App',
        template: "./src/index.html"
    })],
 
};