import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { icon: Mail, label: "alex@chen.dev", href: "mailto:alex@chen.dev", note: "fastest" },
  { icon: Github, label: "github.com/alexchen", href: "https://github.com", note: "code" },
  { icon: Linkedin, label: "linkedin.com/in/alexchen", href: "https://linkedin.com", note: "work" },
  { icon: Twitter, label: "@alexchendev", href: "https://twitter.com", note: "thoughts" },
];

export const Contact = () => (
  <section id="contact" className="py-20">
    <SectionHeading index="04 / contact">// reach out</SectionHeading>

    <div className="grid gap-10 md:grid-cols-5">
      <p className="md:col-span-2 text-[15px] leading-relaxed text-muted-foreground">
        Open to short consulting engagements, backend audits, and the occasional
        full-time conversation. I usually reply within a day.
      </p>

      <ul className="md:col-span-3 divide-y divide-border/60 border-y border-border/60">
        {channels.map(({ icon: Icon, label, href, note }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                <span className="font-mono text-sm">{label}</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {note} →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
