<script setup lang="ts">
import * as naiveui from "naive-ui";

const { NSpace } = naiveui;
</script>

<template>
  <n-space vertical :align="'center'">
    <div>
      <span id="busuanzi_container_site_uv">
        已有&nbsp;<span id="busuanzi_value_site_uv"></span>&nbsp;人来访，
      </span>
      <span id="busuanzi_container_site_pv">
        共访问&nbsp;<span id="busuanzi_value_site_pv"></span>&nbsp;次
      </span>
    </div>
    <div style="margin: 2rem; font-size: 2rem">
      继续了解……
    </div>
  </n-space>
</template>
