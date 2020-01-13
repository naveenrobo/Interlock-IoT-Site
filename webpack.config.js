const path = require('path');

module.exports = {
    mode:'production',
    entry:{
        index:'./app/js/detheme.js',
        style:'./app/js/style-css.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/app/bundle",
    },
    optimization: {
             splitChunks: {
               chunks: 'all',
             },
          },
    module: {
        rules:[
            {
                test: /\.css$/,
                 use: ['style-loader','css-loader']
                },
                 {
                     test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
                     use:'url-loader'
                 }
        ]
    }
}