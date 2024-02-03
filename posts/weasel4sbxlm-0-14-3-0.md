---
title: 首个为声笔系列码定制的小狼毫输入法
date: 2019-07-19 09:30:09
tags: 
- 小狼毫
- 声笔系列
- 输入法
---

## 热烈祝贺首个为声笔系列码定制的小狼毫输入法正式发布！

顶功输入法现在虽然越来越火，但是现有的平台都有太多的局限性，无法让输入法玩家们玩出更多的花样。利用表示笔画的小码集字母aeiou进行选重是声笔系列码的黑科技之一，一直无法在RIME中实现。于是，我只得硬着头皮改了一下librime的源码，现在终于可以在小狼毫中使用了！当然，自动码长调整等其它声笔技术在RIME平台和其它输入法平台上仍然没有办法使用。不过，已经可以多一种玩法了。祝贺！祝贺！

等不及了吗？赶快下载[Weasel4Sbxlm](https://github.com/sbxlm/sbxlm.github.io/releases/download/weasel4sbxlm-0.14.3.0/weasel4sbxlm-0.14.3.0.rar)吧。等一下！MacBook和Android怎么办了？少安毋躁，只有稍等一下了，后续再跟进。

<!--more-->

## 本版输入法的主要内容

### 公共部分

  - 用于Windows的安装程序weasel4sbxlm-0.14.3.0.exe，增加了官方版没有字母选重的功能，仍然可以兼容官方版，不会影响已经有的输入法。
  - 笔画码表（用于笔画反查码表）：bihua.dict.yaml和bihua.schema.yaml
  - 拼音码表（用于拼音反查码表）：pinyin_simp.dict.yaml和pinyin_simp.schema.yaml
  - 本文件：readme.txt
  
### 输入法部分

这里的声笔飞码即原生程序中的飞码声形模式，而声笔快码则是声韵模式。以下编码格式中，s代表声母，p代表偏旁部首，b代表笔画，y代表韵母，d代表双笔，x代表选择键。
  
  - 声笔飞码：sbfm.dict.yaml和sbfm.schema.yaml。它的编码格式：单字为spbbx, sbbbx；二字词为sbbsx；三字词为ssSx；多字词为sSssx。
  - 声笔快码：sbkm.dict.yaml和sbkm.schema.yaml。它的编码格式与声笔飞码基本上相同，只需要把spbbx换为sybbx就行了。
  - 声笔双拼：sbsp.dict.yaml和sbsp.schema.yaml。它的编码格式：单字为sybbx，二字词为sysyx，三字词为sssyx；多字词为ssssx。声笔双拼是基于自然码双拼改编的。
  - 声笔星二：sbxv.dict.yaml和sbxv.schema.yaml。它的编码格式：单字为sdbbx，二字词为sdsdx，三字词为sssdx；多字词为ssssx。声笔星二是基于星空二笔改编的。

### 更多信息

要知道更多的信息？请加入声笔系列码交流QQ群445906697。
