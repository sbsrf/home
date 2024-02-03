---
title: 飞码（X）和快码（X）的优化实验
date: 2019-08-15 13:29:34
tags:
- 飞码
- 快码
- 飞码X
- 快码X
- 优化
---

## 存在的问题

在8.00的飞码（X）和快码（X）中，sbb和sbbb只是简单地放了声笔字，实际上几乎没投入使用，非常浪费。特别是在新增的飞码X和快码X中，因为没有sbbs型的二字词，sbb是只需要三键的短码空间，不好好利用的话，实在可惜。同时，飞码（X）中有少量spb短码空间是空闲的，而在快码（X）中存在着不少的sy和大量的syb短码空闲空间。

RIME版飞码（X）和快码（X）面临的另一个问题是，105个sb型简码字没有原生版那样的提示，初学者必须死记。

<!--more-->
## 短码空间的利用

### 飞码（X）

首先，利用spb空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。

```
select zici = rtrim(zici), bianma = left(bianma,3), chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 3 and left(bianma,3) not in (
select bianma = left(a.bianma,3)
from spdanz a
right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)
where a.changdu = 3 and b.changdu = 3)
order by chupin desc
```

一共抽取了67个ssb型的二字词，罗列其中的前10条如下。

```
那个	ngu	169294
儿子	vza	61768
任务	rwu	57310
不好	bha	54085
放心	fxo	46543
若是	rsi	39942
空中	kzi	25849
吩咐	ffi	25347
内心	nxo	25231
暗中	vzi	23181
```

其次，利用sbb空间。对于飞码和飞码X，利用的方式是不一样的。

对于飞码，在sbb上安排非强制性二字词简码，其取码规则为s1b1b1，SQL脚本如下。

```
select text=rtrim(zici), code=left(bianma,3)
from spciz
where xuhao in (
select xuhao from (
select bianma=left(bianma,3), xuhao=min(xuhao) 
from spciz
where len(rtrim(zici)) = 2
group by left(bianma,3)
) tmp)
```

一共抽取了451个二字词，罗列其中的前10条如下。

```
告诉	gue
声音	sei
眼睛	yia
一切	yee
改革	gae
朋友	pua
研究	yeu
代表	dui
不禁	beu
支持	zei
```

对于飞码X，在为sbb空间安排二字词时，不能包含已经为其抽取的spb型二字词，脚本如下。

```
select zici = rtrim(zici), bianma = left(bianma,1) + substring(bianma,3,2), 
chupin = case chupin when -1 then 0 else chupin end from sbjerz
where xuhao in (
select xuhao from
(select bianma = left(bianma,1) + substring(bianma,3,2), xuhao = min(xuhao) from sbjerz
where rtrim(zici) not in (
select zici from (
select zici = rtrim(zici), bianma = left(bianma,3), 
chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 3 and left(bianma,3) not in (
select bianma = left(a.bianma,3)
from spdanz a
right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)
where a.changdu = 3 and b.changdu = 3)
) tmp)
group by left(bianma,1) + substring(bianma,3,2)) tmp2)
```

一共抽取了525个s1b2b2型的二字词，罗列其中的前10条如下。

```
一个	yuo	997773
没有	meu	826617
我们	wui	812417
他们	tui	791018
什么	sua	742524
自己	zae	741012
知道	zou	574771
可以	kao	432546
这个	zuo	404217
就是	jia	376685
```

### 快码（X）

首先，利用sy空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。

```
select zici = rtrim(zici), bianma = left(bianma,2), chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 2 and left(bianma,2) not in (
select bianma = left(a.bianma,2)
from ybdanz a
right join sbjerz b on left(a.bianma,2) = left(b.bianma,2)
where a.changdu = 2 and b.changdu = 2)
```

一共抽取了95个ss型的二字词，罗列其中的前10条如下。

```
可以	ky	432546
已经	yj	325164
发展	fz	323016
问题	wt	279209
一定	yd	201525
可能	kn	185841
今天	jt	173941
觉得	jd	172314
姑娘	gn	168226
一些	yx	165456
```

第二，利用syb空闲空间。从声笔简码的二字词中抽出高频的填入该空间，脚本如下。

```
select zici = rtrim(zici), bianma = left(bianma,3), chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 3 and left(bianma,3) not in (
select bianma = left(a.bianma,3)
from ybdanz a
right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)
where a.changdu = 3 and b.changdu = 3)
order by chupin desc
```

一共抽取了587个ssb型的二字词，罗列其中的前10条如下。

```
一个	ygu	997773
我们	wmu	812417
起来	qle	330495
还有	hye	191450
一点	ydi	189033
而且	vqi	176585
一下	yxe	167905
之间	zjo	139129
下来	xle	134533
眼睛	yji	133992
```

第三，利用sbb空间。对于快码和快码X，利用的方式是不一样的。

对于快码，在sbb上安排非强制性二字词简码，其取码规则为s1b1b1，SQL脚本如下。

```
select text=rtrim(zici), code=left(bianma,3)
from ybciz
where xuhao in (
select xuhao from (
select bianma=left(bianma,3), xuhao=min(xuhao) 
from ybciz
where len(rtrim(zici)) = 2
group by left(bianma,3)
) tmp)
```

一共抽取了454个二字词，罗列其中的前10条如下。

```
经济	jaa
社会	soa
世界	sei
市场	soe
开始	kee
技术	jei
希望	xuo
表示	bee
改革	gae
国际	gia
```

对于快码X，在为sbb空间安排二字词时，不能包含已经为其抽取的sy和syb型二字词，脚本如下。

```
select zici = rtrim(zici), bianma = left(bianma,1) + substring(bianma,3,2),
chupin = case chupin when -1 then 0 else chupin end from sbjerz
where xuhao in (
select xuhao from
(select bianma = left(bianma,1) + substring(bianma,3,2), xuhao = min(xuhao) from sbjerz
where rtrim(zici) not in (
select zici from (
select zici = rtrim(zici), bianma = left(bianma,2),
chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 2 and left(bianma,2) not in (
select bianma = left(a.bianma,2)
from ybdanz a
right join sbjerz b on left(a.bianma,2) = left(b.bianma,2)
where a.changdu = 2 and b.changdu = 2)
union
select zici = rtrim(zici), bianma = left(bianma,3),
chupin = case chupin when -1 then 0 else chupin end from sbjerz
where changdu = 3 and left(bianma,3) not in (
select bianma = left(a.bianma,3)
from ybdanz a
right join sbjerz b on left(a.bianma,3) = left(b.bianma,3)
where a.changdu = 3 and b.changdu = 3)
) tmp)
group by left(bianma,1) + substring(bianma,3,2)) tmp2)
```

一共抽取了525个s1b2b2型的二字词，罗列其中的前10条如下。

```
没有	meu	826617
他们	tui	791018
什么	sua	742524
自己	zae	741012
知道	zou	574771
这个	zuo	404217
就是	jia	376685
中国	zia	336314
这样	zei	328523
因为	you	317518
```

### 公共

无论是飞码（X）还是快码（X），都还要利用sbbbx空间。将sbbb空间用于声笔单字输入，只有1、2级强制简码，重码字用aeiou来选择。声笔单字供用户在不知道偏旁部首或韵母时使用。‸

对于非X型的，脚本如下：

```
select zici = rtrim(zici), bianma = left(bianma,changdu),
chupin, stem = left(bianma,4) + upper(left(bianma,1))
from sbdanz where changdu <= 2
union
select zici = rtrim(zici), bianma = left(bianma,4),
chupin = case chupin when -1 then 0 else chupin end,
stem = left(bianma,4) + upper(left(bianma,1))
from sbdanz where changdu > 2
order by chupin desc
```

对于X型的，由于正码的单字码表中已经包含了1、2级简码，并且不再需要构词码，所以脚本如下：

```
select zici = rtrim(zici), bianma = left(bianma,4),
chupin = case chupin when -1 then 0 else chupin end
from sbdanz where changdu > 2
```

## 105个sb简码字的提示

制作一个滤镜供飞码（X）和快码（X）使用，包括sb105.txt和sb105.json，放在Rime的OpenCC子文件夹中。

sb105.txt的内容如下：

```
不	&nbsp边a&nbsp把e&nbsp别i&nbsp部o&nbsp白u&nbsp
出	&nbsp除a&nbsp成e&nbsp此i&nbsp次o&nbsp从u&nbsp
的	&nbsp对a&nbsp大e&nbsp当i&nbsp道o&nbsp得u&nbsp
发	&nbsp飞a&nbsp夫e&nbsp非i&nbsp方o&nbsp分u&nbsp
个	&nbsp给a&nbsp过e&nbsp国i&nbsp高o&nbsp公u&nbsp
和	&nbsp好a&nbsp还e&nbsp回i&nbsp话o&nbsp会u&nbsp
就	&nbsp经a&nbsp进e&nbsp见i&nbsp家o&nbsp几u&nbsp
可	&nbsp孔a&nbsp开e&nbsp口i&nbsp快o&nbsp看u&nbsp
了	&nbsp力a&nbsp来e&nbsp里i&nbsp立o&nbsp利u&nbsp
们	&nbsp民a&nbsp面e&nbsp明i&nbsp没o&nbsp么u&nbsp
你	&nbsp那a&nbsp南e&nbsp内i&nbsp农o&nbsp年u&nbsp
平	&nbsp皮a&nbsp破e&nbsp品i&nbsp怕o&nbsp片u&nbsp
去	&nbsp强a&nbsp起e&nbsp且i&nbsp前o&nbsp全u&nbsp
人	&nbsp如a&nbsp若e&nbsp日i&nbsp让o&nbsp然u&nbsp
是	&nbsp双a&nbsp事e&nbsp上i&nbsp说o&nbsp手u&nbsp
他	&nbsp她a&nbsp天e&nbsp同i&nbsp头o&nbsp体u&nbsp
而	&nbsp阿a&nbsp二e&nbsp暗i&nbsp安o&nbsp儿u&nbsp
我	&nbsp维a&nbsp无e&nbsp晚i&nbsp为o&nbsp外u&nbsp
下	&nbsp线a&nbsp想e&nbsp小i&nbsp心o&nbsp笑u&nbsp
一	&nbsp也a&nbsp有e&nbsp眼i&nbsp意o&nbsp用u&nbsp
在	&nbsp子a&nbsp正e&nbsp中i&nbsp着o&nbsp自u&nbsp
```

sb105.json的内容如下：

```
{
  "name": "sb105",
  "segmentation": {
    "type": "mmseg",
    "dict": {
      "type": "text",
      "file": "sb105.txt"
    }
  },
  "conversion_chain": [{
    "dict": {
      "type": "text",
      "file": "sb105.txt"
    }
  }]
}
```

另外，再创建为飞码、飞码X、快码和快码X分别创建一个配置文件：sbfm.custom.yaml, sbfmx.custom.yaml, sbkm.custom.yaml和sbkmx.custom.yaml，放在Rime文件夹中。这个几个文件的内容完全一样，如下所示。

```
patch:
  "switches/@next": 
    name: sb105
    reset: 1 #初始状态,0关1开

  "engine/filters/@next": simplifier@sb105
  sb105:
    opencc_config: sb105.json
    option_name: sb105
    show_in_comment: true #开启编码滤镜
    comment_format:  #编码滤镜正则处理
      - "xform/<br>/\n/" #编码滤镜内容换行
      - "xform/&nbsp/ /" #编码滤镜内容显示空格
    tags:
      - abc
    tips: char #none无注释,char单字注释,all全部注释
```

完成以上步骤后，重新部署就可以生效。

在计算机上的声笔字提示效果如下：

![电脑上的声笔字提示](/images/sb105prompt1.png)

在手机上的声笔字提示效果效果如下：

![电脑上的声笔字提示](/images/sb105prompt2.jpg)

## 实验结果

使用发现，开滤镜提示sb字后，导致一简字不能参与造词。还没有找到解决办法，只能暂时放弃滤镜。

## 结论

保留码表优化结果，暂时放弃用滤镜提示声笔字的功能。
