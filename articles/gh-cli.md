---
title: Github CLI使ってみた
description: Github CLIの解説をします。
author: mc_fdc
date: 2022/9/22
---

# Github Cliとは

## 概要

Github cliはGithub公式が出しているcliツールです。

codespaceにsshやissueをたてたりすることができます。

## ログイン

```sh
gh auth login
```

と実行すると8桁のIDがでるので、[ここ](https://github.com/login/device)で入力してください。

## codespaces

Github codespacesをsshで使いたいと思う場合、下記にあるコマンドを入力してください。

```sh
gh cs ssh
```

そうすると、どのcodespaceを使うかと出てくるので、選択してください。

これで以上

## 
