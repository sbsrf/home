import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "声笔输入法",
  description: "顶功输入新体验",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "教程", link: "/about/" },
      { text: "文章", link: "/posts/" },
      { text: "体验", link: "/sbkd/" },
      { text: "练习", link: "/sbtf/" },
      { text: "工具", link: "/sbgj/" },
    ],

    sidebar: {
      "/": [
        {
          text: "简介",
          items: [
            { text: "总体介绍", link: "/about/" },
            { text: "安装配置", link: "/vzpz/" },
            { text: "声笔基础", link: "/sbjc/" },
          ],
        },
        {
          text: "输入方案",
          items: [
            { text: "声笔简码", link: "/sbjm/" },
            { text: "声笔拼音", link: "/sbpy/" },
            { text: "声笔自然", link: "/sbzr/" },
            { text: "声笔小鹤", link: "/sbxh/" },
            { text: "声笔飞单", link: "/sbfd/" },
            { text: "声笔飞码", link: "/sbfm/" },
            { text: "声笔飞讯", link: "/sbfx/" },
          ],
        },
        {
          text: "附录",
          items: [
            { text: "常见问题", link: "/faq/" },
            { text: "跟打范文", link: "/gdfw/" },
            { text: "版本历史", link: "/fzlc/" },
          ],
        },
      ],
      "/posts/": [
        {
          text: "文章",
          items: [
            { text: "文章", link: "/posts/" },
            { text: "声笔顶拼", link: "/posts/sbdp" },
          ],
        },
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/sbsrf/sbsrf" },
    ],
  },
  rewrites: {
    "docs/:page/index.md": ":page/index.md",
    "pages/:page/index.md": ":page/index.md",
  },
  appearance: "force-dark"
});
