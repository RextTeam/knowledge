---
title: livepatchとは
description: Ubuntuのlivepatchを導入してみた
date: 2022/9/2
author: mc_fdc
---

# Livepatchを導入してみた

## Livepatchとは

Livepatchはその名の通り、Ubuntu(Linux系のos)でkernelパッチがリリースされ、

ダウンロードされた時に、パッチがサーバーを再起動せずに適用することはできます。

## 導入方法

※Ubuntu oneのアカウントを持っていることが前提条件です。

### 1. Ubuntu advantageのサイトに向かう

[サイト](https://ubuntu.com/security/livepatch)でGet Ubuntu Advantageと書かれたボタンをクリックします。

### 2. 登録ページに向かう。

Free for personal useの下にあるregisterと書かれたボタンをクリックします。

![Image1](/images/articles/livepatch/1.webp)

### 3. 登録もしくはログインする

Please type your email:の下にに自分のメールアドレスを入れてください。

Ubuntuアカウントを持っていない方はI don’t have an Ubuntu One accountを選択してください。

そのあとPasswordと書かれているところにパスワードを書いてください。

![images](/images/articles/livepatch/2.webp)

### 4. トークンを取得

Tokenと書かれているところをコピーしてください。

![images](/images/articles/livepatch/3.webp)

### 5. 設定

シェル画面にて、このコマンドを実行してください。

```sh
sudo ua attach <あなたのトークン>
```

## 最後に

Livepatch適用すると再起動が必要なくなるので便利だと思います。

是非試してみてください。
