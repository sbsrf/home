// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { inBrowser } from "vitepress"
import busuanzi from "busuanzi.pure.js"

import "./style.css"

export default {
    extends: DefaultTheme,
    enhanceApp({ router }) {
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    },
} satisfies Theme
