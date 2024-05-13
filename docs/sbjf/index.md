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

声笔简飞单，简称简飞，实际上只是一种经过特殊配置的声笔简码。由于需要配置不少选项，一般用户会觉得很麻烦，所以做了这个虚拟的简飞方案，以便用户开箱即用，或者在此基础上进行细微的调整，以适应自己的需要。

### 1.1 适用场景

### 1.2 比较优势

### 1.3 配置选项

为了让简码取得尽量高的输入效率，简飞采用了最专业的选项配置，涉及到的选项设置如下。

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

## 2 使用技巧