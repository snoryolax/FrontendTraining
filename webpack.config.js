const path = require('path');

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
  devtool: 'source-map', // ソースマップファイルの出力
};
