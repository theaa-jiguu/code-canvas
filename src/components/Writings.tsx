import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";

export interface Post {
  slug: string;
  title: string;
  date: string;
  reading: string;
  excerpt: string;
  tag: string;
}

export const posts: Post[] = [
  {
    slug: "the-quiet-discipline-of-idempotency",
    title: "The quiet discipline of idempotency",
    date: "2025-03-12",
    reading: "6 min",
    tag: "systems",
    excerpt:
      "Why retry-safe handlers are less about correctness and more about operator sleep.",
  },
  {
    slug: "postgres-is-still-the-answer",
    title: "Postgres is still the answer",
    date: "2025-01-28",
    reading: "9 min",
    tag: "databases",
    excerpt:
      "A pragmatic tour of LISTEN/NOTIFY, logical replication, and why you probably don't need Kafka yet.",
  },
  {
    slug: "writing-services-that-fail-well",
    title: "Writing services that fail well",
    date: "2024-11-04",
    reading: "11 min",
    tag: "reliability",
    excerpt:
      "Failure modes are features. A field guide to bulkheads, deadlines, and the art of giving up gracefully.",
  },
];

export const Writings = () => (
  <section id="writings" className="py-20">
    <SectionHeading index="03 / writings">// log</SectionHeading>
    <ul className="space-y-1">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            to={`/writings/${post.slug}`}
            className="group block rounded-md border border-transparent px-4 py-5 -mx-4 transition-all hover:border-border/60 hover:bg-card/40"
          >
            <div className="flex items-baseline justify-between gap-6">
              <div className="min-w-0">
                <h3 className="truncate text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-lg">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <div className="shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                <div>{post.date}</div>
                <div className="text-accent/70">{post.reading} · {post.tag}</div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
