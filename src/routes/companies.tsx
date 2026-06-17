import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "For Companies — PackyTrace" },
      { name: "description", content: "Branded digital experiences and pack-level insight for food brands, packaging companies and retailers. Brands pay, consumers use it for free." },
      { property: "og:title", content: "For Companies — PackyTrace" },
      { property: "og:description", content: "Turn QR compliance pressure into product value with PackyTrace." },
      { property: "og:url", content: "/companies" },
    ],
    links: [{ rel: "canonical", href: "/companies" }],
  }),
  component: CompaniesPage,
});

function CompaniesPage() {
  const points = [
    "Branded digital experience on every pack",
    "Behavioural insight from real product interactions",
    "Pack-level data, not aggregated guesswork",
    "Retention & loyalty mechanics built-in",
    "Fast setup. Scalable architecture.",
    "Brands pay. Consumers use it for free.",
  ];
  const kpis = [
    { k: "38%", l: "median repeat scan rate" },
    { k: "2.4×", l: "time spent on pack" },
    { k: "12s", l: "median dwell per scan" },
    { k: "100%", l: "GDPR-aware by design" },
  ];
  return (
    <Layout>
      <PageHero
        eyebrow="For Companies · B2B"
        title={
          <>
            We started for shoppers.<br />
            <span className="text-foreground/40">Then brands asked us back.</span>
          </>
        }
        lede="Ready2Trace began as a consumer product. The more brands saw PackyTrace working on real packs, the more one question came back: what about us?"
      />

      <Section eyebrow="The origin story">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal as="h2" className="display text-4xl md:text-5xl">
            One product became<br />
            <span className="text-foreground/40">two-sided by design.</span>
          </Reveal>
          <Reveal delay={150} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              We set out to fix a consumer problem — the QR codes that lead
              nowhere. We built PackyTrace, ran it on real SKUs, watched real
              shoppers use it.
            </p>
            <p>
              Then the food brands behind those packs started asking the harder
              question. They sell through retailers; they almost never meet the
              buyer. Could the same scan give them, for the first time, a clean
              line of sight to the people who actually bought their product?
            </p>
            <p className="text-foreground">
              Yes — but only if privacy was architectural, not a footnote.
              That's what the Brand Dashboard is.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-foreground text-background" eyebrow="The offer">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-background">
              A branded consumer<br />
              experience —<br />
              <span className="text-background/40">plus the layer behind it.</span>
            </h2>
            <p className="mt-8 text-background/70 max-w-md leading-relaxed">
              Deployed on the QR you already print. Brands pay, consumers use it
              for free.
            </p>
            <Link to="/dashboard" className="btn-primary mt-10">
              See the dashboard <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <ul className="divide-y divide-background/15 border-y border-background/15">
              {points.map((p, i) => (
                <li key={p} className="flex items-start gap-6 py-5 group">
                  <span className="display text-sm text-ember mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-background group-hover:text-ember transition-colors duration-300">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="What partners see">
        <Reveal as="h2" className="display text-4xl md:text-6xl max-w-3xl mb-16">
          The numbers behind<br />
          <span className="text-foreground/40">a useful scan.</span>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
          {kpis.map((k, i) => (
            <Reveal key={k.l} delay={i * 100}>
              <div className="bg-background p-8 md:p-10 min-h-[200px] h-full flex flex-col justify-between">
                <div className="display text-5xl md:text-6xl text-foreground">{k.k}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">{k.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground text-sm">
          Illustrative ranges from early pilots and consumer research, 2024–2025.
        </p>
      </Section>

      <Section eyebrow="Get started" className="bg-sand">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <Reveal as="h2" className="display text-4xl md:text-6xl">
            Pilot a single SKU.
            <span className="text-foreground/40"> Scale across the range.</span>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to the team <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/dashboard" className="btn-ghost">
              See the dashboard
            </Link>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
