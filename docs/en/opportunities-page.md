# Opportunities Page — Customization Guide

All content on the Opportunities page lives in **one single file**:

```
content/opportunities.tsx
```

Open that file. You do **not** need to touch any other file.

---

## 1. Main Text

The paragraph below the `Opportunities` title is controlled by `OPPORTUNITIES_TEXT`:

```tsx
export const OPPORTUNITIES_TEXT =
  'Write a short note for prospective students, collaborators, or visitors here.'
```

Replace the text inside the quotes. Keep it concise and use original wording.

---

## 2. Bullet Points

The optional bullet list is controlled by `OPPORTUNITY_BULLETS`:

```tsx
export const OPPORTUNITY_BULLETS = [
  'Prospective PhD students may include a brief research statement.',
  'Undergraduate students are welcome to ask about project-based opportunities.',
]
```

### Adding a Bullet

Add a new string inside the array:

```tsx
'New bullet point text.',
```

### Removing a Bullet

Delete the entire line for that bullet.

### Hiding the Bullet List

Set the array to empty:

```tsx
export const OPPORTUNITY_BULLETS = []
```

---

## Quick Reference

| Goal | What to edit |
|---|---|
| Change the main paragraph | `OPPORTUNITIES_TEXT` |
| Add a bullet point | add one string to `OPPORTUNITY_BULLETS` |
| Remove a bullet point | delete that bullet line |
| Hide all bullets | set `OPPORTUNITY_BULLETS` to `[]` |

Do not copy text from other lab websites unless you have permission. Write the message in your own words.
