# my-starter-npm-cli-and-lib

typescript で npm 用の CLI とライブラリのパッケージを作成するスターター。

## 利用方法

まだ記述の途中。

1. GitHub から import する(GitHubBox からは https://githubbox.com/hankei6km/my-starter-npm-cli-and-lib)
1. fork
1. `package.json` の `name` `version` `description` `license` あたりを新しいパッケージにあわせて変更。
1. 新しい terminal を開き `$ npm run upgrade-interactive` 等でパッケージを更新。

これで 'npm run csb:test'(`jest --watchAll`) が terminal(「yarn start」タブ) 内で実行される。

コマンドとしての実行を試す場合は `npm run start -- foo.txt` のように実行する。

### CLI 部分の変更

- コマンド名(スクリプト名)を変更: `package.json` の `bin` と`src/main.ts` の `scriptName` を変更。
- コマンドのフラグ等を変更: `src/main.ts` を編集。
- コマンドの処理を変更: `src/cli.ts` を編集。

### ライブラリ部分の変更

`src/count.ts` を削除し、ライブラリのコードを記述。エクスポートしたい項目を `src/index.ts` へ記述。

## 既知の問題

## 参考

- [TypeScript で npm ライブラリ開発ことはじめ - Qiita](https://qiita.com/saltyshiomix/items/d889ba79978dadba63fd)
- [TypeScript で CLI ツールを作って、npm パッケージにする - Qiita](https://qiita.com/suzuki_sh/items/f3349efbfe1bdfc0c634)
- [yarn upgrade-interactive と同じように npm でも対話型な更新をしたい！ - Qiita](https://qiita.com/kotarella1110/items/08afeb61d493829711eb)

## ライセンス

[CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)
