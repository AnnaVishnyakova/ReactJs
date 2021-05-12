//commonJS
//const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === "development";

const getFileNameByEnv = (ext = "[ext]", name = "[name]") => {
  return isDevelopment ? `${name}.${ext}` : `${name}.[contenthash].${ext}`;
};

module.exports = {
    mode: process.env.NODE_ENV || "development",
    context: path.resolve(__dirname, "src"),
    entry:{
        main: path.resolve(__dirname, "src/index.js"),
    },
    
    output:{
        filename: getFileNameByEnv("js"),
        path: path.resolve(__dirname, 'static','build'),
        publicPath: "/",
    //     path: path.resolve(__dirname,'static','build'),
    //    publicPath:'/',
    },
    
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                // query: {
                //     presets: ['es2015', 'react']
                // },
                exclude: /node_modules/,
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
                }
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: "file-loader",
                  },
                ],
              },
            // {
            //     test:/\.(js|jsx)$/,
            //     include: path.resolve(__dirname,'src'),
            //     loader:'babel-loader',
            //     exclude:/node_modules/,
            //     options: {
            //         presets: [
            //             '@babel/env',
                        
            //             ['@babel/preset-react',{
            //                 runtime:'automatic'
            //                 }
            //             ]
            //         ],
            //         plugins:[
            //             [
            //                 '@babel/plugin-proposal-class-properties',
            //                 {loose: true},
            //             ]
            //         ],
            //     },
            // },
            // {
            //     test: /\.css$/,
            //     use:['style-loader','css-loader'],
            // },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //       },
            //     ],
            //   },
        ],
    },
    plugins: 
    [new HtmlWebpackPlugin({
        title:'App',
        template: path.resolve(__dirname, "public/index.html"),
        filename: "index.html",
        inject: true,
        minify: {
            collapseWhitespace: !isDevelopment,
            removeComments: !isDevelopment,
            removeAttributeQuotes: !isDevelopment,
          },
    })
 ],
    
    
    // resolve: {
    //     fallback: {
            
    //       util: require.resolve("util/")
          
    //     }
    // },
    resolve: {
        modules: ["node_modules"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
          "@app": path.resolve(__dirname, "./src/"),
          "@store": path.resolve(__dirname, "./src/store/"),
          "@components": path.resolve(__dirname, "./src/components/"),
        },
        // extensions:['.js','.jsx'],
    },

    devtool: 
    !isDevelopment ? false : "source-map",
  stats: "errors-only",
    // 'inline-source-map',

    devServer:{
        historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    // port: 3000,
        // hot:true,
        // historyApiFallback:true,
    }
};