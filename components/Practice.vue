<script setup lang="ts">
import { MinPriorityQueue } from "@datastructures-js/priority-queue";
import { supermemo, SuperMemoItem, SuperMemoGrade } from "supermemo";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { shuffle } from "lodash-es";
import * as naiveui from "naive-ui";

const {
  NButton,
  NConfigProvider,
  NProgress,
  NSpace,
  NCard,
  NModal,
  NInput,
  NP,
  NH1,
  NUl,
  NLi,
  NA,
  darkTheme,
} = naiveui;

interface Radical extends SuperMemoItem {
  radical: string;
  key: string;
  due: number;
}

const data = {
  q: "气欠犬犭青其日曰攴",
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
  v: "二儿耳月羽鱼魚雨聿阝卩",
  b: "八比贝貝白鼻卜髟勹疒丷",
  // 告 只取上半部分，即牛字头
  n: "女牛告鸟鳥衤礻廾止",
  m: "马馬门門毛木皿目麻米麦麥母毋毌",
};

const makeCards = () => {
  const radicals: Radical[] = [];
  for (const [key, group] of Object.entries(data)) {
    Array.from(group).forEach((radical) => {
      radicals.push({
        radical,
        key,
        due: new Date().getTime(),
        interval: 1,
        repetition: 0,
        efactor: 2.5,
      });
    });
  }
  return shuffle(radicals);
};

let queue = ref(MinPriorityQueue.fromArray<Radical>(makeCards(), (x) => x.due));
let current = ref<Radical | undefined>(undefined);
let startTime = 0;
let hint = ref(false);

const next = () => {
  if (queue.value.isEmpty()) {
    return;
  }
  current.value = queue.value.dequeue();
  startTime = performance.now();
};

const preceed = () => {
  if (!current.value) return;
  let grade: SuperMemoGrade;
  if (hint.value) {
    hint.value = false;
    grade = 0;
  } else {
    const elapsed = performance.now() - startTime;
    if (elapsed < 600) {
      grade = 5;
    } else if (elapsed < 1000) {
      grade = 4;
    } else {
      grade = 3;
    }
  }
  const updated = supermemo(current.value, grade);
  const radical: Radical = {
    ...current.value,
    ...updated,
    due: current.value.due + updated.interval * 1000 * 60 * 60 * 24,
  };
  queue.value.enqueue(radical);
  localStorage.setItem(
    "super-memo-data",
    JSON.stringify(queue.value.toArray())
  );
  next();
};

/**
 * 重新开始
 */
const restart = () => {
  queue.value.clear();
  makeCards().forEach((item) => queue.value.enqueue(item));
  next();
};

/**
 * 丢弃卡牌
 */
const discard = () => {
  if (!current.value) return;
  next();
};

const process = (input: string) => {
  if (!current) {
    return;
  }
  if (current.value?.key === input.toLowerCase()) {
    preceed();
  } else {
    hint.value = true;
  }
};

const length = computed(() => {
  return queue.value.size();
});

const seen = computed(() => {
  return queue.value.toArray().filter((item) => item.repetition > 0).length;
});

const familiar = computed(() => {
  return queue.value.toArray().filter((item) => item.repetition > 1).length;
});

const cardRef = ref<HTMLElement | null>(null);

const showModal = ref(false);

onMounted(() => {
  const json = localStorage.getItem("super-memo-data");
  if (json) {
    queue.value = MinPriorityQueue.fromArray<Radical>(
      JSON.parse(json),
      (x) => x.due
    );
  }
  next();
  cardRef.value?.focus();
});
</script>
<style>
.button-container {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.radical {
  font-size: 32px;
  text-align: center;
  padding: 16px;
}

.key {
  font-size: 16px;
  text-align: center;
}
</style>
<template>
  <n-config-provider :theme="darkTheme">
    <n-space vertical :size="'large'">
      <div class="button-container">
        <n-button @click="restart">重新开始</n-button>
        <n-button @click="discard">丢弃卡片</n-button>
        <n-button @click="showModal = true">使用说明</n-button>
      </div>
      <n-modal v-model:show="showModal">
        <n-card>
          <n-h1>使用说明</n-h1>
          <n-p>
            程序集成了著名的
            <n-a target="_blank" href="https://supermemo.guru/wiki/SuperMemo"
              >SuperMemo</n-a
            >
            记忆算法，能够有效的帮助用户快速且牢固的记忆声笔飞系的部首所在按键。
          </n-p>
          <n-p>
            在（重新）开始训练时程序会将部首和对应的按键制作成一张张的卡牌，顺序是随机的。卡牌的正面是部首，背面是你需要输入的对应按键。在卡牌显示后，你要以最快的速度按下键盘上相应的按键。
          </n-p>
          <n-ul>
            <n-li>
              如果按键正确，则会自动显示下一张卡牌，且程序会根据你的响应时间来为你的记忆评级。程序会根据这个评级来安排该卡牌下次出现的时间，以便巩固你的记忆。
            </n-li>
            <n-li>如果按键不正确，程序会提示你正确的按键是什么。</n-li>
          </n-ul>
          <n-p>
            程序在运行时自动将当前进度记录到浏览器的本地存储当中，再次打开时会从本地存储中加载进度。
            <strong
              >这个存储是存储在本地的，所以换了浏览器之后就需要重来了。</strong
            >
          </n-p>
        </n-card>
      </n-modal>
      <n-space vertical :align="'center'">
        <n-space :align="'center'">
          已学会<n-progress
            type="line"
            :percentage="(seen / length) * 100"
            style="width: 160px"
            :show-indicator="false"
          />
          {{ `${seen} / ${length}` }}
        </n-space>
        <n-space :align="'center'">
          已熟悉<n-progress
            type="line"
            :percentage="(familiar / length) * 100"
            style="width: 160px"
            :show-indicator="false"
          />
          {{ `${familiar} / ${length}` }}
        </n-space>
      </n-space>
      <n-card>
        <template #header>
          <div class="radical">
            <span>{{ current?.radical }}</span>
            <span v-if="hint">&nbsp;[{{ current?.key }}]</span>
          </div>
          <n-input
            value=""
            @input="(x) => process(x)"
            placeholder="请输入部首对应的按键"
            style="font-size: 16px"
          />
        </template>
        <template #footer> </template>
      </n-card>
    </n-space>
  </n-config-provider>
</template>
