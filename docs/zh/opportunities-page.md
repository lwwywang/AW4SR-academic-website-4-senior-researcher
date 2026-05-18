# Opportunities 页面 — 使用说明

Opportunities 页面的所有内容都集中在**同一个文件**里：

```
content/opportunities.tsx
```

打开这个文件修改即可。**不需要动其他任何文件。**

---

## 1. 正文介绍

`Opportunities` 标题下面的正文由 `OPPORTUNITIES_TEXT` 控制：

```tsx
export const OPPORTUNITIES_TEXT =
  '这里写给潜在学生、合作者或访问者的一段简短说明。'
```

只需要替换引号里的文字。建议保持简洁，并使用自己的原创表述。

---

## 2. Bullet Points

可选的 bullet 列表由 `OPPORTUNITY_BULLETS` 控制：

```tsx
export const OPPORTUNITY_BULLETS = [
  'Prospective PhD students may include a brief research statement.',
  'Undergraduate students are welcome to ask about project-based opportunities.',
]
```

### 新增一条 bullet

在数组里新增一行字符串：

```tsx
'New bullet point text.',
```

### 删除一条 bullet

删除对应 bullet 的整行即可。

### 隐藏整个 bullet 列表

把数组改成空数组：

```tsx
export const OPPORTUNITY_BULLETS = []
```

---

## 快速参考

| 目标 | 修改哪里 |
|---|---|
| 修改正文介绍 | `OPPORTUNITIES_TEXT` |
| 新增 bullet | 在 `OPPORTUNITY_BULLETS` 中新增一条字符串 |
| 删除 bullet | 删除对应 bullet 那一行 |
| 隐藏所有 bullet | 把 `OPPORTUNITY_BULLETS` 改成 `[]` |

不要直接复制其他实验室网站上的文字，除非你确认有使用权限。建议用自己的语言描述当前机会和联系方式。
