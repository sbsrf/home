import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { getPosts } from './theme/serverUtils'


// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "声笔输入法",
  description: "顶功输入新体验",
  lang: "zh-Hans",
  themeConfig: {
    //@ts-ignore
    //posts: await getPosts(/* 每页文章的数量 */10),
    comment: {
      repo: 'sbsrf/sbsrf',
      themes: 'github-light',
      issueTerm: 'pathname'
    },
    outlineTitle: "本页大纲",
    sidebarMenuLabel: "文档目录",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "主题切换",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: [2, 3],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "教程", link: "/about/" },
      {
        text: "文章", items: [
          { text: "文章列表", link: "/posts/" },
          { text: "所有标签", link: "/pages/tags/" }
        ],
      },
      { text: "体验", link: "/sbkd/" },
      { text: "练习", link: "/sbtf/" },
      { text: "工具", link: "/sbgj/" },
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "KZWIJ0NJHE",
        apiKey: "e552eca4180a971c9ccf0490f9ccb1d8",
        indexName: "sbxlmio",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    sidebar: {
      "/": [
        {
          text: "声笔QQ群",
          items: [
            { text: "783734487", link: "https://qm.qq.com/q/rl1XMBWqm4" },
            { text: "728093309", link: "https://qm.qq.com/q/ByZsKQS1os" },
            { text: "445906697", link: "https://qm.qq.com/q/ufHlzm2ywa" },
            { text: "780510469", link: "https://qm.qq.com/q/ETg8V3Xcxq" },
          ],
        },
        {
          text: "声笔简介",
          items: [
            { text: "总体介绍", link: "/about/" },
            { text: "安装配置", link: "/vzpz/" },
            { text: "声笔基础", link: "/sbjc/" },
          ],
        },
        {
          text: "输入方案",
          items: [
            {
              text: "声笔简系", link: "/sbj/",
              items: [
                { text: "声笔简拼", link: "/sbjp/" },
                { text: "声笔简码", link: "/sbjm/" },
              ],
            },
            {
              text: "声笔飞系", link: "/sbf/",
              items: [
                { text: "声笔飞单", link: "/sbfd/" },
                { text: "声笔飞码", link: "/sbfm/" },
                { text: "声笔飞讯", link: "/sbfx/" },
                { text: "声笔飞简", link: "/sbfj/" },
              ],
            },
            {
              text: "声笔混拼", link: "/sbh/",
              items: [
                { text: "声笔易拼", link: "/sbyp/" },
                { text: "声笔拼音", link: "/sbpy/" },
              ],
            },
            {
              text: "声笔双拼", link: "/sbs/",
              items: [
                { text: "声笔自然", link: "/sbzr/" },
                { text: "声笔自整", link: "/sbzz/" },
                { text: "声笔小鹤", link: "/sbxh/" },
                { text: "声笔鹤整", link: "/sbhz/" },
              ],
            },
          ],
        },
        {
          text: "附录",
          items: [
            { text: "常见问题", link: "/faq/" },
            { text: "版本历史", link: "/fzlc/" },
          ],
        },
      ],

      "/posts/": [
        {
          text: "文章",
          items: await getPosts(10, false),
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/sbsrf/sbsrf" }],
  },
  srcExclude: ['README.md'],
  rewrites: {
    "docs/:page/index.md": ":page/index.md",
    "pages/:page/index.md": ":page/index.md",
  },
  appearance: "dark",
  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    }
  },
  vite: {
    ssr: {
      noExternal: ["naive-ui", "vueuc", "date-fns"],
    },
  },

  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['logo.svg'],
    manifest: {
      name: '声笔输入法',
      short_name: '声笔输入法',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
}));
