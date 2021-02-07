const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
    output : {
        path:path.resolve(__dirname,"build/js"),
        filename:'bundle.js'
    },
    module :{
        rules:[
            {   
                test:'/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                loader: 'file-loader', //The file-loader resolves import/require() on a file into a url and emits the file into the output directory
                options: {
                    outputPath: "../images",
                    name: '[name]_new_1.[ext]'
                },
              }
        ]
    }
}

