/**
 * ──────────────────────────────────────────────────────────────
 *  YOUR BLOG POSTS LIVE HERE.
 *  This is the ONLY file you need to edit to add/remove posts.
 * ──────────────────────────────────────────────────────────────
 *
 *  How to add a new post:
 *    1. Copy one of the objects in the `posts` array below.
 *    2. Change the fields (slug, title, date, tag, reading, excerpt).
 *    3. Write your post body in the `body` field as a Markdown string.
 *       (Use the back-tick template literal so newlines are preserved.)
 *    4. Save. The post automatically appears at /writings and at
 *       /writings/<your-slug>.
 *
 *  How to remove a post:
 *    Delete its object from the `posts` array.
 *
 *  Markdown supported: headings (# ## ###), **bold**, *italic*,
 *  `inline code`, ```code blocks```, lists, links, blockquotes, tables.
 */

export interface Post {
  slug: string;       // URL: /writings/<slug>  — keep lowercase, dashes only
  title: string;
  date: string;       // ISO format: YYYY-MM-DD
  tag: string;        // single category label
  reading: string;    // e.g. "5 min"
  excerpt: string;    // 1–2 sentence summary shown on the listing
  body: string;       // full Markdown content
}

export const posts: Post[] = [
  // ── Example post — replace or delete ─────────────────────────
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2025-04-25",
    tag: "meta",
    reading: "2 min",
    excerpt:
      "First note in this log. Replace this post with your own — see src/content/posts.ts.",
    body: `
This is your first post. Open \`src/content/posts.ts\` and edit this entry,
or delete it and add your own.

## Markdown works

You can use **bold**, *italic*, \`inline code\`, and code blocks:

\`\`\`ts
function hello(name: string) {
  return \`hello, \${name}\`;
}
\`\`\`

- bullet lists
- [links](https://example.com)
- and more

> Blockquotes too.

That's it. Ship something.
`,
  },
];
