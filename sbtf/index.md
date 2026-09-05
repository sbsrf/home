---
sidebar: false
editLink: false
lastUpdated: false
prev: false
next: false
---

<script setup>
import Practice from '../components/Practice.vue'
import { ref, computed, watch } from 'vue'

// 象码无理字：无法按规则推导出编码的汉字，需要直接记忆其编码
const wlziData = `
吧	ba
跳	bt
擦	cee
蝉	cie
错	cq
搓	cue
得	da
敌	dc
点	dm
都	dn
第	do
对	dy
父	fa
曾	fc
翡	fee
及	fj
类	fm
线	fo
须	fp
息	fx
再	fz
击	ga
纠	gf
决	gh
观	gp
功	gq
原	gy
化	hc
黄	hd
或	hu
合	hy
海	hz
间	jg
嫉	jio
双	ka
易	kb
颗	kc
语	kf
量	kl
世	km
药	kp
元	ku
义	ky
政	kz
两	lc
庐	lgo
赂	lia
喇	loe
论	lz
蔓	mau
么	mb
幕	me
民	ml
号	mt
木	mw
运	my
做	mz
娘	nb
斗	nd
斯	ne
宋	ng
四	nh
己	nj
米	nm
弩	nne
使	ns
式	nv
李	nw
像	nx
者	nz
智	pa
舌	pb
身	pc
德	pd
九	pe
急	pf
质	ph
血	pi
金	pl
众	pm
促	pp
八	pq
行	pt
议	py
直	pz
结	qj
期	qn
趋	qua
前	qy
似	ra
谁	rb
电	rd
认	re
送	rf
候	rh
水	rl
任	rm
受	ro
什	rs
师	rt
首	rv
西	rx
制	rz
山	sa
实	sg
韶	slo
宿	soo
雷	tb
依	tf
特	tk
界	tm
约	tq
央	tv
它	tx
总	tz
早	va
则	ve
酒	vf
官	vg
哦	vh
资	vk
六	vl
江	vm
指	vp
造	vq
找	vt
准	vv
娱	vva
酱	vvo
饥	vvu
整	vw
先	vx
员	vy
晏	vyi
渊	vyo
饺	vyu
物	wa
务	we
掉	wk
市	wm
望	wn
交	wt
系	wx
文	wy
五	wz
性	xa
薰	xea
犀	xpa
信	xq
相	xy
娅	yaa
逾	yae
意	ye
月	yn
业	yp
曰	yue
要	yz
绽	zaa
旨	ziu
作	zm
诏	zwo
只	zy
`.trim().split('\n').map((line) => {
  const [char, code] = line.trim().split(/\s+/)
  return [char, code]
})

// 飞单声笔字：声笔飞单方案中需要直接记忆编码的汉字
const fdsbData = `
有	ye
道	do
来	le
她	ta
大	de
上	si
中	zi
说	so
为	wo
着	zo
子	za
那	na
也	ya
得	du
会	hu
国	gi
名	mu
心	xo
过	ge
好	ha
然	ru
对	da
自	zu
小	xi
天	te
看	ku
手	su
里	li
家	jo
起	qe
想	xe
事	se
还	he
如	ra
面	me
无	we
头	to
方	fo
开	ke
前	qo
见	ji
成	ce
用	yu
经	ja
笑	xu
年	nu
当	di
日	ri
意	yo
此	ci
进	je
把	be
同	ti
全	qu
回	hi
力	la
分	fu
高	go
话	ho
儿	vu
明	mi
眼	yi
正	ze
从	cu
口	ki
外	wu
公	gu
门	mo
民	ma
二	ve
部	bo
白	bu
给	ga
内	ni
几	ju
别	bi
次	co
立	lo
体	tu
安	vo
快	ko
夫	fe
利	lu
让	ro
边	ba
双	sa
强	qa
非	fi
飞	fa
南	ne
若	re
且	qi
怕	po
暗	vi
农	no
品	pi
片	pu
晚	wi
阿	va
除	ca
破	pe
线	xa
维	wa
皮	pa
孔	ka
`.trim().split('\n').map((line) => {
  const [char, code] = line.trim().split(/\s+/)
  return [char, code]
})

// 定义多个方案的 keymap
const schemes = {
  feixi: {
    name: '声笔飞系',
    keymap: {
      q: "气欠犬犭青其攴",
      w: "韦文瓦王攵夂夊亠韋",
      r: "人亻",
      t: "田土士",
      y: "又用业页頁衣羊言讠音酉尢疋",
      p: "片皮⺮丿彡",
      s: "十山尸手水石矢舌身鼠示食饣飠殳豕丨厶",
      d: "刀大歹斗鬥豆丶冫氵癶",
      f: "方风風父缶扌",
      g: "工弓广戈瓜革鬼骨艮宀冖",
      h: "一户火禾黑虍",
      j: "几己巾斤见見臼角金钅釒纟糹",
      k: "口囗匚凵冂",
      l: "力立龙龍里鹿耒刂忄廴辶灬卤鹵",
      z: "乙子舟自走豸隹足⻊爪爫丬爿罒長巛",
      x: "夕小心穴血覀辛彐糸⺍⺌",
      c: "厂寸车車虫赤辰齿齒彳艹卝屮",
      v: "二儿耳月日曰羽鱼魚雨聿阝卩",
      b: "八比贝貝白鼻卜髟勹疒丷",
      n: "女牛⺧鸟鳥衤礻廾止",
      m: "马馬门門毛木皿目麻米麦麥母毋毌",
    }
  },
  fdsb: {
    name: '飞单声笔字',
    data: fdsbData,
  },
  sbxm: {
    name: '声笔象码',
    keymap: {
      q: "气刀力方马犭馬\ue078\ue40f",
      w: "五讠亠丶",
      e: "山巾彐\ue018\ue03e\ue0b4丨",
      r: "八亻丿",
      t: "土士干雨田\ue002",
      y: "言厶衤礻鱼也魚\ue434龴",
      u: "月用文夕攵夂食飠饣\ue0cd\ue423\ue0bc",
      i: "日灬宀冖曰",
      o: "口囗",
      p: "尸毛小大彳车車",
      a: "金人钅釒",
      s: "石丆一",
      d: "米二工冫丷\ue41e\ue0e3\ue001\ue088\ue00d",
      f: "王三目罒龶四\ue428",
      g: "广疒厂古弓\ue409\ue422\ue0b7\ue079",
      h: "贝且火禾貝\ue419\ue024\ue404\ue40c\ue057\ue40e\ue454",
      j: "丁扌刂九子孑了斤乛",
      k: "十廿艹廾龷丬䒑又",
      l: "立七匕弋戈戋幺纟辛糹\ue417\ue023乚",
      z: "之辶廴舟豸豕爫⺮",
      x: "西酉彡心乂覀忄\ue068",
      c: "长川门匚凵冂虫寸镸長門\ue009\ue007\ue44a\ue02a\ue418",
      v: "水氵皿手氺龵\ue42d\ue448\ue407\ue436",
      b: "耳巴勹卩阝㔾巳",
      n: "女白臼乃止足几儿龰\ue07f",
      m: "木卜朩\ue430\ue42e\ue42f\ue408\ue405\ue402"
    }
  },
  wlzi: {
    name: '象码无理字',
    data: wlziData,
  }
};

// 当前选择的方案
const selectedScheme = ref('feixi');

// 根据选择的方案生成 data 数组
const data = computed(() => {
  const scheme = schemes[selectedScheme.value];
  // 无理字等练习直接提供 [内容, 编码] 数据对
  if (scheme.data) {
    return scheme.data;
  }
  const result = [];
  const keymap = scheme.keymap;
  Object.entries(keymap).map(([key, group]) => {
    Array.from(group).forEach((radical) => {
      result.push([radical, key]);
    });
  });
  return result;
});

// 练习组件的名称，用于 localStorage 存储
const practiceName = computed(() => {
  return `sbtf_${selectedScheme.value}`;
});
</script>

# 条反练习

利用科学方法高效记忆声笔输入法各方案中的部首或字根。

<ClientOnly>
<div style="margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
  <label for="scheme-select" style="margin-right: 8px;">选择方案：</label>
  <select 
    id="scheme-select" 
    v-model="selectedScheme" 
    style="padding: 4px 8px; border-radius: 4px; border: 1px solid #ccc;"
  >
    <option 
      v-for="(scheme, key) in schemes" 
      :key="key" 
      :value="key"
    >
      {{ scheme.name }}
    </option>
  </select>
</div>
<Practice :data="data" :name="practiceName"/>
</ClientOnly>