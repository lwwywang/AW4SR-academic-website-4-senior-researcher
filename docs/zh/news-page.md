# News 页面 — 使用说明

News 页面的所有内容都集中在**同一个文件**里：

```
content/news.tsx
```

打开这个文件，编辑 `NEWS_ITEMS` 数组即可。**不需要动其他任何文件。**

---

## 展示条数说明

`/news` 主页面只展示数组中**最前面的 8 条**（即最新的 8 条）。

- 数组中有 **8 条或更少**：全部显示，页面底部不出现额外内容。
- 数组中有 **超过 8 条**：页面底部自动出现 **"More →"** 链接，点击后跳转至 `/news/all`，该页面展示全部新闻。

无需任何额外配置，直接往数组里加条目即可。

---

## 新增一条新闻

复制任意一条已有的 `{ date: …, text: … },` 块，粘贴到数组最上方（建议最新的放在最前面）：

```tsx
{
  date: 'Jun 2024',
  text: '新闻描述文字。',
},
```

## 删除一条新闻

删除对应的整个 `{ date: …, text: … },` 块即可。

---

## 日期格式

建议保持简短，确保日期始终显示在同一行——推荐格式为 `月份缩写 年份`：

```tsx
date: 'May 2024'     // ✓ 推荐
date: 'May 18 2024'  // 可用，但宽度较大
```

---

## 正文 — 纯文字、加粗、超链接

### 纯文字

直接写字符串：

```tsx
text: '张三教授在维也纳做了一场特邀主旨报告。',
```

### 加粗文字

用 `<Strong>` 包住要加粗的词，并将整段改为 JSX 片段 `<>…</>`：

```tsx
text: <>我们的论文 <Strong>RoboSkin</Strong> 获得了 Best Paper Award。</>,
```

### 超链接

用 `<InlineLink>` 包住要加链接的词：

```tsx
text: <>详细报道见 <InlineLink href="https://example.com" external>MIT Technology Review</InlineLink>。</>,
```

### 组合（加粗 + 链接）

```tsx
text: <>
  <Strong>KnitSense</Strong> 被{' '}
  <InlineLink href="https://chi2024.acm.org" external>CHI 2024</InlineLink> 接收。
</>,
```

- `external` — 链接指向外部网站时加上这个词；链接到站内页面（如 `/publications`）时去掉

---

## 快速参考 — 文字样式组件

| 效果 | 写法 |
|---|---|
| 加粗 | `<Strong>文字</Strong>` |
| 外链超链接 | `<InlineLink href="https://…" external>文字</InlineLink>` |
| 站内超链接 | `<InlineLink href="/publications">文字</InlineLink>` |
