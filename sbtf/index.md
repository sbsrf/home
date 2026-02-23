---
sidebar: false
editLink: false
lastUpdated: false
---

<script setup>
import Practice from '../components/Practice.vue'
import { ref, computed, watch } from 'vue'

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
  }
};

// 当前选择的方案
const selectedScheme = ref('feixi');

// 根据选择的方案生成 data 数组
const data = computed(() => {
  const result = [];
  const keymap = schemes[selectedScheme.value].keymap;
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

# 声笔条反

利用科学方法高效记忆声笔输入法各方案中的部首。

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