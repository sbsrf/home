---
title: 声笔简飞
date: 2024-05-13 07:55:56
comments: false
tags:
- 声笔
- 简飞
- 顶功
typora-root-url: ..\..\public
---

## 1 简飞概述

为了让声笔简码取得尽量高的输入效率，可以采用专业模式，亦即将以下涉及到的选项设置如下。

```
switches:
  - name: third_pop
    reset: 1
    states: [四顶, 三顶]
  - name: is_enhanced
    reset: 1
    states: [常规, 增强]
  - name: single_display
    reset: 1
translator:
  enable_filtering: false
  single_selection: true
  lower_case: false
  enable_ssp: true
  no_ssp_in_ssb: true
```

其中，将三顶third_pop设为1保证字词均可三码起顶，增强is_enhanced为设1保证可以使用数选字词和标选单字，单次选重single_selection设为true保证可以在非全码时只观察首选即可，配合单项提示single_display为true可以避免过多的提示信息，启用过滤enable_filtering设为false可以在三码时出现多字词，小写lower_case设为false强制多字词时只能用ssss格式来输入多字词以便将更多的sszb空间让给二字词和三字词，启用声声偏词enable_ssp_words设为true可以大大增强二字词的离散能力，强制声声笔词no_ssp_in_ssb设为true则不能用ssb格式来输出声声偏词。