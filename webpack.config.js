var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './public/javascripts/index.js',
  output: {path:'./public/javascripts',filename:'bundle.js'} ,
   plugins: [


        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};