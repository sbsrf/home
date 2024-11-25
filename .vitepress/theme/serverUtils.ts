import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve } from 'path'
import type { Post } from './functions'

async function getPosts(pageSize: number, gen = false) {
    let paths = await globby(['posts/**.md'])

    //生成分页页面markdown
    if (gen) {
        await generatePaginationPages(paths.length, pageSize)
    }

    let posts: Post[] = await Promise.all(
        paths.map(async (item) => {
            const content = await fs.readFile(item, 'utf-8')
            const { data } = matter(content)
            data.date = _convertDate(data.date)
            return {
                frontMatter: data as Post['frontMatter'],
                link: `/${item.replace('.md', '.html')}`,
                text: data.title
            }
        })
    )
    posts.sort(_compareDate as any)
    if (posts[0].link === '/posts/index.html') {
        posts.shift()
    }

    return posts
}

/** 生成 pages/index.md pages/page_1.md... 文件 */
async function generatePaginationPages(total: number, pageSize: number) {
    //  pagesNum
    let pagesNum = total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1
    const paths = resolve('./pages')
    if (total > 0) {
        for (let i = 1; i < pagesNum + 1; i++) {
            const page = `
---
page: true
title: ${i === 1 ? 'home' : 'page_' + i}
aside: false
layout: home
---
<script setup>
import Page from "../.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(${pageSize * (i - 1)},${pageSize * i})
</script>
<Page :posts="posts" :pageCurrent="${i}" :pagesNum="${pagesNum}" />
`.trim()
            const file = paths + `/page_${i}.md`
            // console.log(file)

            await fs.writeFile(file, page)
        }
    }
    // rename page_1 to index for homepage
    await fs.move(paths + '/page_1.md', paths + '/index.md', { overwrite: true })
}

/** 2022-01-01T00:00:00.000 -> 2022-01-01 */
function _convertDate(date = new Date().toString()) {
    return new Date(date).toISOString().slice(0, 10)
}

function _compareDate(obj1: { frontMatter: { date: number } }, obj2: { frontMatter: { date: number } }) {
    return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

export { getPosts }
