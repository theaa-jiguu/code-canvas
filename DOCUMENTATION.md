# Portfolio Website — Full Documentation

A dark-first, minimal portfolio for a backend developer. Built with **React 18 + Vite + TypeScript + Tailwind CSS + shadcn/ui**, with a typewriter hero, mobile nav, downloadable resume, and a writings/blog section.

---

## 1. Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 (HSL design tokens) |
| Components | shadcn/ui (Radix primitives) |
| Routing | react-router-dom v6 |
| Icons | lucide-react |
| Fonts | Geist + Geist Mono (Google Fonts) |

---

## 2. Folder & File Structure

```
.
├── public/
│   ├── alex-chen-resume.pdf      ← Downloadable resume (replace this file)
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   └── avatar.jpg            ← Hero profile photo (replace to change picture)
│   │
│   ├── components/
│   │   ├── Hero.tsx              ← Hero section: avatar, name, typewriter roles, CTAs
│   │   ├── About.tsx             ← About section content
│   │   ├── Projects.tsx          ← Projects list (edit array inside file)
│   │   ├── Writings.tsx          ← Blog/writings preview list
│   │   ├── Contact.tsx           ← Contact section: email + social links
│   │   ├── SectionHeading.tsx    ← Reusable "01 / about" style heading
│   │   ├── SiteChrome.tsx        ← SiteNav (header + mobile menu) + SiteFooter
│   │   ├── NavLink.tsx
│   │   └── ui/                   ← shadcn/ui primitives (button, card, etc.)
│   │
│   ├── content/
│   │   └── posts/
│   │       └── the-quiet-discipline-of-idempotency.md   ← Example blog post
│   │
│   ├── pages/
│   │   ├── Index.tsx             ← Homepage (composes Hero/About/Projects/...)
│   │   ├── ProjectsPage.tsx      ← /projects
│   │   ├── WritingsPage.tsx      ← /writings (list of all posts)
│   │   ├── PostPage.tsx          ← /writings/:slug (single post)
│   │   ├── ContactPage.tsx       ← /contact
│   │   ├── ResumePage.tsx        ← /resume (web view + download link)
│   │   └── NotFound.tsx          ← 404
│   │
│   ├── hooks/                    ← use-mobile, use-toast
│   ├── lib/utils.ts              ← cn() helper for Tailwind class merging
│   ├── App.tsx                   ← Routes config
│   ├── main.tsx                  ← App entry
│   ├── index.css                 ← 🎨 DESIGN SYSTEM (colors, fonts, animations)
│   └── App.css
│
├── index.html                    ← <title>, meta tags, SEO
├── tailwind.config.ts            ← Tailwind theme tokens & animations
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Design System (`src/index.css` + `tailwind.config.ts`)

The site uses **semantic HSL tokens** — never hardcode colors in components.

### Color tokens (defined in `src/index.css`)

| Token | Value | Used for |
|---|---|---|
| `--background` | `0 0% 5%` | Page background (near-black) |
| `--foreground` | `40 15% 92%` | Body text (warm off-white) |
| `--muted-foreground` | `40 5% 55%` | Secondary text |
| `--accent` | `80 75% 60%` | **Lime green accent** (links, dot, highlight) |
| `--border` | `0 0% 14%` | Hairline dividers |
| `--card` | `0 0% 7%` | Card backgrounds |
| `--radius` | `0.75rem` | Default border radius |

To **change the accent color**, edit `--accent` in `src/index.css` (HSL only). Example warm orange: `--accent: 25 90% 60%;`

### Typography

- **Sans:** Geist (body, headings)
- **Mono:** Geist Mono (meta lines, navigation, code)
- Loaded via Google Fonts at the top of `src/index.css`.

### Animations (Tailwind keyframes)

| Class | Effect |
|---|---|
| `animate-fade-up` | Subtle slide-up + fade |
| `animate-fade-in` | Pure fade |
| `animate-blink` | Caret/status-dot blink |

---

## 4. How to Change Content

### 4.1 Change your name / nav brand
**File:** `src/components/SiteChrome.tsx` (around the `<RouterNavLink to="/">` block)
```tsx
<span className="text-foreground">alex</span>
<span className="text-muted-foreground">.chen</span>
```
Also update `index.html` `<title>` and meta description.

### 4.2 Change the profile photo
Replace `src/assets/avatar.jpg` with your own square image (same filename, ~512×512px).

### 4.3 Change the typewriter roles in the Hero
**File:** `src/components/Hero.tsx`
```ts
const ROLES = [
  "Backend Developer",
  "Salesforce Developer",
  "Full Stack Developer",
  "Security Analyst",
];
```
Add/remove strings to update the cycling text. Adjust `TYPE_SPEED` / `DELETE_SPEED` constants in the same file to change animation pace.

### 4.4 Change the resume PDF
Replace `public/alex-chen-resume.pdf` with your own PDF (keep the same filename, OR update the link in `src/components/Hero.tsx` and `src/pages/ResumePage.tsx`).

### 4.5 Edit the About section
**File:** `src/components/About.tsx` — plain JSX text, edit directly.

### 4.6 Add / edit projects
**File:** `src/components/Projects.tsx` — there is a `projects` array near the top. Each entry:
```ts
{
  year: "2025",
  name: "Project Name",
  description: "Short tagline.",
  stack: ["TypeScript", "Postgres"],
  link: "https://...",
}
```

### 4.7 Add a new blog post / writing
1. Create a new Markdown file in `src/content/posts/`, e.g. `my-new-post.md`.
2. Add frontmatter at the top:
   ```md
   ---
   title: "My New Post"
   date: "2025-04-24"
   excerpt: "One-line summary."
   ---
   Your content here in **Markdown**.
   ```
3. Add a corresponding entry in `src/components/Writings.tsx` (and `src/pages/WritingsPage.tsx` if listed there) with the slug matching the filename.

### 4.8 Update contact info / social links
**File:** `src/components/Contact.tsx` — update email and link `href` values (GitHub, LinkedIn, X, etc.).

### 4.9 Update SEO
**File:** `index.html` — edit `<title>`, `<meta name="description">`, and Open Graph tags.

---

## 5. Routing (`src/App.tsx`)

| Path | Page |
|---|---|
| `/` | `Index.tsx` (one-page scroll: Hero → About → Projects → Writings → Contact) |
| `/projects` | `ProjectsPage.tsx` |
| `/writings` | `WritingsPage.tsx` |
| `/writings/:slug` | `PostPage.tsx` |
| `/contact` | `ContactPage.tsx` |
| `/resume` | `ResumePage.tsx` |
| `*` | `NotFound.tsx` |

To add a new route: import the page in `App.tsx` and add a `<Route path="..." element={<...} />` **above** the catch-all `*` route. Then add a link to it in the `links` array inside `src/components/SiteChrome.tsx`.

---

## 6. Mobile Responsiveness

- **Breakpoints:** Tailwind defaults — `sm: 640px`, `md: 768px`, `lg: 1024px`.
- **Mobile nav:** `SiteChrome.tsx` shows a hamburger (`Menu`/`X` icons) below `md`. Tapping toggles a full-width dropdown with `backdrop-blur`.
- **Container:** Centered, max-width `1100px` on `2xl`, with `1.5rem` horizontal padding. Hero/main content uses `max-w-3xl` for comfortable reading.
- **Responsive grids:** e.g. `Projects.tsx` uses `col-span-12 sm:col-span-2` so rows stack on mobile and align in columns on tablet+.

---

## 7. Running & Building

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:8080)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or click **Publish** in Lovable.

---

## 8. Quick "Make It Yours" Checklist

- [ ] Replace `src/assets/avatar.jpg`
- [ ] Replace `public/alex-chen-resume.pdf`
- [ ] Update brand name in `SiteChrome.tsx` (nav) and `Hero.tsx`
- [ ] Edit `ROLES` array in `Hero.tsx`
- [ ] Edit copy in `About.tsx`
- [ ] Edit `projects` array in `Projects.tsx`
- [ ] Add posts in `src/content/posts/` and reference them in `Writings.tsx`
- [ ] Update email + socials in `Contact.tsx`
- [ ] Update `<title>` and meta in `index.html`
- [ ] (Optional) Change `--accent` color in `src/index.css`

---

That's the whole site. Keep edits in the components above and the design system will keep everything visually consistent.
