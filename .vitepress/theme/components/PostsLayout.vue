<template>
    <div class="posts-layout">
        <!-- 主内容区域 -->
        <main class="posts-main">
            <h1>博客文章</h1>
            <div v-if="selectTag" class="filter-info">
                显示「{{ selectTag }}」标签下的文章
                <button @click="toggleTag('')" class="clear-btn">清除筛选</button>
            </div>
            <div v-for="yearList in displayPosts" :key="yearList.year">
                <div class="year">{{ yearList.year }}</div>
                <a 
                    :href="withBase(article.link)" 
                    v-for="(article, index) in yearList.posts" 
                    :key="index" 
                    class="posts"
                >
                    <div class="post-container">
                        <div class="post-dot">•</div>
                        <span>{{ article.frontMatter.title }}</span>
                    </div>
                    <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
                </a>
            </div>
        </main>

        <!-- 右侧边栏：标签 -->
        <aside class="posts-aside">
            <div class="aside-title">标签</div>
            <div class="tags-container">
                <span 
                    @click="toggleTag(String(key))" 
                    v-for="(_, key) in tagsData" 
                    :key="key"
                    :class="['tag', { 'active': selectTag === key }]"
                >
                    {{ key }} <strong>{{ tagsData[key].length }}</strong>
                </span>
            </div>
        </aside>
    </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed, ref } from 'vue'
import { useYearSort, initTags } from '../functions'
import type { Post } from '../functions'

const { theme } = useData()

// 获取所有文章，按年份分组
const allYearPosts = computed(() => {
    try {
        const sorted = useYearSort(theme.value)
        if (!sorted || sorted.length === 0) return []
        return sorted.filter(posts => posts && posts.length > 0).map((posts) => ({
            year: posts[0].frontMatter.date.split('-')[0],
            posts: posts
        }))
    } catch (e) {
        console.error('Error in allYearPosts:', e)
        return []
    }
})

// 标签数据
const tagsData = computed(() => {
    try {
        return initTags(theme.value)
    } catch (e) {
        console.error('Error in tagsData:', e)
        return {}
    }
})

const selectTag = ref('')

// 根据选中的标签过滤文章
const displayPosts = computed(() => {
    if (!selectTag.value) {
        return allYearPosts.value
    }
    
    // 获取选中标签下的所有文章
    const taggedPosts = tagsData.value[selectTag.value] || []
    if (taggedPosts.length === 0) return []
    
    // 按年份重新分组
    const grouped: Record<string, Post[]> = {}
    taggedPosts.forEach(post => {
        const year = post.frontMatter.date.split('-')[0]
        if (!grouped[year]) {
            grouped[year] = []
        }
        grouped[year].push(post)
    })
    
    // 转换为数组格式，并按年份倒序
    return Object.keys(grouped)
        .sort((a, b) => b.localeCompare(a))
        .map(year => ({
            year,
            posts: grouped[year]
        }))
})

const toggleTag = (tag: string) => {
    selectTag.value = selectTag.value === tag ? '' : tag
}
</script>

<style scoped>
.posts-layout {
    display: flex;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* 主内容区域 */
.posts-main {
    flex: 1;
    min-width: 0;
}

.filter-info {
    padding: 1rem;
    background-color: var(--vp-c-brand-soft);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.clear-btn {
    padding: 0.5rem 1rem;
    background-color: var(--vp-c-brand);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s;
}

.clear-btn:hover {
    background-color: var(--vp-c-brand-2);
}

.year {
    padding: 14px 0 8px 0;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: var(--date-font-family), serif;
}

.posts {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.post-container {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
    overflow: hidden;
}

.post-container span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.date {
    color: var(--vp-c-text-3);
    font-size: 0.9rem;
    margin-left: 1.5rem;
    white-space: nowrap;
    flex-shrink: 0;
}

/* 右侧边栏 */
.posts-aside {
    width: 320px;
    flex-shrink: 0;
    border-left: 1px solid var(--vp-c-divider);
    padding-left: 2rem;
}

.aside-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--vp-c-text-1);
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    font-size: 0.85rem;
    line-height: 1.4;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    color: var(--vp-c-text-2);
    cursor: pointer;
    transition: all 0.2s;
}

.tag:hover {
    background-color: var(--vp-c-brand-soft);
    color: var(--vp-c-brand);
    border-color: var(--vp-c-brand);
}

.tag.active {
    background-color: var(--vp-c-brand);
    color: white;
    border-color: var(--vp-c-brand);
}

.tag strong {
    color: var(--vp-c-brand);
    margin-left: 0.25rem;
    font-size: 0.75rem;
}

.tag.active strong {
    color: white;
}

.post-dot {
    display: inline-block;
    margin-right: 0.5rem;
    color: var(--vp-c-brand);
    font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 968px) {
    .posts-aside {
        display: none;
    }
    
    .posts-main {
        width: 100%;
    }
}
</style>
