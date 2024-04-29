---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 声笔输入法
  text: 顶功输入新体验
  tagline: 简单高效、系统全面的中文输入解决方案
  image:
    src: /logo.svg
    alt: sbxlm
  actions:
    - theme: brand
      text: 开始学习
      link: /about/
    - theme: alt
      text: 在线体验
      link: /sbkd/
    - theme: alt
      text: 立刻下载
      link: https://github.com/sbsrf/home/releases
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import MaxWidthWrapper from './components/MaxWidthWrapper.vue'
import Statistics from './components/Statistics.vue'
</script>

<ClientOnly>
  <Statistics />
</ClientOnly>

<MaxWidthWrapper>
<img src="https://singbit.pages.dev/images/slice22.webp" loading="lazy" alt="特性集锦">
<img src="https://singbit.pages.dev/images/slice21.webp" loading="lazy" alt="那个声笔">
<img src="https://singbit.pages.dev/images/slice9.webp" loading="lazy" alt="有理有据">
<img src="https://singbit.pages.dev/images/slice2.webp" loading="lazy" alt="顶功">
<img src="https://singbit.pages.dev/images/slice3.webp" loading="lazy" alt="字频">
<img src="https://singbit.pages.dev/images/slice6.webp" loading="lazy" alt="声笔理念">
<img src="https://singbit.pages.dev/images/slice10.webp" loading="lazy" alt="词组效率">
<img src="https://singbit.pages.dev/images/slice11.webp" loading="lazy" alt="扩展编码">
<img src="https://singbit.pages.dev/images/slice12.webp" loading="lazy" alt="自动造词">
<img src="https://singbit.pages.dev/images/slice13.webp" loading="lazy" alt="字词分流">
<img src="https://singbit.pages.dev/images/slice14.webp" loading="lazy" alt="自动码长">
<img src="https://singbit.pages.dev/images/slice15.webp" loading="lazy" alt="单词切换">
<img src="https://singbit.pages.dev/images/slice20.webp" loading="lazy" alt="开始声笔之路">
<img src="https://singbit.pages.dev/images/slice16.webp" loading="lazy" alt="方案选择">
<img src="https://singbit.pages.dev/images/slice17.webp" loading="lazy" alt="声笔简码">
<img src="https://singbit.pages.dev/images/slice18.webp" loading="lazy" alt="声笔飞单">
<img src="https://singbit.pages.dev/images/slice19.webp" loading="lazy" alt="声笔飞码">
<img src="https://singbit.pages.dev/images/slice4.webp" loading="lazy" alt="击键数分布">
<img src="https://singbit.pages.dev/images/slice7.webp" loading="lazy" alt="字频1">
<img src="https://singbit.pages.dev/images/slice8.webp" loading="lazy" alt="字频2">
<img src="https://singbit.pages.dev/images/slice5.webp" loading="lazy" alt="打字效率">
<img src="https://singbit.pages.dev/images/slice23.webp" loading="lazy" alt="可选打法">
</MaxWidthWrapper>
