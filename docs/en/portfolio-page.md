# Portfolio Page — Customization Guide

All content on the Portfolio page lives in **one single file**:

```
content/portfolio.tsx
```

Open that file. Every section has comments explaining what each field does.  
You do **not** need to touch any other file.

---

## How to upload images and GIFs

1. Place your file in the `public/images/` folder.
2. Reference it in the config as `/images/your-filename.jpg` (or `.gif`, `.png`, `.webp`).

```
public/
  images/
    banner.jpg          ← hero or direction background
    project-demo.gif    ← animated demo for a project card
    project-photo.jpg   ← static image for a project card
```

Any image size works — every image is automatically cropped to fill its display area without distortion.

**GIF performance note**: GIFs are lazy-loaded, meaning they only start downloading when the user scrolls to them. This keeps the initial page load fast even with many animated demos. Keep individual GIF files under ~5 MB for the best experience.

---

## 1. Hero Banner

The full-width strip at the very top of the page. The text "Full Portfolio" is always shown in white over it.

```tsx
export const PORTFOLIO_HERO = {
  imageSrc: '/images/your-banner.jpg',   // ← replace with your image
  imageAlt: 'Description of the image',
}
```

---

## 2. Intro Text

The paragraph shown below the banner.

### Plain text

```tsx
export const PORTFOLIO_INTRO = (
  <>
    This portfolio presents projects from our lab...
  </>
)
```

### With bold text

Wrap any word with `<Strong>`:

```tsx
export const PORTFOLIO_INTRO = (
  <>
    Our work spans <Strong>shape-changing interfaces</Strong> and more.
  </>
)
```

### With a link

Wrap any word with `<InlineLink>`:

```tsx
export const PORTFOLIO_INTRO = (
  <>
    Work published at <InlineLink href="https://chi2024.acm.org" external>CHI</InlineLink>.
  </>
)
```

- `external` — add this word for links to external websites; remove it for links to pages on this site (e.g. `/publications`).

---

## 3. Research Directions

Each entry in `DIRECTIONS` creates one direction block: a parallax banner followed by a list of project cards.

### Adding a direction

Copy an existing `{ title, imageSrc, imageAlt, projects: [ … ] },` block and paste it at the end of the array.

### Removing a direction

Delete the entire `{ … },` block for that direction.

### Direction banner

```tsx
{
  title: 'Shape-Changing Interfaces',  // ← white text shown over the banner image
  imageSrc: '/images/direction-bg.jpg', // ← replace with your image
  imageAlt: 'Description of the image',
  projects: [ … ],
},
```

The banner image uses a **parallax scroll effect** on desktop — the image is taller than the display strip, and the visible portion shifts as you scroll past it. On mobile it behaves like a normal image.

---

## 4. Project Cards

Each item in `projects: [ … ]` creates one project card.

```tsx
{
  title: 'Your Paper Title Here',
  authors: <><Strong>First Author</Strong>, Second Author, Third Author</>,
  venue: <>Proceedings of <Strong>CHI 2024</Strong>, Honolulu, Hawaii, USA</>,
  award: <>★ Best Paper Award — <Strong>CHI 2024</Strong></>,  // ← optional
  links: [
    { label: 'PDF',   href: 'https://link-to-pdf.com' },
    { label: 'Video', href: 'https://link-to-video.com' },
  ],
  mediaSrc: '/images/project-demo.gif',   // ← image or GIF
  mediaAlt: 'Description of the demo',
},
```

### Title

Plain text. Always displayed at a consistent heading size.

### Authors

The full author list, rendered in italics. Wrap the names you want to highlight (e.g. lab members) with `<Strong>`:

```tsx
authors: <><Strong>Alice Chen</Strong>, Bob Smith, Carol Williams</>,
```

### Venue

Conference or journal name. Wrap the venue name in `<Strong>` to make it stand out:

```tsx
venue: <>Proceedings of <Strong>CHI 2024</Strong>, Honolulu, Hawaii, USA</>,
```

### Award (optional)

If the paper received an award, add the `award` field. If omitted, the line stays as an invisible placeholder so all cards maintain the same layout height:

```tsx
award: <>★ Best Paper Award — <Strong>CHI 2024</Strong></>,
```

To **remove an award**, delete the entire `award: …,` line. The layout of other cards will not shift.

### Links (PDF, Video, etc.)

Any number of links can be added. Each link appears as underlined text:

```tsx
links: [
  { label: 'PDF',   href: 'https://…' },
  { label: 'Video', href: 'https://…' },
  { label: 'Code',  href: 'https://github.com/…' },
],
```

### Media (image or GIF)

Place your file in `public/images/` and reference it as `/images/filename`:

```tsx
mediaSrc: '/images/project-demo.gif',   // animated GIF
mediaSrc: '/images/project-photo.jpg',  // static image
```

All media is cropped to a consistent 4:3 ratio regardless of the original file size.

---

## Quick reference — text formatting

| Effect | Code |
|---|---|
| Bold (dark on light, white on dark) | `<Strong>word</Strong>` |
| Hyperlink (external site) | `<InlineLink href="https://…" external>word</InlineLink>` |
| Hyperlink (page on this site) | `<InlineLink href="/publications">word</InlineLink>` |

These components can be used inside `PORTFOLIO_INTRO`, `authors`, `venue`, and `award` fields.
