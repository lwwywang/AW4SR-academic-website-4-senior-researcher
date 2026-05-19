# About Page — Customization Guide

All the text, links, and images on the About page live in **one single file**:

```
content/about.tsx
```

Open that file. Every section has comments explaining what each field does.  
You do **not** need to touch any other file.

---

## How to upload images

1. Place your image file in the `public/images/` folder.
2. Reference it in the config as `/images/your-filename.jpg`.

```
public/
  images/
    my-photo.jpg       ← put files here
```

```tsx
imageSrc: '/images/my-photo.jpg'   // ← write it like this
```

Any image size or format (JPG, PNG, WebP) works. The site automatically crops
every image to a consistent size so nothing ever looks stretched or misaligned.

---

## 1. Bio

### Changing the profile photo

Open `content/about.tsx` and find `BIO_PHOTO`. Change `src` and `alt`:

```tsx
export const BIO_PHOTO = {
  src: '/images/profile.jpg',  // ← place your file in public/images/
  alt: 'Dr. Jane Smith',       // ← the person's name (used for screen readers)
}
```

**Tips:**
- A **portrait (vertical) photo** works best — the display area is 180 × 200 px.
- The image is automatically cropped **from the top**, so keep the subject's face near the top of the image.
- Any file size or resolution is fine; the site handles resizing.

### Changing the text

Find the `BIO_TEXT` section and rewrite between the `<>` and `</>` tags:

```tsx
export const BIO_TEXT = (
  <>
    Dr. Smith is a Professor of Computer Science at Example University...
  </>
)
```

### Adding a link inside the bio

Wrap any word with `<InlineLink>`:

```tsx
export const BIO_TEXT = (
  <>
    Dr. Smith is a Professor at{' '}
    <InlineLink href="https://example.edu" external>Example University</InlineLink>.
  </>
)
```

- `href="…"` — the URL the link points to
- `external` — add this word if the link opens an external website; remove it for links to pages on this site (e.g. `/publications`)

### Changing the profile links (Google Scholar, DBLP, etc.)

Find `BIO_LINKS` and edit the list. Add, remove, or reorder entries freely:

```tsx
export const BIO_LINKS = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=XXXX', external: true },
  { label: 'CV',             href: '/files/cv.pdf' },   // no "external" needed for internal files
]
```

---

## 2. Research Directions

Each entry in `RESEARCH_DIRECTIONS` creates one block with an H2 title, a description,
and a row of project images.

### Changing a title or description

```tsx
{
  title: 'My Research Area',   // ← the H2 heading
  description: 'A short paragraph describing this direction.',
  projects: [ … ],
},
```

### Adding a research direction

Copy an existing entry (including the `{ … },`) and paste it at the end of the array.

### Removing a research direction

Delete the entire `{ … },` block for that entry.

### Adding / changing project images

Each project inside `projects: [ … ]` has two main fields:

```tsx
{
  title: 'Project Name',              // label shown below the image
  imageSrc: '/images/my-project.jpg', // image file in public/images/
},
```

**Up to 5 projects** are shown per row. Any extras are ignored.

#### Project page route

The project link is generated automatically from `title`:

- `title: 'Soft Robot'` → `/projects/soft-robot`
- `title: 'Project Alpha'` → `/projects/project-alpha`

The generated project page currently shows the project title and "Project detail page coming soon."

Keep project titles unique. If two projects have the same title, they will point to the same generated route.

Advanced use only: if you need a custom route, you may add an optional `href` field:

```tsx
{
  title: 'Project Name',
  href: '/projects/custom-project-url',
  imageSrc: '/images/my-project.jpg',
},
```

---

## 3. Our Approach

### Changing the section title and description

```tsx
export const OUR_APPROACH = {
  title: 'Our Approach',      // ← H2 heading
  description: 'An overview sentence about your lab's philosophy.',
  items: [ … ],
}
```

### Each sub-section (H3)

```tsx
{
  title: 'Engineering & Scientific Impact',   // ← H3 heading
  description: 'A sentence about this area.',
  bullets: [
    'Plain bullet point with no link.',
    <>Bullet with a <InlineLink href="https://example.com" external>link</InlineLink> inside.</>,
  ],
},
```

- Plain text bullets: just write a string in quotes.
- Bullets with a link: use `<>…</>` and place `<InlineLink>` inside.

### The optional image row

At the bottom of `OUR_APPROACH` there is an optional `images` array for press logos,
award badges, or media features. Each image links to an external URL when clicked:

```tsx
images: [
  { src: '/images/press-logo.png', alt: 'Press logo', href: 'https://news-article-url.com' },
],
```

To **hide this row entirely**, delete the `images: [ … ],` block.

---

## 4. Contact

### Changing the text

```tsx
export const CONTACT = {
  title: 'Contact',
  intro: 'One or two sentences introducing your location and how to reach you.',
  description: 'Full address, office hours, and email.',
  …
}
```

### Changing the building photo

```tsx
imageSrc: '/images/my-building.jpg',   // place the file in public/images/
imageAlt: 'Description of the photo',
```

### Changing the Google Maps location

1. Go to [maps.google.com](https://maps.google.com) and search for your institution.
2. Click **Share** → **Embed a map**.
3. Copy the URL that appears inside `src="…"` (it starts with `https://www.google.com/maps/embed?pb=…`).
4. Paste it as the value of `mapEmbedUrl`:

```tsx
mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18…',
```

---

## Quick reference — InlineLink

Use `<InlineLink>` anywhere you want a styled hyperlink (grey text, underline, turns black on hover).

| Use case | Code |
|---|---|
| External website | `<InlineLink href="https://example.com" external>link text</InlineLink>` |
| Internal page | `<InlineLink href="/publications">link text</InlineLink>` |

`external` opens the link in a new tab and is safe for any URL outside this website.
