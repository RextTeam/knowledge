---
title: semanagerのインストール方法
description: SELinuxをコントロールするためのsemanagerを入れる方法を説明します。
author: mc_fdc
date: 2022/10/12
---

# SEManagerのインストール方法

## そもそもSEmanagerとは

SELinuxというセキュリティーソフト？をコントロールするためにあります。

## なぜ執筆したか

筆者がSSHのポート番号を変えようとした時、SELinuxのせいでパーミンションエラーが起きた。

それを直そうとし、semanagerを使おうとしたら入ってなくて、調べた結果別のレポに入っていることがわかったので執筆した。

## インストール方法

```sh
sudo dnf install policycoreutils-python-utils
```

つまりこのリポの中にsemanagerが入っている。

## SSHの設定

下のやつを実行するとパーミッションエラーが発生しなくなる。

```sh
sudo semanage port -a -t ssh_port_t -p tcp {好きなポート番号}
```

## 最後に

semanagerをSELinuxに同包してほしいと思った。

ではまた。
