---
title: 如何在Deepin上安装声笔输入法
date: 2024-05-31 09:12:50
typora-root-url: ..\public
tags:
- 输入法
- Deepin
- 深度
- 声笔
---

声笔输入法需要fcitx5-rime的支持，由于目前只有Deepin 23上才有它的发行包，所以建议使用Deepin 23，否则需要自己编译，需要有折腾能力的人才能做。

- 安装fcitx5-rime：打开终端，输入`sudo apt install fcitx5-rime`进行安装。

- 设置显示隐藏文件：打开控制中心，选择主目录后，在右上角点击菜单图标，在弹出菜单中选择「设置」。然后，在基础设置的「文件和目录」项下勾选「显示隐藏文件」。

![img](/images/35034d008c2efcf5500db21b7c7a25c7.png)

![image-20240531085336085](/images/image-20240531085336085.png)

- 复制声笔输入法方案：在主目录中，将sbsrf.zip中的所有东西复制到`.local/share/fcitx5/rime/`中。

![image-20240531085533111](/images/image-20240531085533111.png)

- 重新部署：切换到中州韵输入法，右击后选择重新部署。
- 选择使用：按Ctrl+~选择需要的声笔输入方案使用即可。
