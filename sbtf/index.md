---
sidebar: false
editLink: false
lastUpdated: false
---

<script setup>
import Practice from '../components/Practice.vue'

const keymap = {
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
  // 告 只取上半部分，即牛字头
  n: "女牛告鸟鳥衤礻廾止",
  m: "马馬门門毛木皿目麻米麦麥母毋毌",
};

const data = [];
Object.entries(keymap).map(([key, group]) => {
  Array.from(group).forEach((radical) => {
    data.push([radical, key]);
  });
})
</script>

# 声笔条反

利用科学方法高效记忆飞系方案中的部首。

<ClientOnly>
<Practice :data="data" name="feixi"/>
</ClientOnly>
