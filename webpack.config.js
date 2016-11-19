var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: {
    app: './apps/app/index.js',
    dashboard: './apps/dashboard/index.js',
  },
  output: {
    path:'./public/javascripts',
    filename:'[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  } ,
   plugins: [


        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
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
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
};