import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Writings } from "@/components/Writings";

const WritingsPage = () => (
  <div className="min-h-screen bg-background font-sans">
    <SiteNav />
    <main className="container max-w-3xl pt-12">
      <p className="font-mono text-xs text-muted-foreground mb-2">/ writings</p>
      <h1 className="text-3xl font-medium tracking-tight mb-2">Notes from the backend</h1>
      <p className="text-muted-foreground mb-8 text-sm">Essays on systems, reliability, and the boring decisions that compound.</p>
      <Writings />
    </main>
    <SiteFooter />
  </div>
);

export default WritingsPage;
