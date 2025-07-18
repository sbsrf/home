---
title: 声笔飞简
date: 2025-01-02
tags:
- 声笔
- 飞简
- 顶功
typora-root-url: ..\..\public
---

## 1 飞简概述

声笔飞简，简称飞简，是声笔飞系的新成员，它针对输入大冗余度文本的场景进行设计，可以实现超短的平均码长，增加了飞系的场景适应能力。

由于飞简的单字编码和飞单完全相同，所以若您是初学者，请务必先了解和掌握[声笔飞单](../sbfd/)，然后再回过头来继续学习这里讲的词组模式。

## 2 单字输入

飞简单字输入与飞单的唯一区别是，声偏字需要空格上屏。例如，「声」「偏」需要用`st_pr`来输入，而不能用`stpr`，「偏」的声母p并不能将「声」顶上屏幕。当然，用大写「偏」的首码仍然将「声」顶上屏幕。

不过，大多数声偏字都可以在增强模式下，用数标字降低到只用两键即可，例如：声`st→s3`，即`jg→j;`，等等。也就是说，飞简的单字效率基本上能接近飞单的水平。

在声偏字后接声笔笔字时，可以通过大写声笔笔字的第三码来顶声偏字上屏，例如：以代yrduI，三辆svleA，等等。

## 3 词组输入

### 3.1 基本输入

二字词的编码格式为`s1p1s2b2b2`，即首字的前两码加次字的声母和次字的前两笔，例如：`一直yhzei 大佬dhlui 简码jpmeu 半角bdjua 蝴蝶hcdia 奔驰bdcaa`等。不过，实际输入的时候，从第三码开始就可以顶屏了。

![image-20250105084400436](/images/image-20250105084400436.png)

![image-20250105084421676](/images/image-20250105084421676.png)

需要特别注意的是，一简字在组词的时候要输入其第二码，如`yh`，而声笔字的第二码要改为部首，如`大dh`。

21个一简字及其前两码为：`不bh 平ph 没md 发fy 的db 他tr 你nr 了lz 个gr 可kk 和hh 就jw 去qt 下xb 在zt 出cc 是sq 人rp 一yh 我wg 而vh`。

105个声笔字作为二字词首字时的前两码为：`把bf 别bl 边bl 白bp 部bv 次cd 成cg 此cn 从cr 除cv 得dc 大dh 道dl 当dx 对dy 分fb 方fd 非fs 夫fv 飞fz 公gb 给gj 国gk 过gl 高gw 回hk 还hl 好hn 会hr 话hy 家jg 经jj 见jk 进jl 几jp 快kl 口ks 看ks 开kv 孔kz 立ld 利lh 来lh 里ls 力lz 门md 面mh 明mq 名mx 民mz 农ng 内nk 年nn 南ns 那nv 品pk 怕pl 片pp 破ps 皮py 前qb 强qg 全qr 且qv 起qz 若rc 然rl 如rn 日rs 让ry 上sb 事sh 手sp 说sy 双sy 头td 同tk 她tn 体tr 天tv 安vg 二vh 儿vp 暗vq 阿vv 为wd 维wj 晚wq 无wv 外wx 心xd 线xj 笑xp 小xs 想xx 眼ym 用yv 有yv 意yy 也yz 中zk 正zn 自zp 着zy 子zz`。

三字词的编码格式为`s1s2s3b3b3`，即各字的声母加末字的前两笔，例如：`计算机jsjei 新世纪xsjaa 大无畏dwwia`等。实际输入的时候，从第三码开始就可以顶屏了。

![image-20250105092827331](/images/image-20250105092827331.png)

![image-20250105092904249](/images/image-20250105092904249.png)

![image-20250105092926962](/images/image-20250105092926962.png)

多字词的编码格式一般为`s1s2s3b0b0`，其中的0表示末字，即前三字的声母加末字的前两笔，例如：`生龙活虎slhie 风雨同舟fytuu`等。实际输入的时候，默认从第四码开始可以顶屏。

![image-20250105093114976](/images/image-20250105093114976.png)

![image-20250105093027337](/images/image-20250105093027337.png)

多字词还可以采用另一种编码格式：`s1s2s3S0`，其中`S0`表示末字用声母的大写形式，例如：`好好学习hhxX 中华人民共和国zhrG`等。这种格式在不知道末字声母时特别有用，另外也可用来快速定位不常见的多字词，以减少击键。

![image-20250105094046321](/images/image-20250105094046321.png)

![image-20250105094110898](/images/image-20250105094110898.png)

飞简最大的特色和优势是，二、三字词三码起顶屏和调频，以及多字词四码起顶屏和调频。这使得飞简在输入高冗余文本时，拥有了超短的平均码长，能取得极高的效率。

### 3.2 扩展编码

飞简的词组支持扩展编码，在重码多的时候，可以追加首字的前两笔来快速区分重码。比如，「语用学」一词在第一次输入时，输入 `yyxoo` 后需要在第九页才能找到，如下所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，对击键率影响很大，效率很低。

![image-20250105094420543](/images/image-20250105094420543.png)

![image-20250105094443536](/images/image-20250105094443536.png)

![image-20250105094507559](/images/image-20250105094507559.png)

![image-20250105094637165](/images/image-20250105094637165.png)

![image-20250105094732453](/images/image-20250105094732453.png)

![image-20250105094753942](/images/image-20250105094753942.png)

![image-20250105094817374](/images/image-20250105094817374.png)

![image-20250105094841806](/images/image-20250105094841806.png)

![image-20250105094912963](/images/image-20250105094912963.png)

然而，如果发现首页没有该词就追加首字前两个笔画 `oa` 的话，「语用学」就出现在第二页上，只需翻页一次，用 `u` 选择上屏就可以了，如下所示。

![image-20250105095023308](/images/image-20250105095023308.png)

![image-20250105095139010](/images/image-20250105095139010.png)

由于动态调频的作用，在选择一个用扩展编码输入的词组后，下次再输入时码长就会缩短，一般只用三键就可以输入了。比如，上例在用`u`选择「语用学」后，下文再输入时常常就只需要`yyx`即可。

### 3.3 自动造词

飞简的造词是在输入过程中自动进行的，无需用户干预。例如：输入`飞fa_ 码msaa`后，下次输入`fzmeu`时就会有该词了，只是如果有重码的话，新造的词会排在后面。如果重码太多，可以追加首字前两笔过滤重码或者用Shift+Tab一次性地跳到最后，以避免多次翻页。自动造的词组是临时词组，带有太极标志，优先级别低，只有在选择使用一次以后，才会成为正式词组，并提高优先级别。

需要注意的是，在进行枚举自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，若输入`声笔stb 系列xxl 码msaa`后，生成的词组为「声笔系列码」「声笔系列」「系列码」，则不会生成「声笔系」「笔系列」「列码」等。另外，如果之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。

### 3.4 选项设置

如果用户习惯一直用第四码大写来输入多字词，那么就可以将飞简schema文件中Translator下的lower_case选项设置为false，以过滤掉`szsbb`上的多字词，从而大大减少重码。另外，将exclude_third选项设置为false，可以支持在三码时提供多字词候选，实现多字词三码顶屏输入。两个选项可以根据情况单独或者配合使用。

如果不想在输入完基本编码时就选择重码，而只想在输完扩展编码后才选择，那么可以将single_selection设置为true。这时，会在输入的时候，对后续的词组编码进行提示。如果觉得这种提示对你有干扰，可将Translator下的single_display选项设置为1，这样就只有首选才提示了。若遇到不知道后续编码的情况，可在输入四码及以上时按Tab临时打开后续编码提示。

## 4 组合变换

除了顶屏之外，组合变换也是节约用键和离散重码的重要手段。大量一、二简字（声笔字或声偏字）的组合，不管是不是词组，都可以通过这种方式来进行输入。注意，这个时候是没有提示的，需要用户对简字非常熟习才能灵活自如。组合变换一般通过分号键触发，有时也通过Tab键和单引号触发。

(1) 一简字与一简字的组合

例如，「个人」一词，虽然可以按词组的方式用`grrp`来输入。更好的方式是当成两个一简字用`g_r_`来输入，其中下划线表示空格。然而，最好的方式则是采用组合变换，用`gr;`来输入，可以节约一次用键。

(2) 一简字与二简字的组合

例如，「一会」可以用`yhu;`代替`y_hu`来输入，「会」为声笔字，虽然不能节约用键，但是可以避免回改。

再如，「一场」可以用`yct;`代替`y_ct_`来输入，「场」为声偏字，可以节约一键。

(3) 二简词与一简字的组合

二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用`wm + Tab + d + 空格`，而利用组合变换后就只需`wmd + Tab`了。

(4) 一简字与二简词的组合

一简字与二简词可以组合起来通过单引号一起上屏，从而节约一次按键。例如，「是我们」在常规输入时，得用`s + 空格 wm + Tab `，而利用组合变换后就只需`swm'`了。

(5) 声偏字与一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「受了」就可以这样输入。

(6) 声偏字与声笔字的组合。

例如，「加上」可以用`jlsi;`代替`jl_si`来输入，虽然不能节约用键，但是可以避免回改。

## 5 增强模式

为了缩短词组码长和增加输入确定性，提高输入效率，特为飞简提供了用数字和标点选择的字词，可以在增强模式下使用。

如果要临时使用增强模式，在电脑上可以用 Ctrl+~ 或 F4，在手机上直接点击状态栏的「常规 / 增强」项，就可以切换状态了。如果要将增强模式设置为默认状态，只要将 sbfj.schema.yaml 文件中的 is_enhanced 开关项的 reset 值由 0 改为 1，并重新部署一下就可以了。

数标字词的基本用法请参见[飞单增强模式](../sbfd/#_5-增强模式)。这里只讲飞简特有的情况，也就是说在第三码后接数字时，可以使用延迟顶屏。由于没有提示，所以要求用户记住了数选字才能这么操作。

例如，在输入「的效果」时，只用 `dxg8` 就可以了，不必先用空格上屏「的」字。

## 6 单字模式

在单字模式下，声偏字也可顶屏，多字词则合并到`szS`码位上进行输入，重码增多。单字模式和词组模式之间的切换可以在输入两码后用Shift+空格快速切换，手机上则通过上滑空格实现切换。

![image-20241211092532687](/images/image-20241211092532687.png)

## 7 延顶模式

为了支持更丰富的组合上屏，以便兼容词组模式或者节约用键，飞简提供了延顶模式。在延顶模式下，输入四个声母（如jsjd）时，显示的若是三码词和一简字的组合「计算机的」，命中的话可用空格上屏此选项，否则继续下面的操作。

- 若后接小写字母a ，则顶前三码对应的词「计算机」上屏，并留下声笔字「对da」。
- 若后接小写字母l，会上屏「计算机」并留下声偏字「到dl」。

- 若后接大写字母时则顶屏，如jsjdA会上屏「尽」并留下三码字「决jda」，而jsjdL会上屏「尽」并留下三码词「激烈jdl」，假设jdl对应的是「激烈」。
- 若想输入两个声偏字，则用分号上屏，可节约一次空格，jsjd会上屏「尽江」。
- 若想输入声偏字和二简词的组合，则用单引号上屏，可节约一次空格，jsjd会上屏「尽觉得」。
- 若想输入两个二简词的组合，则用Tab，可节约一次Tab，jsjd会上屏「建设觉得」。

- 若想输入二简字和数选词的组合，则可直接顶屏，节约一次空格，jsjd3会上屏「尽见到」。

可见，飞简的延顶模式在操作上是相当复杂的，需要对词组模式非常熟悉以后，再考虑尝试。


## 附录：编码格式

为了便于用户总结和记忆飞简的基本内容，现将其字词编码格式总结一下，编码格式采用了以下精简的表达方式。

- 单字 `sb, spb^bx`
- 二字词 `s1p1s2^'b2b2b1b1x`
- 三字词 `s1s2s3^'b3b3^'b1b1x`
- 多字词 `s1s2s3b0^'b0b1b1x|s1s2s3S0^'b1b1x`

```
z = p|b
s = p = [qwrtsdfgzxcvbyphjklnm]
b|x = [aeuio]
```

其中：`^`表示起始顶屏位，字母后的数字表示词组中的第几个字，0特别地表示末字；`'`表示码长调整位；s表示声母（大写时表示用大写字母输入），p表示偏旁部首，b表示笔画，x表示选择键，`|`表示或者，z表示p或b。s 和 p 均采用 aeuio 以外的 21 个英文字母，b和x均采用 aeuio 这几个元音字母。

