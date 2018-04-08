import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') //Entry point from where bundling will start
  ],
  target: 'web', //where we want to use the bundle,It can be web,node etc
  output: {
    path: path.resolve(__dirname, 'src'), //Path to save generated bundeled file
    publicPath: '/',
    filename: 'bundle.js' //Name of bundeled file. It is virtual file and not be actually generated
  },
  plugins: [
    //Create html file that references to Bundled JS
    new HtmlWebpackPlugin({
      template : 'src/index.html',
      inject : true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
