import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Projects } from "@/components/Projects";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background font-sans">
    <SiteNav />
    <main className="container max-w-3xl pt-12">
      <p className="font-mono text-xs text-muted-foreground mb-2">/ projects</p>
      <h1 className="text-3xl font-medium tracking-tight mb-2">Things I've built</h1>
      <p className="text-muted-foreground mb-8 text-sm">A small, curated set. Most of my best work lives in private repos — happy to walk through it.</p>
      <Projects />
    </main>
    <SiteFooter />
  </div>
);

export default ProjectsPage;
