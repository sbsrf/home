---
title: 声笔飞讯
date: 2023-03-08 16:43:31
tags:
- 声笔
- 飞讯
- 顶功
typora-root-url: ..\..\public
---

## 1 飞讯概述

声笔飞讯，简称飞讯，是从著名顶功输入方案声笔飞码衍生出来的主单顶功方案，随着其词组能力的不断加强，几乎到达了字词双全的地步，对用户越来越有吸引力，特别是对追求极致效率的人更是如此。所以也自然而然地成长为一个独树一帜的方案，有太多的内容需要特别地讲解，值得独立出来专门进行论述了。本文是图文教程，视频教程请移步[声笔输入法边播边讲231231](https://www.bilibili.com/video/BV1zN4y1x7o7/)，可以参照学习。

飞讯具有出色的单字能力，它在纯单盲打方面大放异彩，以超短的平均码长取得极高的输入效率，适用于冗余度小的复杂文本，如文言文、散文和诗赋等。另一方面，它可以巨型的词库来轻松和高效地应对具有大量非单字词汇的高冗余度文本，如政经、科技和医学类文章。在增强模式下，通过使用大量简词、静态词，可以进一步缩短码长和提高击键，通过动态四二顶又能缩短其它词组的码长。无论哪种情况，飞讯都能很好地适配。不管是日常工作学习使用，还是参加打字比赛，飞讯都能完美胜任。

由于飞讯的单字模式与飞单完全相同，同时对于单字派来说，可能只关心和使用飞单，所以单字模式是独立成章进行讲解的。若您是初学者，请务必先了解和掌握[声笔飞单](../sbfd/)，然后再回过头来继续学习这里讲的词组模式。

## 2 单字输入

在词组模式下，飞讯单字输入的码长与在单字模式下完全一样，但有一个非常重要的区别：飞讯的二简字顶屏会延迟一码（四二顶）或两码（五二顶），也即采用了所谓的延迟顶。根据后续字的类型不同，延迟顶分为四种情况。

第一种情况是，在后接一简字时，需要与一简字一起用空格上屏或者用标点顶屏。例如，「好的」用空格上屏时的用键为`had_`，而「即是」用逗号顶屏时的用键为`jgs,`。也就是说，在输入第二字的首码时，并不会像在单字模式下那样立刻就将首字顶上屏幕。

![image-20240608162549351](/images/image-20240608162549351.png)

![image-20240608162606002](/images/image-20240608162606002.png)

第二种情况是，在后接非一简字和非声笔字时，采用了延迟一码的四二顶，用第四码顶前两码的二简字上屏。例如，「爱情」输入前三码`vzq`后，「爱」字并不会上屏，而需要在输入第四码（即「情」的第二码）后，「爱」字才被顶上屏幕，留下「情」字。

![image-20230805152731261](/images/image-20230805152731261.png)

![image-20230310112740159](/images/image-20230310112740159.png)

第三种情况是，在后接声笔字时，采用了延迟两码的五二顶，用第五码顶前两码的二简字上屏。例如，「好事」一词，在输入了`hase`之后，「好事」并不会上屏，还需要有后续的输入才能被顶上屏幕。假设后面要接着输入「者」字，那么在输入该字的第一码后，「好」字将被顶上屏，留下「事在」，对应的编码为`sez`。可以再接着输入「者」的后续编码来完成输入。

![image-20230310112250252](/images/image-20230310112250252.png)

![image-20230805152837989](/images/image-20230805152837989.png)

第四种情况是，在后接标点字时，采用了延迟两码的四二顶，用标点顶前面的二简字上屏。例如，「二极」一词，在输入了`vej`之后，接着输入分号，那么将上屏「二」，留下「极 j;」。再如，「空集」一词，在输入了`kxj`之后，接着输入单引号，那么将上屏「空」，留下「集 j'」。

## 3 词组输入

### 3.1 基本输入

飞讯二字词的编码格式为`s1z1s2b2b2`，即首字的前两码加次字的声母和次字的前两笔，例如：`一直yhzei 大佬delui 简码jpmeu 半角bdjua 蝴蝶hcdia 奔驰bdcaa`等。

![image-20240517114352055](/images/image-20240517114352055.png)

![image-20240517114431882](/images/image-20240517114431882.png)

需要注意的是，一简字在组词的时候要输入其第二码，如`yh`，而声笔字的第二码不变，如`大de`。飞系中，21个一简字及其前两码为：`不bh 平ph 没md 发fy 的db 他tr 你nr 了lz 个gr 可kk 和hh 就jw 去qt 下xb 在zt 出cc 是sq 人rp 一yh 我wg 而vh`。

由于飞讯的词组输入需要五码，所以在用单字输入的时候不超过五码的二字词是不建议用词组的方式来输入的。不过，为了降低使用难度，飞讯并没有禁用低效的词组，而由用户自己选择何时使用词组方式。有的时候，为了手感，也可能会用低效词组。

飞讯三字词的编码格式为`s1s2s3b3b3`，即各字的声母加末字的前两笔，例如：`计算机jsjei 新世纪xsjaa 大无畏dwwia`等。三字词一般建议使用词组的方式来输入，以便节约用键。可能的例外情况是由两键字（一、二简字和声笔字）构成的三字词，如「好起来」「不知道」等，它们用单字输入也才六键，而键速可能更快，因为单字更容易形成条件反射。具体怎么打好，就看用户自己的使用习惯了。

![image-20240517114516393](/images/image-20240517114516393.png)

![image-20240517114531073](/images/image-20240517114531073.png)

飞讯多字词的编码格式为`s1s2s3b0b0`，其中的0表示末字，即前三字的声母加末字的前两笔，例如：`呼风唤雨hfhei 风雨同舟fytuu 生龙活虎slhie`等。

![image-20240517114611377](/images/image-20240517114611377.png)

![image-20240517114625298](/images/image-20240517114625298.png)

### 3.2 扩展编码

飞讯的词组支持扩展编码，在重码多的时候，可以追加首字的前两笔来快速区分重码。比如，「语用学」一词在第一次输入时，输入 `yyxoo` 后需要在第九页才能找到，如下所示。每一页，都需要用眼睛扫视 6 个选项，人机交互频繁，对击键率影响很大，效率很低。

![image-20240517115016891](/images/image-20240517115016891.png)

![image-20240517115035930](/images/image-20240517115035930.png)

![image-20240517115054027](/images/image-20240517115054027.png)

![image-20240517115107251](/images/image-20240517115107251.png)

![image-20240517115123858](/images/image-20240517115123858.png)

![image-20240517115142915](/images/image-20240517115142915.png)

![image-20240517115200803](/images/image-20240517115200803.png)

![image-20240517115218483](/images/image-20240517115218483.png)

![image-20240517115237258](/images/image-20240517115237258.png)

然而，如果发现首页没有该词就追加首字前两个笔画 `oa` 的话，「语用学」就出现在第二页上，只需翻页一次，用 `u` 选择上屏就可以了，如下所示。

![image-20240517115444579](/images/image-20240517115444579.png)

![image-20240517115500354](/images/image-20240517115500354.png)

由于动态调频的作用，在选择一个用扩展编码输入的词组后，下次再输入时码长就会缩短，一般只用五键就可以输入了。比如，上例在用`u`选择「语用学」后，下文再输入时常常就只需要`yyxoo`即可。

### 3.3 冲突解决

在飞讯延迟顶的位置，有时无法使用缩减码，因为后三码被当作五码词组的一部分了，如果那正是你要的词就很好，但如果不是这样，就会发生冲突。

比如，在输入「狂kq」「喘cia」时，「kqcia」是常规词组的空间，上面往往会有其它词存在，产生冲突，从而无法将「狂」字顶上屏幕，如下图所示。

![image-20240517115558042](/images/image-20240517115558042.png)

如果继续输入，将会把「昆虫」这个词一起顶上屏，而不是顶「狂」字上屏。为了解决这个问题，特提供了巧妙的办法，即采用编码变换用分号将编码`kqcia`变为`kq_cia_`（其中下划线表示空格），而将「狂喘」上屏。

在用户预知会发生冲突时，也可以第五码采用大写字母，强制将首字顶上屏。比如，上例用`kqciA`就可以将kq对应的「狂」字上屏，而留下`cia`，因为大写的A会自动变换为小写的a。

当然，在常规模式下彻底解决冲突的办法是完全不使用缩减码。

### 3.4 大写分流

飞讯的三字词还可通过大写第三码来进行输入，可以减少三字词的重码，而且可以从第三码起顶屏，能缩短码长。这时在第三、四码时仅仅只有一个候选项，选重仍然是从第五码开始，扩展编码仍然可以使用。

![image-20240627084452773](/images/image-20240627084452773.png)

![image-20240627084515361](/images/image-20240627084515361.png)

![image-20240627084530384](/images/image-20240627084530384.png)

![image-20240627084601960](/images/image-20240627084601960.png)

考虑到有的成语用字比较生僻，飞讯也支持第四码用声母，以完全避免用到笔画，同时起到分流多字词的作用，但是第四码得用大写来输入，仍然可以继续输入首字的前两笔作为扩展编码。

![image-20240627084729393](/images/image-20240627084729393.png)

![image-20240627084802424](/images/image-20240627084802424.png)

### 3.5 词组过滤

如果用户习惯一直用第三码大写来输入三字词和用第四码大写来输入多字词，那么就可以将飞讯schema文件中Translator下的enable_filtering选项设置为true，以过滤掉`szsbb`上的三字词和多字词，从而大大减少重码。默认的forced_selection选项为true，可强制在`szsbb`上选择重码，从而减少扩展编码时的重码。这样设置对操作熟练的高级用户来说是非常有用的，可以减少很多重码，提高可盲打性。

### 3.6 自动造词

飞讯的造词是在输入过程中自动进行的，无需用户干预。例如：输入飞fa_ 码msaa后，下次输入fameu时就会有该词了，只是如果有重码的话，新造的词会排在后面。如果重码太多，可以追加首字前两笔过滤重码或者用Shift+Tab一次性地跳到最后，以避免多次翻页。自动造的词组是临时词组，带有太极标志，优先级别低，只有在选择使用一次以后，才会成为正式词组，并提高优先级别。

需要注意的是，在进行枚举自动造词的时候，是以编码对应的字、词为单位来进行组合的，并不是以单字为单位的。例如，在输入声笔stbue 系列xxleu 码msaa后，生成的词组为「声笔系列码」「声笔系列」「系列码」，而不会生成「声笔系」「笔系列」「列码」等。另外，如果之后马上使用了退格键，系统就会自动删除所造的词组；中间夹杂有非汉字的话，也会中断造词。

## 4 组合变换

除了顶屏之外，组合变换也是节约用键和离散重码的重要手段。大量一、二简字的组合，不管是不是词组，都可以通过这种方式来进行输入。注意，这个时候是没有提示的，需要用户对简字非常熟习才能灵活自如。组合变换一般通过分号键触发，有时也通过Tab键和单引号触发。

(1) 一简字与一简字的组合

例如，「个人」一词，虽然可以按词组的方式用`grrp`来输入。更好的方式是当成两个一简字用`g_r_`来输入，其中下划线表示空格。然而，最好的方式则是采用组合变换，用`gr;`来输入，可以节约一次用键。

(2) 一简字与声笔字的组合

例如，「一会」可以用`yhu;`代替`y_hu`来输入，虽然不能节约用键，但是可以避免回改。

(3) 二简词与一简字的组合

二简词与一简字可以组合起来通过Tab一起上屏，从而节约一次空格键。例如，「我们的」在常规输入时，得用`wm + Tab + d + 空格`，而利用组合变换后就只需`wmd + Tab`了。

(4) 三个一简字的组合，可以用Shift+空格来输入，手机上可上滑空格。例如，「一个人」「就是了」「是不是」「不是不」等都可以这样输入。

## 5 增强模式

为了缩短词组码长和增加输入确定性，提高输入效率，特为飞讯提供了数选字和数选词，可以在增强模式下使用。

如果要临时使用增强模式，在电脑上可以用 Ctrl+~ 或 F4，在手机上直接点击状态栏的「常规 / 增强」项，就可以切换状态了。如果要将增强模式设置为默认状态，只要将 sbfx.schema.yaml 文件中的 is_enhanced 开关项的 reset 值由 0 改为 1，并重新部署一下就可以了。

数选字词的基本用法请参见[飞单增强模式](../sbfd/#_5-增强模式)。这里只讲飞讯特有的情况，也就是说在第三码后接数字时，可以使用延迟顶屏。由于没有提示，所以要求用户记住了数选字才能这么操作。

例如，在输入「高」「交」时，只用 `goj5` 就可以了，不必先用空格上屏「高」字。

## 6 快顶模式

飞讯在默认的慢顶模式下，美中不足就是词组需要五码才能输入，这就增加了平均码长，在一定程度上抵消了飞讯在单字输入方面的优势。有没有办法使飞讯的词组也只需要四码呢？有！飞讯在快顶模式下通过换码操作实现了这个目标。换码的原理是，将词组编码第四位上的笔画 `aeuio` 改用 `23789` 来编码输入，使得起始顶屏位和码长调整位都从第五位移动到第四位。

例如，「奔驰」在常规模式下输入用的是 `bdcaa`，而在快顶模式下则用 `bdc2`。

![image-20240517120245540](/images/image-20240517120245540.png)

如果接着输入「到」字的首码 `d`，「奔驰」就会被顶上屏幕。如果输入 `bdc2` 后，并不是想要的「奔驰」，那么就按正常的编码输入第五码。比如，若想输入的是「奔出」，那么就接着追加「出」字的第二笔。

![image-20240517120320555](/images/image-20240517120320555.png)

接下来的重码选择和扩展编码就和常规模式一模一样了。如果这时用 `a` 选择了「 表达出」，则「表达出」成为六时的首选。

![image-20240517120356899](/images/image-20240517120356899.png)

再次输入「表达出」时，可能就只需要四码了。

![image-20240517120433219](/images/image-20240517120433219.png)

由于少加了一个笔画，飞讯在四码顶屏时的编码空间只有飞码在五码顶屏时空间的五分之一，能容纳的四码词数量也就少得多，虽然缩短了码长，但会增加飞讯词组的动态性，增强查看候选项的时间，从而降低其可盲打性。所以，在竞速打赛文时，对词组的盲打要求比较高时，就不适合采用快顶。然而，在实际码字时，用户的应用场景比较狭窄，四码时词组的命中率会非常高，码长明显缩短，那么采用快顶就非常适合了。

飞讯在默认的慢顶模式下，当词组第四位上的笔画用`aeuio`来编码，同时又在使用单字的缩减码时，就可能会发生冲突。在设置为快顶模式时，就可以避免这类冲突，从而毫无顾忌地使用缩减码，因为此时的单字均是四二顶，在第四码时就一定会把二简字顶上屏。

例如，在慢顶模式下，输入`jyjua`时，会提示下面的词组。

![image-20240517120540011](/images/image-20240517120540011.png)

然而，在快顶模式下，在`jyj`后接着输入时u就将「记」顶上屏幕了，留下`ju`。

![image-20230805152938877](/images/image-20230805152938877.png)

![image-20230602112043761](/images/image-20230602112043761.png)

所以，飞讯的快顶模式除了输入二简字输入比声笔飞单延迟一码外，是完全兼容声笔飞单的，同时会强制用户采用词组的四码起顶方式，只是常规词组第四码必须用23789，对用户的操作技能要求比较高。

由于第四码采用了23789，所以这几个数字这时就失去了顶屏能力。如果因习惯性地操作而错误地用数字进行了顶屏，那么可用用Tab键来补救，以避免代价较高的删除回改。

例如，在输入「三人8」时，输入了`svr8`，可能会出现「三日」，那么用Tab变化一下即可，而不必用退格键删除8后，用空格上屏「三人」，再输入8。

快顶模式还可以与增强模式结合起来使用，进一步提高飞讯的输入上限。

不过，在快顶增强模式下，`szsn`词组可能与二简字加数选单字有冲突，也可能与一简字加数选词冲突，还可能与二简字加一简字加数字冲突，这时解决冲突的办法是，前者可采用分号来上屏两个二单字，中者采用单引号来上屏一简字和数选词，后者采用Tab来变换。

例如，输入编码`lhj3`后，提示行出现的可能是「老虎机」这个二字词。

![image-20231108113218125](/images/image-20231108113218125.png)

此时，若想输入「两据」，则可按分号进行变换；若想输入「了环节」，则用单引号变换；若想输入「两就3」，则用Tab变换。如果想完全避免数选字的冲突，可以放弃使用数选字，以便于单字的完全盲打。

## 7 速顶模式

在慢顶模式和快顶模式下，都没能完全避免字词输入冲突问题，于是速顶模式应运而生。通过在快顶模式基础上，取消`szsn`词组，将其合并到`szS`上，就可以完全消除码位冲突的烦恼，还能够缩短码长。付出的代价是二字词和三字词的重码增加了。

例如，「盲打」就需要采用`szS`型码位来输入，而不能用`szsn`型的码位。

![image-20241211090030638](/images/image-20241211090030638.png)

再如，输入编码`lhj3`后，得到的肯定是「了环节」，而「老虎机」得用`ssS`格式输入，从而避免了冲突。

![image-20241211085524256](/images/image-20241211085524256.png)

多字词（即四字及以上的词组）必须用`sssS`型码位来输入。

![image-20241211090916924](/images/image-20241211090916924.png)

## 8 单字模式

在单字模式下，顶屏不再有延迟，但是多字词也合并到`szS`码位上进行输入了，重码进一步增多，不过常用多字词的码长可以缩短。单字模式和词组模式之间的切换可以在输入两码后用Shift+空格快速切换，手机上则通过上滑空格实现切换。

![image-20241211092532687](/images/image-20241211092532687.png)

飞讯的单字模式和声笔飞单的区别是，后者在输入词组时，szS格式只输入二字词和三字词，而用sSss格式来输入多字词。

## 9 高手设置

如果对飞讯已经非常熟悉，那么建议通过修改飞讯的schema，进行以下设置，来尽量减少提示信息的干扰并减少重码。

1. 采用快顶模式，将含rapid_pop的options项的reset设置为1；
2. 采用增强模式，将is_enhanced项的reset设置为1；
3. 隐藏数标字词的提示，将含hide的options项的reset设置为0；
4. 采用单项提示，将single_display项的reset设置为1；
5. 采用单次选重，将translator下的single_selection设置为true；
6. 进行词组过滤，将translator下的enable_filtering项设为true；
7. 将translator下的过滤强度filter_strength设置为6。

![image-20250615121954719](/images/image-20250615121954719.png)

![image-20250613060902056](/images/image-20250613060902056.png)

![image-20250613063830937](/images/image-20250613063830937.png)

## 附录：编码格式

为了便于用户总结和记忆飞讯的基本内容，现将飞讯的字词编码格式总结一下，编码格式采用了以下精简的表达方式。

- 单字 `sb, sp^bbx`
- 二字词 `s1z1s2b2b2^'b1b1x`
- 三字词 `s1s2s3b3b3^'b1b1x`
- 多字词 `s1s2s3b0b0^'b1b1x|s1s2s3S0^'b1b1x`

```
z = p|b
s = p = [qwrtsdfgzxcvbyphjklnm]
b|x = [aeuio]
```

其中：`^`表示起始顶屏位，字母后的数字表示词组中的第几个字，0特别地表示末字；`'`表示码长调整位；s表示声母（大写时表示用大写字母输入），p表示偏旁部首，b表示笔画，x表示选择键，`|`表示或者，z表示p或b。s 和 p 均采用 aeuio 以外的 21 个英文字母，b和x均采用 aeuio 这几个元音字母。

