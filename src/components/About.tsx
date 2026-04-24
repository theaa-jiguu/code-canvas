import { SectionHeading } from "./SectionHeading";

const stack = [
  { k: "languages", v: "Go · Rust · TypeScript · Python" },
  { k: "data", v: "Postgres · Redis · Kafka · ClickHouse" },
  { k: "infra", v: "Kubernetes · Terraform · AWS · GCP" },
  { k: "interests", v: "distributed systems · DX · observability" },
];

export const About = () => (
  <section id="about" className="py-20">
    <SectionHeading index="01 / about">// who</SectionHeading>

    <div className="grid gap-12 md:grid-cols-5">
      <div className="md:col-span-3 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I'm a backend engineer with seven years of shipping the unglamorous
          parts of the internet — payment rails, ingestion pipelines, the
          quiet services that should never wake you at 3am.
        </p>
        <p>
          I think in <span className="text-foreground">systems</span>: contracts
          before code, latency budgets before features, postmortems before
          promotions. I care about the tiny moments where good architecture
          feels obvious in hindsight.
        </p>
        <p>
          Previously at <span className="text-foreground">Stripe</span> and
          <span className="text-foreground"> a stealth infra startup</span>.
          Currently independent, taking on focused engagements.
        </p>
      </div>

      <dl className="md:col-span-2 space-y-4 font-mono text-xs">
        {stack.map((row) => (
          <div
            key={row.k}
            className="group flex flex-col gap-1 border-l border-border/60 pl-4 transition-colors hover:border-accent"
          >
            <dt className="text-muted-foreground">{row.k}</dt>
            <dd className="text-foreground">{row.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
