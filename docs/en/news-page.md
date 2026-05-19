# News Page — Customization Guide

All content on the News page lives in **one single file**:

```
content/news.tsx
```

Open that file and edit the `NEWS_ITEMS` array.  
You do **not** need to touch any other file.

---

## How the display limit works

The main `/news` page shows only the **8 most recent** items (the first 8 in the array).

- If the array has **8 or fewer** entries, all items are shown and nothing else appears.
- If the array has **more than 8** entries, a **"More →"** link appears automatically at the bottom of the page. Clicking it opens `/news/all`, where every item is shown.

You never need to configure this — just keep adding items to the array.

---

## Adding a news item

Copy any existing entry and paste it at the top of the array (newest first is recommended):

```tsx
{
  date: 'Jun 2024',
  text: 'Your news description here.',
},
```

## Removing a news item

Delete the entire `{ date: …, text: … },` block for that entry.

---

## Date format

Keep dates short so they stay on one line — `Mon YYYY` is recommended:

```tsx
date: 'May 2024'   // ✓ recommended
date: 'May 18 2024'  // works but wider
```

---

## Text — plain, bold, and linked

### Plain text

Just write a string:

```tsx
text: 'Dr. [Name] delivered an invited keynote in Vienna.',
```

### With bold text

Wrap any word with `<Strong>` and switch to a JSX fragment `<>…</>`:

```tsx
text: <>Our paper <Strong>RoboSkin</Strong> won a Best Paper Award.</>,
```

### With a hyperlink

Wrap any word with `<InlineLink>`:

```tsx
text: <>Read the full story at <InlineLink href="https://example.com" external>MIT Technology Review</InlineLink>.</>,
```

### Combined (bold + link)

```tsx
text: <>
  <Strong>KnitSense</Strong> was accepted to{' '}
  <InlineLink href="https://chi2024.acm.org" external>CHI 2024</InlineLink>.
</>,
```

- `external` — add this word for links to external websites; remove it for links to pages on this site (e.g. `/publications`).

---

## Quick reference — text formatting

| Effect | Code |
|---|---|
| Bold | `<Strong>word</Strong>` |
| External link | `<InlineLink href="https://…" external>word</InlineLink>` |
| Internal link | `<InlineLink href="/publications">word</InlineLink>` |
