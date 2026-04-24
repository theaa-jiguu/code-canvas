import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "index" },
  { to: "/projects", label: "projects" },
  { to: "/writings", label: "writings" },
  { to: "/resume", label: "resume" },
  { to: "/contact", label: "contact" },
];

export const SiteNav = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
        <RouterNavLink
          to="/"
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
          <span className="text-foreground">alex</span>
          <span className="text-muted-foreground">.chen</span>
        </RouterNavLink>

        <nav className="flex items-center gap-1 font-mono text-xs">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <RouterNavLink
                key={l.to}
                to={l.to}
                className={cn(
                  "group relative rounded-md px-3 py-1.5 transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-accent/70">{active ? "▸ " : "  "}</span>
                {l.label}
              </RouterNavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export const SiteFooter = () => (
  <footer className="border-t border-border/60 mt-32">
    <div className="container flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Alex Chen. Built with care.</span>
      <span className="flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
        all systems operational
      </span>
    </div>
  </footer>
);
