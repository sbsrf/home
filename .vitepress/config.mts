import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "声笔输入法",
  description: "顶功输入新体验",
  lang: "zh-Hans",
  themeConfig: {
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
      { text: "文章", link: "/posts/" },
      { text: "体验", link: "/sbkd/" },
      { text: "练习", link: "/sbtf/" },
      { text: "工具", link: "/sbgj/" },
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "4GR9IX2S72",
        apiKey: "bec14439de51bd69534d2fcbce9ea2c5",
        indexName: "sbxlm-gitee",
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
            {
              text: "声笔简系", link:"/sbj/",
              items: [
                { text: "声笔简拼", link: "/sbjp/" }, 
                { text: "声笔简码", link: "/sbjm/" },
              ],
            },
            {
              text: "声笔飞系", link:"/sbf/",
              items: [
                { text: "声笔飞单", link: "/sbfd/" },
                { text: "声笔飞码", link: "/sbfm/" },
                { text: "声笔飞讯", link: "/sbfx/" },
              ],
            },
            { text: "声笔拼音", link: "/sbpy/" },
            { text: "声笔四拼", link: "/sbsp/" },
            {
              text: "声笔双拼", link:"/sbs/",
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
        {
          text: "声笔QQ群",
          items: [
            { text: "783734487", link: "https://qm.qq.com/q/rl1XMBWqm4" },
            { text: "728093309", link: "https://qm.qq.com/q/ByZsKQS1os" },
            { text: "445906697", link: "https://qm.qq.com/q/ufHlzm2ywa" },
            { text: "780510469", link: "https://qm.qq.com/q/ETg8V3Xcxq" },
          ],
        },
      ],
      "/posts/": [
        {
          text: "文章",
          items: [
            { text: "如何用好简拼", link: "/posts/如何用好简拼.md" },
            { text: "声笔飞讯竞速怎么设置好", link: "/posts/声笔飞讯竞速怎么设置好.md" },
            { text: "如何在Deepin上安装声笔输入法", link: "/posts/如何在Deepin上安装声笔输入法.md" },
            { text: "声笔输入法9x的安装与配置", link: "/posts/声笔输入法9x的安装与配置.md" },
            { text: "中文输入模式", link: "/posts/中文输入模式.md" },
            { text: "如何调试librime源代码", link: "/posts/HowToDebugLibrimeOnWindows.md" },
            { text: "2023年6月22日声笔更新", link: "/posts/2023年6月22日声笔更新.md" },
            { text: "编码中频率的作用", link: "/posts/编码中频率的作用.md" },
            { text: "个体词汇与全体词汇关系猜想", link: "/posts/个体词汇与全体词汇关系猜想.md" },
            { text: "几个输入方案单字前1500数据对比", link: "/posts/几个输入方案单字前1500数据对比.md" },
            { text: "解密打字速度", link: "/posts/解密打字速度.md" },
            { text: "拼音输入宝典", link: "/posts/拼音输入宝典.md" },
            { text: "如何根除流氓输入法", link: "/posts/如何根除流氓输入法.md" },
            { text: "声笔2023年8月18日更新纪要", link: "/posts/声笔2023年8月18日更新纪要.md" },
            { text: "声笔飞系部首解释", link: "/posts/声笔飞系部首解释.md" },
            { text: "声笔飞讯的个性化定制", link: "/posts/声笔飞讯的个性化定制.md" },
            { text: "声笔码引起的反响摘录", link: "/posts/声笔码引起的反响摘录.md" },
            { text: "输入对比之一", link: "/posts/输入对比之一.md" },
            { text: "输入法词库转换工具", link: "/posts/输入法词库转换工具.md" },
            { text: "小狼毫的可视化配置工具", link: "/posts/小狼毫的可视化配置工具.md" },
            { text: "中文盲打分级", link: "/posts/中文盲打分级.md" },
            { text: "飞码和快码新增W型", link: "/posts/AddModeW.md" },
            { text: "声笔系列码新增飞简和快简", link: "/posts/blogpost20200808.md" },
            { text: "声笔系列码的词库优化实验", link: "/posts/cikuyh.md" },
            { text: "如何关闭Wow64重定向？", link: "/posts/disable-redirect.md" },
            { text: "飞码（X）和快码（X）的优化实验", link: "/posts/fmkmyh.md" },
            { text: "关于Git的一些技巧", link: "/posts/git-tips.md" },
            { text: "汉字编码输入法综述", link: "/posts/hzbmsrfzs.md" },
            { text: "两种截然不同的汉字输入场景", link: "/posts/hzsrcj.md" },
            { text: "声笔简码扩展编码优化", link: "/posts/jmkzmsyh.md" },
            { text: "业界要文", link: "/posts/key-articles.md" },
            { text: "主流输入法", link: "/posts/main-imes.md" },
            { text: "主流拼音输入法存在的问题及其解决", link: "/posts/pywtjj.md" },
            { text: "声笔系列码成功实现全自动造词", link: "/posts/qzdzc.md" },
            { text: "声笔简码重磅发布", link: "/posts/ReleaseSbjm.md" },
            { text: "基于Rime的声笔系列码现在提供Android安装程序了", link: "/posts/rime4sbxlm.md" },
            { text: "声笔顶拼正式发布", link: "/posts/sbdp.md" },
            { text: "声笔简码RIME版重大升级", link: "/posts/sbjmzdsj.md" },
            { text: "RIME版声笔双拼优化实验", link: "/posts/sbspyh.md" },
            { text: "声笔系列码9.0开发计划与开发实录", link: "/posts/sbxlm9-0.md" },
            { text: "声笔系列重大更新", link: "/posts/SbxlmRevamp.md" },
            { text: "声笔系列码体系修改", link: "/posts/sbxlmxg.md" },
            { text: "声笔系列码的整句模式重新袭来", link: "/posts/sbxlzj.md" },
            { text: "声笔系列码体系重大修改", link: "/posts/sbxmtxxg.md" },
            { text: "为各款输入法增加整句模式", link: "/posts/SentenceModes.md" },
            { text: "声笔系列码增加共享自定义词典", link: "/posts/shared-dict.md" },
            { text: "使用Hexo建立Sbxlm网站", link: "/posts/site-build.md" },
            { text: "顶功与上屏方式", link: "/posts/spfs.md" },
            { text: "输入法究竟是用来干什么的？", link: "/posts/srfgsm.md" },
            { text: "声笔系列码RIME定制程序最新优化", link: "/posts/update191108.md" },
            { text: "声笔系列码全面升级到8.5版", link: "/posts/upgrade8-5.md" },
            { text: "首个为声笔系列码定制的小狼毫输入法", link: "/posts/weasel4sbxlm-0-14-3-0.md" },
            { text: "Windows下如何判断应用程序是32位的还是64位的？", link: "/posts/win32or64.md" },
            { text: "小狼毫声笔专版一键部署程序制作完成", link: "/posts/xlhyjbs.md" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/sbsrf/sbsrf" }],
  },
  rewrites: {
    "docs/:page/index.md": ":page/index.md",
    "pages/:page/index.md": ":page/index.md",
  },
  appearance: "dark",
  markdown: {
    math: true,
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
