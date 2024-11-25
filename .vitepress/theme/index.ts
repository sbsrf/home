// https://vitepress.dev/guide/custom-theme
import NewLayout from "./components/NewLayout.vue"
import Archives from "./components/Archives.vue"
import Category from "./components/Category.vue"
import Tags from "./components/Tags.vue"
import Page from "./components/Page.vue"
import Comment from "./components/Comment.vue"

import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { inBrowser } from "vitepress"
import busuanzi from "busuanzi.pure.js"

import "./style.css"

export default {
    extends: DefaultTheme,
    Layout: NewLayout,
    // () => {
    //   return h(DefaultTheme.Layout, null, {
    //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
    //   })
    // },
    enhanceApp({ router, app }) {
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
        app.component("Tags", Tags)
        app.component("Category", Category)
        app.component("Archives", Archives)
        app.component("Page", Page)
        app.component("Comment", Comment)
    },
} satisfies Theme
