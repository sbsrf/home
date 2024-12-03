---
title: Rime用户数据同步方法
date: 2024-06-20 14:49:00
typora-root-url: ..\..\public
tags:
  - 声笔
  - 输入法
  - Rime
  - 数据同步
---

Rime 是一个强大的开源输入法引擎，它以一个共同的函数库（[librime](https://github.com/rime/librime)）为中心，配以不同的前端（frontend）来支持各种操作系统。就前端来说，在 Windows 上是小狼毫（Weasel）或者 PIME，在安卓上为同文（Trime）或者 fcitx5-android，在 Linux 上为中州韵（ibus-rime）或者 fcitx5-rime 或者 fcitx-rime，在 MacOS 上为鼠须管（Squirrel）或者 XIME，在 iOS 上为仓输入法（Hamster），还有专用于 Emacs 的 emacs-rime，专用于 Vim 的 coc-rime，专用于 Zsh 的 zsh-rime，以及专用于 web 的 My Rime。

![image-20240620145335124](/images/image-20240620145335124.png)

如果用户同时使用多种设备，那么在多种设备上都会产生调频、造词等用户数据。如何让这些数据同步，以免重复调教词库，是一个重要的问题。针对这个问题，rime 官方介绍了同步的方法，很多用户也进行了探索和总结。在这里，我进行一番梳理，以便读者选择使用。

## Rime 官方的同步方法

Rime 官方在其说明书中，介绍了如何[同步用户资料](https://github.com/rime/home/wiki/UserGuide#%E5%90%8C%E6%AD%A5%E7%94%A8%E6%88%B6%E8%B3%87%E6%96%99)，其手段是利用移动设备如 U 盘或者云服务如 Dropbox 作为中介来实现多个前端的同步，即所谓多端同步。

在默认情况下，Rime 在第一次同步时会在 Rime 用户文件夹中创建一个 sync 文件夹，并且为当前设备生成一个唯一的 ID 作为 sync 的子文件夹，在其中保存本设备的同步内容和备份内容。同步内容为用户词典快照（txt 文件），而备份内容为其他文件（yaml 文件）。在有多个设备时，在 sync 目录下就会有多个 ID 子文件夹。

![image-20240620161406164](/images/image-20240620161406164.png)

但是，自动生成的 ID 是没有涵义了，不便于记忆。而且，默认的 sync 文件夹位置也不一定适合每个用户。为了进行定制，对 rime 用户文件夹中的 installation.yaml 进行编辑，用 sync_dir 来指明同步文件夹的位置，并用 installation_id 为每个设备指定一个有意义的 ID。

![image-20240620162612911](/images/image-20240620162612911.png)

## Rime 同步过程详解
