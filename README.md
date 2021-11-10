# Frontend Training

## 概要

- HYGE Interface Inc.のインターン課題。
- モダンなフロントエンド開発環境の構築が目的。
- 設定ファイルの荒波の泳ぎ方を学ぶ。

## コマンド

- ファイルの監視、ホットリロード

```
npm run dev
```

- TypeScript の型チェック
- src 配下のファイルの整形、静的解析
- バンドル

```
npm run build
```

- TypeScript の型チェック
- src 配下のファイルの整形、静的解析

```
npm run check
```

- デプロイ
- （GitHub Actions で実行）

```
nom run deploy
```

## デプロイ

- main ブランチへの push で自動デプロイ
- デプロイ先：https://ryopple.github.io/FrontendTraining/

## その他

- VSCode 推奨
  - Extension で Prettier・ESLint のインストール推奨
  - リポジトリをワークスペースとして開けば、formatOnSave で Prettier が走る
