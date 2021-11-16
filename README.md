# Frontend Training

## 概要

- HYGE Interface Inc.のインターン課題。
- モダンなフロントエンド開発環境の構築が目的。
- 設定ファイルの荒波の泳ぎ方を学ぶ。

## バージョン

- Node.js 14.17.1
- npm 6.14.13

## コマンド

- ファイルの監視、ライブリロード

```
npm run dev
```

- TypeScript の型チェック
- src 配下のファイルの整形、静的解析
- バンドル
- （GitHub Actions で実行）

```
npm run build
```

## デプロイ

- main ブランチへの push で自動デプロイ
- デプロイ先：https://ryopple.github.io/FrontendTraining/

## その他

- VSCode 推奨

  - Extension で Prettier・ESLint のインストール推奨
  - リポジトリをワークスペースとして開けば、formatOnSave で Prettier が走る

- ブランチ構成
  - main: 作業、開発用ブランチ
  - review: Pull Request の merge 先ブランチ
  - gh-pages: デプロイ用ブランチ
