<script setup lang="ts">
import { NButton, NButtonGroup, NSpace, NSelect } from "naive-ui";
import {
  getTextarea,
  imeKey,
  selectIMEKey,
  loadingKey,
  asciiModeKey,
  asciiPunctKey,
  changeLanguageKey,
} from "../src/util";
import { Ref, inject } from "vue";

const props = defineProps<{ disableSwitch?: boolean }>();

const ime = inject<Ref<string>>(imeKey);
const selectIME = inject<(s: string) => void>(selectIMEKey)!;
const selectOptions = [
  { label: "声笔简码", value: "sbjm" },
  { label: "声笔拼音", value: "sbpy" },
  { label: "声笔飞码", value: "sbfm" },
  { label: "声笔飞单", value: "sbfd" },
  { label: "声笔飞讯", value: "sbfx" },
  { label: "声笔小鹤", value: "sbxh" },
  { label: "声笔自然", value: "sbzr" },
];
const loading = inject<Ref<boolean>>(loadingKey)!;
const isEnglish = inject<Ref<boolean>>(asciiModeKey)!;
const changeLanguage = inject<() => void>(changeLanguageKey)!;
const isEnglishPunctuation = inject<boolean>(asciiPunctKey)!;

function resetFocus() {
  getTextarea().focus();
}

function onSelectIME(value: string) {
  resetFocus();
  selectIME!(value);
}
</script>

<template>
  <n-space>
    <n-select
      style="width: 160px"
      :value="ime"
      :options="selectOptions"
      :loading="loading"
      @update:value="onSelectIME"
      :disabled="props.disableSwitch"
    />
    <n-button-group class="square-group" @click="resetFocus">
      <n-button secondary @click="changeLanguage">
        {{ isEnglish ? "En" : "中" }}
      </n-button>
      <n-button secondary :disabled="isEnglish" @click="">
        {{ isEnglishPunctuation ? "." : "。" }}
      </n-button>
    </n-button-group>
  </n-space>
</template>
