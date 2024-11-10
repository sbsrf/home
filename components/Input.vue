<script setup lang="ts">
import { NConfigProvider, NInput, NSpace } from "naive-ui";
import MyMenu from "./Menu.vue";
import MyPanel from "./Panel.vue";
import { onMounted, provide, ref } from "vue";
import LibrimeWorker, {
  asciiModeKey,
  asciiPunctKey,
  changeLanguageKey,
  changePunctuationKey,
  imeKey,
  loadingKey,
  selectIMEKey,
  syncOptionsKey,
  textKey,
  workerKey,
} from "../src/util";
import { theme, sync } from "../src/util";

const props = defineProps<{ method?: string; disableSwitch?: boolean }>();

const ASCII_MODE = "ascii_mode";
const ASCII_PUNCT = "ascii_punct";

function setLoading(value: boolean) {
  loading.value = value;
  ime.value = value ? "" : schemaId.value;
}

const worker = ref<LibrimeWorker | undefined>(undefined);
const text = ref<string>("");
const schemaId = ref<string>(props.method ?? "sbjm");
const ime = ref<string>("");
const loading = ref<boolean>(true);
const isEnglish = ref<boolean>(false);
const isEnglishPunctuation = ref<boolean>(false);

const basicOptionMap = {
  [ASCII_MODE]: isEnglish,
  [ASCII_PUNCT]: isEnglishPunctuation,
};

const makeToggle = (option: keyof typeof basicOptionMap) => async () => {
  const box = basicOptionMap[option];
  const newValue = !box.value;
  await worker.value!.setOption(option, newValue);
  box.value = newValue;
};

const changeLanguage = makeToggle(ASCII_MODE);
const changePunctuation = makeToggle(ASCII_PUNCT);

async function selectIME(targetIME: string) {
  setLoading(true);
  try {
    await worker.value!.setIME(targetIME);
    schemaId.value = targetIME;
    for (const [option, box] of Object.entries(basicOptionMap)) {
      if (option === ASCII_MODE) {
        // librime resets Chinese
        box.value = false;
        continue;
      }
      // Other options aren't specific to a schema
      await worker.value!.setOption(option, box.value);
    }
  } catch (e) {
    console.error(e);
  }
  setLoading(false);
}

function syncOptions(updatedOptions: string[]) {
  if (updatedOptions.length === 1) {
    // global options or binary variant
    const updatedOption = updatedOptions[0];
    for (const [option, box] of Object.entries(basicOptionMap)) {
      if (option === updatedOption) {
        box.value = true;
        return;
      }
      if (`!${option}` === updatedOption) {
        box.value = false;
        return;
      }
    }
  }
}

provide(imeKey, ime);
provide(selectIMEKey, selectIME);
provide(loadingKey, loading);
provide(asciiModeKey, isEnglish);
provide(asciiPunctKey, isEnglishPunctuation);
provide(changeLanguageKey, changeLanguage);
provide(changePunctuationKey, changePunctuation);
provide(textKey, text);
provide(syncOptionsKey, syncOptions);
provide(workerKey, worker);

onMounted(async () => {
  worker.value = new LibrimeWorker();
  sync();
  await selectIME(schemaId.value);
});

const panel = ref<InstanceType<typeof MyPanel>>();
</script>

<template>
  <n-config-provider :theme="theme">
    <keep-alive>
      <n-space vertical>
        <my-menu :disable-switch="props.disableSwitch" />
        <n-input
          id="container"
          v-model:value="text"
          type="textarea"
          :rows="15"
        />
        <my-panel ref="panel" />
      </n-space>
    </keep-alive>
  </n-config-provider>
</template>
