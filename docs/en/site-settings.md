# Site Settings — Browser Tab & Favicon

These settings apply to the **entire website** (not just one page).  
Everything lives in one file:

```
content/site.ts
```

---

## Browser tab title

Find `SITE_TITLE` and replace the value:

```ts
export const SITE_TITLE = 'HCI Lab | NUS School of Computing'
```

This text appears in the browser tab and in search-engine results.  
Recommended format: `"Lab Name | Institution"`

---

## Page description

Find `SITE_DESCRIPTION` and replace the value:

```ts
export const SITE_DESCRIPTION = 'We design interactive systems at the intersection of HCI and fabrication.'
```

Used by search engines and when the site is shared on social media.

---

## Favicon (the icon in the browser tab)

The default icon is a globe. To replace it with your own:

1. Prepare a **square image** of your logo or initials (256 × 256 px recommended).
2. Convert it to `.ico` or `.png` format.  
   Free tools: [favicon.io](https://favicon.io) · [realfavicongenerator.net](https://realfavicongenerator.net)
3. Save the file as `public/favicon.ico` (or `public/favicon.png`).
4. Reload the browser — the new icon appears immediately.

No code changes are needed for the favicon.
