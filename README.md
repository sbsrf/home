# 声笔输入法主页

## 目录结构

- `/docs/`: 教程文件
- `/posts/`: 博客文章
- `/components/`: Markdown 中用到的 Vue 组件
- `/src/`: 组件引用的 JavaScript 类和函数
- `/.vitepress/`: VitePress 生成器配置
- `/public/`: 静态资源文件

## 开发

### 安装依赖

```bash
pnpm i
```

### 安装「声笔快打」静态资源

为了减少本项目的依赖，在线演示声笔输入法所需的 Rime 程序和数据文件由 sbsrf/sbkd 项目编译并发布为 Release，然后本项目只需拉取即可。

```bash
pnpm run sbkd
```

这一步要求您有命令行工具 `curl` 和 `unzip`。如果没有，您也可以手动下载相应的发布包，解压缩到 `/public/` 目录下。

### 预览

```bash
pnpm start
```

### 构建

```bash
pnpm run build
```
