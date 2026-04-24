import avatar from "@/assets/avatar.jpg";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute -inset-3 rounded-full bg-accent/10 blur-2xl" aria-hidden />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border ring-1 ring-accent/20 sm:h-32 sm:w-32">
            <img
              src={avatar}
              alt="Portrait of Alex Chen"
              width={512}
              height={512}
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-background"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
          </span>
        </div>

        {/* Meta line */}
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground animate-fade-up">
          <span>Berlin / remote</span>
          <span className="h-px w-6 bg-border" />
          <span className="text-accent">available · q3</span>
        </div>

        {/* Name + role */}
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl animate-fade-up [animation-delay:80ms]">
          Alex Chen
        </h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground animate-fade-up [animation-delay:160ms]">
          backend developer<span className="text-accent animate-blink">_</span>
        </p>

        {/* Tagline */}
        <p className="mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg animate-fade-up [animation-delay:240ms]">
          I build quiet systems that move loud traffic — APIs, pipelines, and
          tooling that read like prose and run like clockwork.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 animate-fade-up [animation-delay:320ms]">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-mono text-xs text-background transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" /> github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Linkedin className="h-3.5 w-3.5" /> linkedin
          </a>
        </div>
      </div>
    </section>
  );
};
