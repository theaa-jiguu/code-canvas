import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Writings } from "@/components/Writings";
import { Contact } from "@/components/Contact";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteNav />
      <main className="container max-w-3xl">
        <Hero />
        <About />
        <Projects />
        <Writings />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
