import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Contact } from "@/components/Contact";

const ContactPage = () => (
  <div className="min-h-screen bg-background font-sans">
    <SiteNav />
    <main className="container max-w-3xl pt-12">
      <p className="font-mono text-xs text-muted-foreground mb-2">/ contact</p>
      <h1 className="text-3xl font-medium tracking-tight mb-2">Let's talk</h1>
      <p className="text-muted-foreground mb-8 text-sm">Pick whichever channel works — they all reach me.</p>
      <Contact />
    </main>
    <SiteFooter />
  </div>
);

export default ContactPage;
