# Portfolio 页面 — 使用说明

Portfolio 页面的所有内容都集中在**同一个文件**里：

```
content/portfolio.tsx
```

打开这个文件，按照以下说明修改对应内容即可。**不需要动其他任何文件。**

---

## 如何上传图片和动图

1. 把文件放进 `public/images/` 文件夹。
2. 在配置中写 `/images/你的文件名.jpg`（`.gif`、`.png`、`.webp` 同理）来引用它。

```
public/
  images/
    banner.jpg          ← 顶部横幅或方向背景图
    project-demo.gif    ← 项目卡片的演示动图
    project-photo.jpg   ← 项目卡片的静态图片
```

图片尺寸和格式不限，网站会自动裁剪填满对应区域，不会变形。

**动图性能说明**：GIF 采用懒加载——只有当用户滚动到对应位置时才开始下载，保证首屏加载速度。建议单个 GIF 文件不超过 5 MB。

---

## 1. 顶部横幅（Hero Banner）

页面最顶端的全宽横幅。"Full Portfolio" 白色文字会自动显示在图片上方。

```tsx
export const PORTFOLIO_HERO = {
  imageSrc: '/images/你的横幅图片.jpg',  // ← 替换为你的图片
  imageAlt: '对图片内容的简短描述',
}
```

---

## 2. 简介文字（Intro Text）

横幅下方的正文段落。

### 纯文字

```tsx
export const PORTFOLIO_INTRO = (
  <>
    这里介绍实验室的整体研究方向……
  </>
)
```

### 加粗文字

用 `<Strong>` 包住要加粗的词：

```tsx
export const PORTFOLIO_INTRO = (
  <>
    我们的研究涵盖 <Strong>形状变换界面</Strong> 等多个方向。
  </>
)
```

### 添加超链接

用 `<InlineLink>` 包住要加链接的词：

```tsx
export const PORTFOLIO_INTRO = (
  <>
    成果发表于 <InlineLink href="https://chi2024.acm.org" external>CHI</InlineLink>。
  </>
)
```

- `external` — 链接到外部网站时加上这个词；链接到站内页面（如 `/publications`）时去掉

---

## 3. 研究方向（Directions）

`DIRECTIONS` 数组中每一条对应一个研究方向：一张视差横幅 + 下方一组项目卡片。

### 新增一个研究方向

复制一整个 `{ title, imageSrc, imageAlt, projects: [ … ] },` 块，粘贴到数组末尾，修改内容即可。

### 删除一个研究方向

删除对应的整个 `{ … },` 块。

### 方向横幅

```tsx
{
  title: '形状变换界面',                   // ← 显示在横幅图片上方的白色文字
  imageSrc: '/images/direction-bg.jpg',   // ← 替换为你的背景图
  imageAlt: '对图片内容的简短描述',
  projects: [ … ],
},
```

方向横幅在桌面端有**视差滚动**效果：图片比展示区域高，随着页面滚动，显示的区域也随之移动。手机端降级为普通滚动，效果依然正常。

---

## 4. 项目卡片（Project Cards）

`projects: [ … ]` 中每一条对应一张项目卡片。

```tsx
{
  title: '你的论文标题',
  authors: <><Strong>第一作者</Strong>、第二作者、第三作者</>,
  venue: <>发表于 <Strong>CHI 2024</Strong>，美国夏威夷</>,
  award: <>🏆 Best Paper Award — <Strong>CHI 2024</Strong></>,  // ← 可选
  links: [
    { label: 'PDF',   href: 'https://pdf链接' },
    { label: 'Video', href: 'https://视频链接' },
  ],
  mediaSrc: '/images/project-demo.gif',   // ← 图片或动图
  mediaAlt: '对演示内容的简短描述',
},
```

### 文章标题（title）

纯文字，始终以统一的标题大小显示。

### 作者列表（authors）

斜体显示，用 `<Strong>` 加粗你想突出的作者（如实验室成员）：

```tsx
authors: <><Strong>陈小明</Strong>、李华、王芳</>,
```

### 会议/期刊名称（venue）

用 `<Strong>` 加粗会议名：

```tsx
venue: <>发表于 <Strong>CHI 2024</Strong>，美国夏威夷</>,
```

### 获奖信息（award，可选）

有获奖则添加 `award` 字段；没有则不写（或删掉这行）。布局不受影响——无论有没有获奖信息，卡片高度和其他元素的位置都保持一致：

```tsx
award: <>🏆 Best Paper Award — <Strong>CHI 2024</Strong></>,
```

### 链接（links）

可添加任意数量的链接，每个显示为带下划线的文字：

```tsx
links: [
  { label: 'PDF',   href: 'https://…' },
  { label: 'Video', href: 'https://…' },
  { label: 'Code',  href: 'https://github.com/…' },
],
```

#### PDF — 外部链接（推荐）

如果论文已在网上公开（ACM DL、arXiv、学校仓库等），直接粘贴链接即可：

```tsx
{ label: 'PDF', href: 'https://dl.acm.org/doi/pdf/10.1145/…' }
```

#### PDF — 自行托管

如果论文没有公开可访问的 URL，可以把 PDF 直接放在网站上：

1. 将文件放入 `public/papers/` 目录，例如 `public/papers/roboskin-chi2024.pdf`
2. 用以斜杠开头的路径引用：

```tsx
{ label: 'PDF', href: '/papers/roboskin-chi2024.pdf' }
```

**注意 — PDF 文件不会存入 git 仓库。**  
`public/papers/` 目录已被排除在版本控制之外，以避免仓库体积膨胀。部署网站后，需要单独上传 PDF：
- **Vercel**：在 Dashboard → 项目 → 通过 Vercel CLI（`vercel deploy`）上传，或使用 [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) 对象存储。
- **学校服务器**：上传到学校的文件服务器，直接使用机构提供的链接即可。

无论哪种方式，PDF **不影响页面加载速度**——只有用户点击链接时才会下载文件。

### 媒体（mediaSrc）

把文件放入 `public/images/`，然后写路径：

```tsx
mediaSrc: '/images/project-demo.gif',   // 动图
mediaSrc: '/images/project-photo.jpg',  // 静态图片
```

所有媒体都会被裁剪为统一的 4:3 比例，不论原文件尺寸。

---

## 快速参考 — 文字样式组件

| 效果 | 写法 |
|---|---|
| 加粗（亮色模式变深，暗色模式变白）| `<Strong>文字</Strong>` |
| 外链超链接 | `<InlineLink href="https://…" external>文字</InlineLink>` |
| 站内超链接 | `<InlineLink href="/publications">文字</InlineLink>` |

这些组件可以用在 `PORTFOLIO_INTRO`、`authors`、`venue`、`award` 字段中。
