import avatar from "@/assets/avatar.jpg";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ROLES = [
  "Backend Developer",
  "Salesforce Developer",
  "Full Stack Developer",
  "Security Analyst",
];

const TYPE_SPEED = 75;
const DELETE_SPEED = 40;
const HOLD_MS = 1400;

const useTypewriter = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const word = ROLES[index];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase("deleting"), HOLD_MS);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(word.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, index]);

  return text;
};

export const Hero = () => {
  const role = useTypewriter();

  return (
    <section className="relative pt-16 pb-20 sm:pt-28 sm:pb-32">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-6 sm:mb-8 animate-fade-in">
          <div className="absolute -inset-3 rounded-full bg-accent/10 blur-2xl" aria-hidden />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border ring-1 ring-accent/20 sm:h-32 sm:w-32">
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
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground animate-fade-up">
          <span>Berlin / remote</span>
          <span className="hidden sm:block h-px w-6 bg-border" />
          <span className="text-accent">available · q3</span>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-medium tracking-tight sm:text-6xl animate-fade-up [animation-delay:80ms]">
          Alex Chen
        </h1>

        {/* Typewriter role */}
        <p
          className="mt-3 font-mono text-sm sm:text-base text-muted-foreground animate-fade-up [animation-delay:160ms] min-h-[1.5em]"
          aria-live="polite"
        >
          <span className="text-foreground">{role}</span>
          <span className="text-accent animate-blink">_</span>
        </p>

        {/* Tagline */}
        <p className="mt-6 sm:mt-8 max-w-xl text-balance text-[15px] sm:text-lg text-muted-foreground animate-fade-up [animation-delay:240ms] px-2">
          I build quiet systems that move loud traffic — APIs, pipelines, and
          tooling that read like prose and run like clockwork.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 animate-fade-up [animation-delay:320ms]">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 sm:px-5 py-2.5 font-mono text-xs text-background transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="/alex-chen-resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 sm:px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" /> resume
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 sm:px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" /> github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 sm:px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Linkedin className="h-3.5 w-3.5" /> linkedin
          </a>
        </div>
      </div>
    </section>
  );
};
