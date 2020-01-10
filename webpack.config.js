const path = require('path');

module.exports = {
    mode:'production',
    entry:{
        index:'./js/detheme.js',
        style:'./js/style-css.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
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