<template>
    <div v-for="(posts, key) in data">
        <div class="category">
            {{ key }}
        </div>
        <a :href="withBase(article.link)" v-for="(article, index) in posts" :key="index" class="posts">
            <div class="post-container">
                <div class="post-dot"></div>
                {{ article.frontMatter.title }}
            </div>
            <div class="date">{{ article.frontMatter.date }}</div>
        </a>
        {{ data }}
    </div>
</template>
<script lang="ts" setup>
import { useData, withBase } from "vitepress"
import { computed } from "vue"
import { initCategory } from "../functions"

const { theme } = useData()
const data = computed(() => initCategory(theme.value))
</script>

<style scoped>
.category {
    padding: 14px 0 8px 0;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: var(--date-font-family), serif;
}
</style>
