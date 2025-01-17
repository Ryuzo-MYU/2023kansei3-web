# 2023 感性情報デザイン演習 3 ウェブ共有用リポジトリ

2023 年 感性情報デザイン演習 3 ウェブ班のプロジェクト共有用ページ

## Github を使った共同編集

Github 使えると便利です！やり方書きます！\
でも覚えなきゃいけないコマンドがはじめのうちは多くて、「この次何やったらいいの？」っていうのが多くて大変ではあります。\
使っていけばだんだん覚えてきて、「Git 悪くねえかも」ってなってくるかもしれないので、適宜このドキュメントを参照しながら頑張ってみてください。

Git 使い始めたときによくあるトラブルを[トラブルシューティング](#トラブルシューティング)に書きました。参考にしつつ、リストにないエラーが出てきたときは、調べたり聞いたりしてください。

### 作業の下準備

準備できていればスキップして可です

- [Git bash のインストール](https://qiita.com/suke_masa/items/404f06309bb32ca6c9c5)
- Github アカウントの作成

### 作業の流れ

- 作業用フォルダをつくる
- Github のプロジェクトを持ってくる
- 作業する
- Github に作業内容を反映させる

### いいからコマンド見せろ！！

作業用フォルダのところで Git bash を開いて、以下のコマンドを順番に打ち込めば、Github に上がってるのと同じ中身がフォルダに入ってるはず。

作業前 (はじめて作業するとき)

```bash
# がついてる箇所はコメント

git init # 「このフォルダをGit管理します」のコマンド

# ユーザー設定
git config --local user.name <Githubアカウントの名前>
git config --local user.email <Githubアカウントのメアド>
# git config --local -l で、設定一覧が見れます。user.name, user.emailの場所が先程設定したものになっていればOKです

git remote add origin <GithubのURL>
# GithubページのCodeの部分を押すと出てくるURLを使ってください
# git remote -v コマンドで、どのGithubリポジトリと繋がってるか確認できます。URLが合ってればOK

git pull origin main # Githubの中身を持ってくる(正確には「このフォルダが繋がってるGithubの"origin"っていうリポジトリの"main"ブランチから持ってきてください」的なコマンド)
```

初めて作業する際には、以上のコマンドで準備完了です。
以降の作業では、作業開始前に `git pull origin main` で、最新のプロジェクトを入れたりします。

作業後

```bash
git status # 前のコミットから変更のあったファイル一覧を出す
git add . # 変更されたファイルすべてを、「変更確定しますリスト」に追加(add と . は離すこと)
git commit -m "(どんな編集をしたか書く。日本語でOK)"
git push origin main
```

作業後は以上のコマンドで、作業結果を Github のファイルに反映させられます。

## トラブルシューティング

- `remote add`でミスった！\
  `git remote set-url <正しいURL>`で、URL を変更できます。

- `git commit`で変な画面に飛んだんだけど！\
  `:wq!`って打ってください\
  たぶん`-m`忘れてませんか？\
  今飛んだ画面は、「どんな編集したんですか？」を書く画面で、コミットをするときは書く必要があります。`-m`をつけると、コマンドを打ち込む時点で編集理由を書き込むことができ便利です。\
  ちなみに`:wq!`というコマンドは、「Vim」というエディタから来ている文化です。気になったら調べてみてください。変態エディタです。

- `push`できない。`pull`できない\
  いろいろ理由があるので、明確に「こうしろ」というのは言えません。でてきた文章を調べるなどで、「そもそもどういうエラーなの？」とかは頑張って特定してください。\
  ただしメッセージのなかに`403`という数字が入っている場合については、中村の不備なのでご連絡ください。\
  (github ってリポジトリに変更を加えるにはアクセス権限が必要で、初期はリポジトリを作った人(つまり中村)しか権限の付与ができません。だからアカウントを招待する必要があったんですね)
