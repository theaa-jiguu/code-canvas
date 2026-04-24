import { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  children?: ReactNode;
}

export const SectionHeading = ({ index, title, children }: SectionHeadingProps) => (
  <div className="mb-10 flex items-end justify-between border-b border-border/60 pb-4">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
    </div>
    {children && <div className="font-mono text-xs text-muted-foreground">{children}</div>}
  </div>
);
