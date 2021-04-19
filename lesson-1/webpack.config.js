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
       publicPath:'/',
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                include: path.resolve(__dirname,'src'),
                loader:'babel-loader',
                exclude:/node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        ['@babel/preset-react',{
                            runtime:'automatic'
                            }
                        ]
                    ],
                    plugins:[
                        [
                            '@babel/plugin-proposal-class-properties',
                            {loose: true},
                        ]
                    ],
                },
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title:'App',
        template: "./src/index.html"
    })],
    
    resolve: {
        extensions:['.js','.jsx'],
    },

    devtool: 'inline-source-map',

    devServer:{
        hot:true,
        historyApiFallback:true,
    }
};