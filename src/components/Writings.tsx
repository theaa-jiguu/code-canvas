import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";
import { posts } from "@/content/posts";

export { posts };
export type { Post } from "@/content/posts";

export const Writings = () => (
  <section id="writings" className="py-20">
    <SectionHeading index="03 / writings">// log</SectionHeading>
    {posts.length === 0 ? (
      <p className="font-mono text-sm text-muted-foreground px-4 -mx-4">
        No posts yet. Add one in <code className="text-accent">src/content/posts.ts</code>.
      </p>
    ) : (
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
    )}
  </section>
);
