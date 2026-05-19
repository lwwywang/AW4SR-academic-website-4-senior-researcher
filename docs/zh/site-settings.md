# 站点设置 — 浏览器标签页与图标

这些设置作用于**整个网站**（不限于某一个页面）。  
所有内容集中在同一个文件里：

```
content/site.ts
```

---

## 浏览器标签页标题

找到 `SITE_TITLE`，替换为你的内容：

```ts
export const SITE_TITLE = 'HCI Lab | NUS School of Computing'
```

这段文字会显示在浏览器标签页和搜索引擎结果中。  
推荐格式：`"实验室名称 | 所属机构"`

---

## 页面描述

找到 `SITE_DESCRIPTION`，替换为你的内容：

```ts
export const SITE_DESCRIPTION = '我们在人机交互与数字制造的交叉领域设计交互系统。'
```

搜索引擎和社交媒体分享时会显示这段描述。

---

## Favicon（浏览器标签页上的小图标）

默认图标是一个地球。替换为自定义图标的步骤：

1. 准备一张**正方形**的 logo 或文字图片（推荐 256 × 256 px）。
2. 转换为 `.ico` 或 `.png` 格式。  
   免费工具：[favicon.io](https://favicon.io) · [realfavicongenerator.net](https://realfavicongenerator.net)
3. 将文件保存为 `public/favicon.ico`（或 `public/favicon.png`）。
4. 刷新浏览器，新图标立即生效。

替换 favicon **不需要修改任何代码**。
