<template>
    <div class="tag-header">{{ selectTag }}</div>
    <hr />
    <a :href="withBase(article.link)" v-for="(article, index) in selectTag ? data[selectTag] : []" :key="index"
        class="posts">
        <div class="post-container">
            <div class="post-dot"></div>
            {{ article.frontMatter.title }}
        </div>
        <div class="date">{{ article.frontMatter.date }}</div>
    </a>
    <br />
    <!-- 全部标签列表 -->
    <div class="tags">
        <span @click="toggleTag(String(key))" v-for="(_, key) in data" class="tag">
            {{ key }} <strong>{{ data[key].length }}</strong>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import { useData, withBase } from "vitepress"
import { initTags } from "../functions"

const { theme } = useData()
console.log(theme.value)

const data = computed(() => initTags(theme.value))

let url = location.href.split("?")[1]
let params = new URLSearchParams(url)
let selectTag = ref(params.get("tag") ? params.get("tag") : "")
const toggleTag = (tag: string) => {
    selectTag.value = tag
}
</script>

<style scoped>
a {
    text-decoration: none;
}

a:hover {
    background-color: var(--vp-c-bg-alt);
}

.tags {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
}

.tag {
    display: inline-block;
    padding: 2px 8px;
    margin: 4px 4px;
    font-size: 0.8rem;
    line-height: 25px;
    background-color: var(--vp-c-bg-alt);
    transition: 0.4s;
    border-radius: 4px;
    color: var(--vp-c-text-1);
    cursor: pointer;
}

.tag:hover {
    background-color: var(--vp-c-gray-3);
}

.tag strong {
    color: var(--vp-c-brand);
}

.tag-header {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
    text-align: left;
}

@media screen and (max-width: 768px) {
    .tag-header {
        font-size: 1.5rem;
    }

    .date {
        font-size: 0.75rem;
    }
}

.date {
    font-size: 0.8rem;
}
</style>
