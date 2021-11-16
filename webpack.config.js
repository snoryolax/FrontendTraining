const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist') // 出力されるディレクトリ

module.exports = {
  entry: path.resolve(__dirname, 'src/ts/app.ts'), // エントリーポイント
  output: {
    path: outputPath,
    filename: 'bundle.js', // 出力するバンドルのファイル名
    assetModuleFilename: './assets/img/[name]-[contenthash][ext]', // 画像をバンドルせずに出力する際のファイル名
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
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // CSSをHTMLのインラインに展開する
          'css-loader', // CSS→CommonJS
          {
            // CSSにVendor Prefixを追加する
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')({ grid: true })],
              },
            },
          },
          {
            // Sass→CSS
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        // Sassに含まれる画像を出力
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
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
