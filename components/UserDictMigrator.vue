<script setup lang="ts">
import * as naiveui from "naive-ui";
const { NButton } = naiveui;
function handleFileUpload() {
  // Handle file upload logic here
}
function processFile() {
  // Process the uploaded file logic here
}
function downloadFile() {
  // Download the processed file logic here
}
</script>
<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileUpload" />
    <n-button @click="processFile">Process File</n-button>
    <n-button @click="downloadFile">Download Processed File</n-button>
  </div>
</template>
