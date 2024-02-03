---
title: 使用Hexo建立Sbxlm网站
date: 2019-07-03 10:21:04
tags: 
- Hexo
- Sbxlm
- 网站
- 技巧
---

## 安装Nodejs和Git

根据不同的操作系统，按照通常的方式安装即可。

## 安装Hexo-cli

``` bash
$ npm install -g hexo-cli
```

<!--more-->

## 初始化Sbxlm-hexo

``` bash
$ hexo init sbxlm-hexo
$ cd sbxlm-hexo
$ git init
$ npm install
$ hexo server
```

## 添加NexT主题

采用子模块的方式安装，以便今后获取上游的更新。

``` bash
$ git submodule add https://github.com/theme-next/hexo-theme-next themes/next
```

## 切换和修改NexT主题

- 修改sbxlm-hexo的_config.yml文件，将theme从默认的landscape改为next。
- 修改NexT的Scheme，从默认的Muse改为Gemini。
