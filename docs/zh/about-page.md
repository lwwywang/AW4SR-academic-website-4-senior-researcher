# About 页面 — 使用说明

About 页面的所有文字、链接和图片，都集中在**同一个文件**里：

```
content/about.tsx
```

打开这个文件，按照以下说明修改对应内容即可。**不需要动其他任何文件。**

---

## 如何上传图片

1. 把图片文件放进 `public/images/` 文件夹。
2. 在配置中写 `/images/你的文件名.jpg` 来引用它。

```
public/
  images/
    my-photo.jpg       ← 把图片放在这里
```

```tsx
imageSrc: '/images/my-photo.jpg'   // ← 这样引用
```

图片尺寸和格式（JPG、PNG、WebP）不限，网站会自动裁剪成统一大小，不会变形或错位。

---

## 1. 个人介绍（Bio）

### 更换个人照片

打开 `content/about.tsx`，找到 `BIO_PHOTO`，修改 `src` 和 `alt`：

```tsx
export const BIO_PHOTO = {
  src: '/images/profile.jpg',  // ← 把图片放在 public/images/ 下，这里写对应路径
  alt: '张三教授',               // ← 写上姓名（用于屏幕阅读器）
}
```

**注意事项：**
- 推荐使用**竖版（纵向）照片**，展示区域为 180 × 200 px。
- 图片会自动**从顶部开始裁剪**，请确保人物面部在照片的上半部分。
- 图片分辨率和文件大小不限，网站会自动处理缩放。

### 修改正文

找到 `BIO_TEXT`，在 `<>` 和 `</>` 之间改写你的内容：

```tsx
export const BIO_TEXT = (
  <>
    张三是某大学计算机系的副教授，研究方向为……
  </>
)
```

### 在正文中添加超链接

用 `<InlineLink>` 包住要加链接的词：

```tsx
export const BIO_TEXT = (
  <>
    张三是{' '}
    <InlineLink href="https://example.edu" external>某大学</InlineLink>
    计算机系的副教授。
  </>
)
```

- `href="…"` — 链接指向的网址
- `external` — 如果链接指向外部网站，加上这个词；如果是站内页面（如 `/publications`），去掉这个词

### 修改简介链接（Google Scholar 等）

找到 `BIO_LINKS`，自由增删或修改列表：

```tsx
export const BIO_LINKS = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=你的ID', external: true },
  { label: '个人简历',        href: '/files/cv.pdf' },  // 站内文件不需要写 external
]
```

---

## 2. 研究方向（Research Directions）

`RESEARCH_DIRECTIONS` 中的每一条对应一个研究方向模块（H2 标题 + 描述 + 项目图片行）。

### 修改标题或描述

```tsx
{
  title: '我的研究方向',          // ← H2 标题，随意修改
  description: '这个方向的简短描述。',
  projects: [ … ],
},
```

### 新增一个研究方向

复制现有的一整个 `{ … },` 块，粘贴到数组末尾，再改内容即可。

### 删除一个研究方向

删除对应的整个 `{ … },` 块。

### 添加或更换项目图片

`projects: [ … ]` 里每个项目主要有两个字段：

```tsx
{
  title: '项目名称',                       // 图片下方显示的文字
  imageSrc: '/images/my-project.jpg',     // 图片路径，放在 public/images/ 下
},
```

**每行最多展示 5 个项目**，超出的会被忽略（手机端显示为 2 列）。

#### 项目页面路由

项目链接会根据 `title` 自动生成：

- `title: 'Soft Robot'` → `/projects/soft-robot`
- `title: 'Project Alpha'` → `/projects/project-alpha`

生成的项目页面目前会显示项目标题和 “Project detail page coming soon.”

请尽量保持项目标题唯一。如果两个项目标题完全相同，它们会指向同一个自动生成的路由。

高级用法：如果你确实需要自定义跳转地址，可以额外添加可选的 `href` 字段：

```tsx
{
  title: 'Project Name',
  href: '/projects/custom-project-url',
  imageSrc: '/images/my-project.jpg',
},
```

---

## 3. 研究理念（Our Approach）

### 修改整体标题和描述

```tsx
export const OUR_APPROACH = {
  title: 'Our Approach',          // ← H2 标题
  description: '关于实验室理念的总览描述。',
  items: [ … ],
}
```

### 每个子模块（H3）

```tsx
{
  title: '工程与科学影响',         // ← H3 小标题
  description: '关于这个方面的一句描述。',
  bullets: [
    '普通 bullet，直接写文字。',
    <>带链接的 bullet，用 <InlineLink href="https://example.com" external>链接文字</InlineLink> 包住。</>,
  ],
},
```

- 纯文字 bullet：直接在引号里写文字。
- 含链接的 bullet：用 `<>…</>` 包住，在里面放 `<InlineLink>`。

### 可选图片行

`OUR_APPROACH` 底部有一个可选的 `images` 数组，用于展示媒体报道 logo、奖项徽章等，点击图片会跳转到对应外链：

```tsx
images: [
  { src: '/images/press-logo.png', alt: '媒体名称', href: 'https://报道链接.com' },
],
```

**不需要这一行时**，删除从 `images:` 开始到 `],` 为止的整段即可。

---

## 4. 联系方式（Contact）

### 修改文字

```tsx
export const CONTACT = {
  title: 'Contact',               // ← H2 标题
  intro: '一两句介绍所在机构和联系方式的话。',
  description: '详细地址、办公时间和邮箱。',
  …
}
```

### 更换建筑物照片

```tsx
imageSrc: '/images/my-building.jpg',  // 图片放在 public/images/ 下
imageAlt: '对照片内容的简短描述',
```

### 更换 Google Maps 地点

1. 打开 [maps.google.com](https://maps.google.com)，搜索你的机构。
2. 点击**分享** → **嵌入地图**。
3. 复制 `src="…"` 里的 URL（以 `https://www.google.com/maps/embed?pb=…` 开头）。
4. 粘贴到 `mapEmbedUrl` 的值里：

```tsx
mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18…',
```

---

1## 快速参考 — InlineLink 超链接组件

在任何需要超链接的地方使用 `<InlineLink>`（灰色文字 + 下划线，鼠标悬停变黑）。

| 场景 | 写法 |
|---|---|
| 外部网站 | `<InlineLink href="https://example.com" external>显示文字</InlineLink>` |
| 站内页面 | `<InlineLink href="/publications">显示文字</InlineLink>` |

`external` 会在新标签页中打开链接，所有站外 URL 都应加上这个词。
