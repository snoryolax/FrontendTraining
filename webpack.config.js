const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/ts/app.ts'), // バンドルの起点となるファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力されるディレクトリ
    filename: 'bundle.js', // 出力されるファイル名
  },
  resolve: {
    extensions: ['.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      // babel-loader
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devtool: 'source-map', // ソースマップファイルの出力
};
