import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Hash the files using MD5 so that their name change when the content changes
    new WebpackMd5Hash(),

    /*Use CommonChunkPlugin to create a separate bundle
    of vendor libraries so that they're cached separately*/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    //Create html file that references to Bundled JS
    new HtmlWebpackPlugin({
      template : 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype:true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject : true,
      //Properties we define here are available in index.html
      //using htmlWebpackPlugin.options.varname
      trackJSToken:'1ba68866e49149a09eb9dc23c131291a'
    }),
    //Plugin to remove duplicate package while bundling
    new webpack.optimize.DedupePlugin(),
    //Minify JS for Prod Env
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
