const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist') // 出力されるディレクトリ

module.exports = {
  entry: path.resolve(__dirname, 'src/ts/app.ts'), // エントリーポイント
  output: {
    path: outputPath,
    filename: 'bundle.js', // 出力するバンドルのファイル名
  },
  resolve: {
    extensions: ['.js', '.ts'], // 省略する拡張子
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // モジュールを解決するディレクトリ
  },
  module: {
    rules: [
      {
        // TypeScript→JavaScript（ES5）→JavaScript（IE11対応）
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        // CSSをHTMLのインラインに展開する
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // CSS→CommonJS
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
          // Sass→CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // src配下のindex.htmlをbundle.jsを読み込ませる記述を追加してdist配下に生成する
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: outputPath,
    },
    hot: 'only',
    watchFiles: ['src/index.html'],
    liveReload: true,
    open: true,
  },
}
