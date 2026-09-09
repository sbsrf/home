---
name: "add-sbtf-practice"
description: "Adds a new flashcard (条反) practice set to sbtf/index.md from a user-supplied 汉字+编码 table. Invoke when user asks to 增加/添加 a new 条反练习 item or practice scheme with a character-code list."
---

# 新增条反练习项

向声笔站点的条反练习页面（[sbtf/index.md](file:///d:/MyWork/IME/home/sbtf/index.md)）添加一组新的练习数据。用户会提供「汉字<TAB>编码」列表、练习显示名称，以及在下拉框中的位置（放在某项之后）。

## 背景知识

- 页面用 Vue `<script setup>` 定义 `schemes` 对象，下拉框按 **对象键的插入顺序** 渲染选项。
- 练习组件 `components/Practice.vue` 接收 `[内容, 编码]` 数据对；`data` 计算属性已支持两种方案：含 `keymap` 的字根方案（从键位表展开）和含 `data` 的直接数据对方案。**新增字表练习一律用 `data` 方式，不要改 `data` 计算属性。**
- 每个方案的练习进度自动存入 localStorage，键为 `sbtf_<schemeKey>`，因此 scheme key 必须唯一且稳定。

## 操作步骤

1. **读取文件**：Read `sbtf/index.md`，确认现有数据常量（如 `wlziData`、`fdsbData`、`fdspData`）和 `schemes` 中各条目的锚点位置。

2. **派生命名**：
   - 数据常量名：scheme key + `Data`（如 key 为 `fdsp` 则常量为 `fdspData`）。key 用小写拼音/缩写，避免与已有 key 冲突。
   - 显示名用用户给定的中文名。

3. **插入数据常量**：在最后一个 `xxxData` 常量之后、`// 定义多个方案的 keymap` 注释之前，按以下模板插入（字表逐行原样保留，汉字与编码之间用制表符）：

   ```js
   // <显示名>：<一句话说明，可选>
   const <key>Data = `
   <汉字>\t<编码>
   ...
   `.trim().split('\n').map((line) => {
     const [char, code] = line.trim().split(/\s+/)
     return [char, code]
   })
   ```

4. **插入方案条目**：在 `schemes` 对象中用户指定位置（「放在 X 项之后」= 在 X 的 `},` 之后）插入：

   ```js
     <key>: {
       name: '<显示名>',
       data: <key>Data,
     },
   ```

   注意缩进为 2 空格，条目之间逗号不要漏。

5. **校验（必做）**：本环境 PowerShell 执行策略禁止运行 npm/node 脚本且未安装 node_modules，**不要尝试 `npm run build`**。改用 MCP `integrated_code_mode` 的 `Exec` 工具在 V8 沙箱中校验（见下方校验脚本）。

6. **清理**：不要留下临时校验文件。

## 校验脚本（通过 run_mcp → integrated_code_mode → Exec 运行）

注意：`tools.Read` 返回 `{ content }`，内容带 `  123→` 行号前缀，必须先用 `.replace(/^\s*\d+→/gm, '')` 去除。

```js
const res = await tools.Read({ file_path: 'd:\\MyWork\\IME\\home\\sbtf\\index.md' });
const raw = res.content.replace(/^\s*\d+→/gm, '');
const script = raw.match(/<script setup>([\s\S]*?)<\/script>/)[1];

// 1) 语法检查：stub 掉 import 后用 Function 构造器编译
const stubbed = script
  .replace("import Practice from '../components/Practice.vue'", 'const Practice = {};')
  .replace("import { ref, computed, watch } from 'vue'",
    'const ref = (v) => ({ value: v }); const computed = (f) => ({ value: f() }); const watch = () => {};');
try { new Function(stubbed); text('syntax: OK'); }
catch (e) { text('syntax: ERROR - ' + e.message); exit(); }

// 2) 抽取指定数据块并审计
function extract(name) {
  const re = new RegExp('const ' + name + ' = `([\\s\\S]*?)`\\.trim');
  const mm = script.match(re);
  if (!mm) return null;
  return mm[1].replace(/^\n/, '').replace(/\n$/, '').split('\n').map(line => {
    const p = line.trim().split(/\s+/);
    return [p[0], p[1]];
  });
}
const rows = extract('<key>Data');   // 替换为新常量名
text('count: ' + rows.length);
const bad = rows.filter(([c,k]) => !c || !k || /\s/.test(c) || !/^[a-z]+(\|[a-z]+)*$/.test(k));
const chars = rows.map(r => r[0]);
const dupC = [...new Set(chars.filter((c,i) => chars.indexOf(c) !== i))];
const codes = rows.map(r => r[1]);
const dupK = [...new Set(codes.filter((k,i) => codes.indexOf(k) !== i))];
text('bad: ' + JSON.stringify(bad) + ' | dupChars: ' + JSON.stringify(dupC) + ' | dupCodes: ' + JSON.stringify(dupK));

// 3) 下拉顺序与接线检查
const order = [...script.matchAll(/^  (\w+): \{\n    name: '([^']+)'/gm)].map(x => x[1] + ':' + x[2]);
text('order: ' + order.join(' -> '));
text('wired: ' + /<key>: \{[\s\S]*?data: <key>Data/.test(script));
text('first/last: ' + JSON.stringify(rows[0]) + ' ' + JSON.stringify(rows[rows.length-1]));

// 4) 可选：与同方案姊妹字表比对共有汉字的编码冲突（编码不同属正常，仅作提示）
```

## 验收标准

- `syntax: OK`；新数据块 count 与用户提供行数一致；`bad`、`dupChars`、`dupCodes` 均为 `[]`。
- `order` 输出中新条目位于用户指定位置；`wired: true`。
- 不修改 `data` 计算属性、模板部分及其他已有条目。

## 常见坑

- **同一组字表内出现重复汉字**（典型：多音字，如「长」有 cc、zc 两码）：合并成一条 `长	cc|zc`。Practice.vue 已支持以 `|` 分隔的多个等价编码——输入任一即判正确，提示时显示 `[cc / zc]`。不要保留两张同字卡。
- 修改已发布练习的卡牌数量后，浏览器 localStorage 里仍是旧队列（含已删卡片）；需提醒用户在该练习下点一次「重新开始」清掉旧进度。
- 同一汉字在不同方案中编码不同（如「得」在飞单/象码中编码不同），这是正常的，各练习独立存储进度。
- 编码含 2~4 个小写字母（多等价码时用 `|` 连接），Practice 组件逐键判定长度，无需特殊处理。
- 字表必须用制表符分隔；若用户消息中是空格，模板里的 `split(/\s+/)` 也能兼容，但写入文件时保持制表符风格一致。
- Shell 工具在本机被 PowerShell 执行策略拦截（`about_Execution_Policies` 报错），直接用 MCP Exec 校验，不要反复重试 shell。
