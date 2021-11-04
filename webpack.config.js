const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/app.js'), // バンドルの起点となるファイル
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力されるディレクトリ
    filename: 'bundle.js', // 出力されるファイル名
  },
  devtool: 'source-map', // ソースマップファイルの出力
};
