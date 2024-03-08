<script setup lang="ts">
import {
  NButton,
  NUpload,
  NUploadDragger,
  NText,
  NSpace,
  NIcon,
  NConfigProvider,
  NResult,
  darkTheme,
} from "naive-ui";

import { FileArchive } from "@vicons/fa";
import { CustomRequestOptions } from "naive-ui/es/upload/src/interface";
import { ref } from "vue";

const content = ref<string>("");
const filename = ref<string>("");

const transform = (code: string) => {
  return code
    .replace(
      /([bpmfdtnlgkhjqxzcsrywv]{3})([bpmfdtnlgkhjqxzcsrywv])([aeiou]{2})([aeiou])/,
      "$1$4$3$2"
    )
    .toLowerCase();
};

const main = (content: string) => {
  const lines = content.trim().split("\n");
  const filtered: string[] = [];
  let entries = 0;
  for (const line of lines) {
    if (line.startsWith("#")) {
      filtered.push(line);
      continue;
    }
    try {
      const [_code, _word, value] = line.trim().split("\t");
      const [completion, word] = _word.split(" ");
      const code = transform(_code.trim() + completion) + " ";
      const c = Number(value.replace(/c=(\d+) .+/, "$1"));
      if (c >= 888) {
        const new_value = value.replace(/c=(\d+) /, `c=${c - 887} `);
        const line = [code, word, new_value].join("\t");
        filtered.push(line);
        entries += 1;
      }
    } catch {
      console.error(`无法识别：${line}`);
    }
  }
  return filtered.join("\n");
};

function processFile({ file }: CustomRequestOptions) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const result = reader.result;
    if (typeof result === "string") {
      content.value = main(result);
    }
  });
  filename.value = file.name;
  reader.readAsText(file.file as File);
}

function downloadFile() {
  const blob = new Blob([content.value], { type: "text/plain" });
  const a = document.createElement("a");
  a.download = filename.value;
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.click();
  window.URL.revokeObjectURL(url); // 避免内存泄漏
}
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-space vertical :align="'center'">
      <n-upload directory-dnd :custom-request="processFile" :accept="'.txt'">
        <n-upload-dragger>
          <div style="margin-bottom: 12px">
            <n-icon size="48" :depth="3">
              <file-archive />
            </n-icon>
          </div>
          <n-text style="font-size: 16px">
            点击或者拖动文件到该区域来上传
          </n-text>
        </n-upload-dragger>
      </n-upload>
      <n-result v-if="content.length > 0" status="success" :description="`转换成功，共 ${content.split('\n').length
    } 条`">
        <template #footer>
          <n-button :on-click="downloadFile">下载</n-button>
        </template>
      </n-result>
    </n-space>
  </n-config-provider>
</template>
