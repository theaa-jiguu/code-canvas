import { Link, useParams } from "react-router-dom";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { posts } from "@/components/Writings";
import { ArrowLeft } from "lucide-react";

/**
 * Example post bodies. In production these come from MDX/Markdown files.
 * Structure (MDX):
 *
 *   ---
 *   title: The quiet discipline of idempotency
 *   date: 2025-03-12
 *   tag: systems
 *   ---
 *
 *   Your essay body, with `code`, **emphasis**, and so on.
 */
const bodies: Record<string, string[]> = {
  "the-quiet-discipline-of-idempotency": [
    "There's a particular kind of bug that only appears when the network has had a bad day. A request times out, a client retries, the server runs the handler again — and now you have two charges, two emails, two rows where there should be one.",
    "Idempotency is the discipline of designing handlers that don't care how many times they're called. Same input, same outcome. It is, in my experience, the single highest-leverage habit a backend engineer can build.",
    "The trick isn't the technique — idempotency keys, deduplication tables, conditional writes are all well documented. The trick is the posture: writing every handler as if the network will betray you, because eventually it will.",
  ],
  "postgres-is-still-the-answer": [
    "Most of the systems I've shipped in the last five years could have been a single Postgres instance and a few well-placed indexes. I keep relearning this lesson.",
    "LISTEN/NOTIFY gives you pub/sub. Logical replication gives you CDC. Partial indexes give you a queue. JSONB gives you a document store. The boring database has quietly absorbed the cool stack.",
    "Reach for Kafka when you have Kafka problems — fan-out at scale, durable replay, multi-consumer ordering. Until then, write the postgres query.",
  ],
  "writing-services-that-fail-well": [
    "Reliability isn't the absence of failure. It's the presence of graceful failure modes — the parts of your system that yield, isolate, and recover so the rest can keep working.",
    "Three habits go a long way: deadlines on every outbound call, bulkheads between dependencies, and a clear answer to the question 'what does this service do when its database is gone?'",
    "The goal isn't a service that never fails. The goal is a service whose failure is small, contained, and obvious.",
  ],
};

const PostPage = () => {
  const { slug = "" } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const body = bodies[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <SiteNav />
        <main className="container max-w-2xl pt-20 text-center">
          <p className="font-mono text-sm text-muted-foreground">post not found</p>
          <Link to="/writings" className="mt-4 inline-block text-accent">← back to writings</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNav />
      <main className="container max-w-2xl pt-12 pb-20">
        <Link
          to="/writings"
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent mb-10"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
          writings
        </Link>

        <div className="font-mono text-[11px] text-muted-foreground mb-3 flex items-center gap-3">
          <span>{post.date}</span>
          <span className="h-px w-4 bg-border" />
          <span className="text-accent">{post.tag}</span>
          <span className="h-px w-4 bg-border" />
          <span>{post.reading}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-balance mb-8">
          {post.title}
        </h1>

        <article className="prose-invert space-y-6 text-[16px] leading-[1.75] text-muted-foreground">
          <p className="text-foreground text-lg leading-relaxed">{post.excerpt}</p>
          {body?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PostPage;
