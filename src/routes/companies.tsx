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
        eyebrow="For Companies"
        title={
          <>
            We turn compliance<br />
            pressure into{" "}
            <span className="text-ember">product value.</span>
          </>
        }
        lede="For food brands, packaging companies, retailers and innovation teams ready to make the QR on their pack actually work."
      />

      <Section>
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
          <Reveal>
            <div className="bg-sand rounded-md p-8 md:p-10">
              <div className="eyebrow text-ember mb-6">The offer</div>
              <p className="text-xl leading-relaxed text-foreground">
                A branded consumer experience plus the analytics layer behind it — deployed on the QR you already print.
              </p>
              <Link to="/contact" className="btn-primary mt-10">
                Become a partner brand
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-6 py-5 group transition-colors duration-300 hover:text-ember"
                >
                  <span className="display text-sm text-ember mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-foreground group-hover:text-ember transition-colors duration-300">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="What partners see" className="bg-foreground text-background">
        <Reveal as="h2" className="display text-4xl md:text-6xl text-background max-w-3xl mb-16">
          The numbers behind<br />a useful scan.
        </Reveal>
        <div className="grid md:grid-cols-4 gap-px bg-background/15 border border-background/15 rounded-md overflow-hidden">
          {kpis.map((k, i) => (
            <Reveal key={k.l} delay={i * 100}>
              <div className="bg-foreground p-8 md:p-10 min-h-[200px] h-full flex flex-col justify-between">
                <div className="display text-5xl md:text-6xl text-background">{k.k}</div>
                <div className="text-background/50 text-xs uppercase tracking-widest">{k.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-background/50 text-sm">
          Illustrative ranges from early pilots and consumer research, 2024–2025.
        </p>
      </Section>

      <Section eyebrow="Get started">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <Reveal as="h2" className="display text-4xl md:text-6xl">
            Pilot a single SKU.
            <span className="text-foreground/40"> Scale across the range.</span>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="btn-primary">
              Talk to the team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
