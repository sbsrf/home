import { computed, ref } from "vue";
import { useBreakpoint } from "vooks";
import { LambdaWorker, asyncFS } from "@libreservice/my-worker";
import { darkTheme, lightTheme } from "naive-ui";

export const theme = ref(darkTheme);

export const sync = () => {
  theme.value = document.documentElement.className.split(" ").includes("dark")
    ? darkTheme
    : lightTheme;
  setTimeout(sync, 100);
}

export const imeKey = Symbol()
export const selectIMEKey= Symbol()
export const loadingKey = Symbol()
export const asciiModeKey = Symbol()
export const asciiPunctKey = Symbol()
export const workerKey = Symbol()
export const textKey = Symbol()
export const syncOptionsKey = Symbol()
export const changeLanguageKey = Symbol()
export const changePunctuationKey = Symbol()

export default class LibrimeWorker {
  private worker: LambdaWorker;
  setIME: (ime: string) => Promise<void>;
  setOption: (option: string, value: boolean) => Promise<void>;
  setPageSize: (size: number) => Promise<void>;
  process: (input: string) => Promise<any>;
  resetUserDirectory: (index: number) => Promise<string>;
  selectCandidateOnCurrentPage: (key: number) => Promise<any>;
  constructor() {
    const worker = new LambdaWorker("/worker.js");
    this.worker = worker;
    this.setIME = worker.register("setIME");
    this.setOption = worker.register("setOption");
    this.setPageSize = worker.register("setPageSize");
    this.process = worker.register("process");
    this.selectCandidateOnCurrentPage = worker.register(
      "selectCandidateOnCurrentPage"
    );
    this.resetUserDirectory = worker.register("resetUserDirectory");
  }
}

const breakpoint = useBreakpoint();
export const isMobile = computed(() => breakpoint.value === "xs");

const textareaSelector = "#container textarea";

export function getTextarea() {
  return document.querySelector(textareaSelector) as HTMLTextAreaElement;
}

type RIME_COMMITTED = {
  state: 0
  committed: string
}
type RIME_ACCEPTED = {
  state: 1
  committed?: string,
  head: string
  body: string,
  tail: string,
  page: number
  isLastPage: boolean
  highlighted: number
  selectLabels?: string[]
  candidates: {
    text: string
    comment?: string
  }[]
}
type RIME_REJECTED = {
  state: 2
  updatedSchema?: string
}
type RIME_UNHANDLED = {
  state: 3
}
type RIME_UPDATED_OPTIONS = {
  updatedOptions?: string[]
}

export type RIME_RESULT = (RIME_COMMITTED | RIME_ACCEPTED | RIME_REJECTED | RIME_UNHANDLED) & RIME_UPDATED_OPTIONS
