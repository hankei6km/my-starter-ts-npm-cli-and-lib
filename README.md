# my-starter-npm-cli-and-lib

TypeScript で npm 用の CLI とライブラリのパッケージを作成するスターター。
CodeSandbox 上でコードを編集し、GitHub Actions から npm レジストリーへ publish することを想定している。

## 利用方法

まだ記述の途中。

1. GitHub から import する(GitHubBox からは https://githubbox.com/hankei6km/my-starter-npm-cli-and-lib)
1. fork
1. `package.json` の `name` `version` `description` `license` 、`LICENSE` あたりを新しいパッケージにあわせて変更
1. 新しい terminal を開き `$ npm run upgrade-interactive` 等でパッケージを更新

これで 'npm run csb:test'(`jest --watchAll`) が terminal(「yarn start」タブ) 内で実行される。

コマンドとしての実行を試す場合は `npm run start -- foo.txt` のように実行する。

### CLI 部分の変更

- コマンド名(スクリプト名)を変更: `package.json` の `bin` と`src/main.ts` の `scriptName` を変更。
- コマンドのフラグ等を変更: `src/main.ts` を編集。
- コマンドの処理を変更: `src/cli.ts` を編集。

### ライブラリー部分の変更

`src/count.ts` を削除し、ライブラリのコードを記述。エクスポートしたい項目を `src/index.ts` へ記述。

### npm publish

GitHub で Release を Publish するとビルド実行後に `npm pulish` される。

なお、`prepublishOnly` 等は定義されていないので、手動で `npm publish` 等を実行してもビルドはされないので注意。


## 既知の問題

## 参考

- [TypeScript で npm ライブラリ開発ことはじめ - Qiita](https://qiita.com/saltyshiomix/items/d889ba79978dadba63fd)
- [TypeScript で CLI ツールを作って、npm パッケージにする - Qiita](https://qiita.com/suzuki_sh/items/f3349efbfe1bdfc0c634)
- [yarn upgrade-interactive と同じように npm でも対話型な更新をしたい！ - Qiita](https://qiita.com/kotarella1110/items/08afeb61d493829711eb)
- [Node.jsパッケージの公開 - GitHub Docs](https://docs.github.com/ja/actions/guides/publishing-nodejs-packages)
- [GitHub Actionsでnpmに自動でリリースするworkflowを作ってみた | DevelopersIO](https://dev.classmethod.jp/articles/github-actions-npm-automatic-release/)

## ライセンス

MIT License

Copyright (c) 2021 hankei6km

