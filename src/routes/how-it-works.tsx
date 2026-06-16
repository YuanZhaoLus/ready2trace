import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  BookOpen,
  Recycle,
  Gift,
  Sparkles,
  MapPin,
  ScanLine,
  ChartBarBig,
} from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "PackyTrace — How It Works" },
      {
        name: "description",
        content:
          "Scan, understand, engage. PackyTrace turns the QR code on every food pack into a useful 15-second moment for shoppers and a measurable channel for brands.",
      },
      { property: "og:title", content: "PackyTrace — How It Works" },
      {
        property: "og:description",
        content:
          "A useful 15-second moment, built into every pack. See the three-step product flow and the full feature system.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const steps = [
    {
      n: "01",
      t: "Scan",
      d: "Consumer scans the QR already printed on your packaging — no app install, no friction.",
      i: ScanLine,
    },
    {
      n: "02",
      t: "Understand",
      d: "PackyTrace delivers personalised, easy-to-read information: allergens, origin, recipes, recycling.",
      i: Sparkles,
    },
    {
      n: "03",
      t: "Engage",
      d: "Rewards, pantry tracking and AI chat keep consumers coming back — and feed brand insight.",
      i: ChartBarBig,
    },
  ];

  const features = [
    {
      i: BookOpen,
      t: "Grocery Notebook",
      d: "Save scanned products, track use, reduce waste — your pantry, organised by the things you actually buy.",
    },
    {
      i: Recycle,
      t: "Recycle",
      d: "Geo-localised recycling guidance, down to the municipality. The right bin, every time.",
      tone: "leaf",
    },
    {
      i: Gift,
      t: "Reward",
      d: "Loyalty, incentives and post-purchase engagement that turn scans into repeat customers.",
      tone: "ember",
    },
    {
      i: Sparkles,
      t: "AI Chatbot",
      d: "Ask anything about the product. Plain language answers grounded in verified brand data.",
    },
    {
      i: MapPin,
      t: "Origin Traceability",
      d: "Surface lifecycle, sourcing and certifications with clarity — the story behind the shelf.",
    },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            A useful 15-second<br />
            moment, built into<br />
            <span className="text-foreground/40">every pack.</span>
          </>
        }
        lede="One integrated platform replacing dead landing pages with measurable product experiences — for shoppers and for the brands behind them."
      />

      <Section eyebrow="The flow" className="bg-foreground text-background">
        <Reveal as="h2" className="display text-4xl md:text-6xl text-background max-w-3xl mb-16">
          Three steps.<br />
          <span className="text-background/40">One pack.</span>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-background/15 border border-background/15 rounded-md overflow-hidden">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delay={idx * 120}>
              <div className="bg-foreground p-8 md:p-10 min-h-[280px] h-full flex flex-col group transition-colors duration-500 hover:bg-foreground/95">
                <div className="flex items-center justify-between">
                  <span className="display text-5xl text-background/30 transition-colors duration-500 group-hover:text-ember">
                    {s.n}
                  </span>
                  <s.i className="h-6 w-6 text-ember transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-background text-2xl mb-3">{s.t}</h3>
                  <p className="text-background/60 text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Features">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal as="h2" className="display text-4xl md:text-6xl max-w-3xl">
            Five tools.<br />
            <span className="text-foreground/40">One product system.</span>
          </Reveal>
          <Reveal delay={150} className="text-muted-foreground max-w-md text-lg">
            Modular by design, integrated by default. Activate what your brand needs and grow into the rest.
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 80} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="group relative bg-card border border-border rounded-md p-8 hover:border-foreground/40 transition-all duration-500 min-h-[260px] h-full flex flex-col hover:-translate-y-1">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    f.tone === "leaf"
                      ? "bg-leaf/15 text-forest"
                      : f.tone === "ember"
                      ? "bg-ember/15 text-ember"
                      : "bg-foreground text-background"
                  }`}
                >
                  <f.i className="h-5 w-5" />
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="text-2xl mb-2">{f.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
                <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-foreground/30 transition-all duration-500 group-hover:text-ember group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          Also available — allergen alerts, recipe surfaces, pantry tracking, sustainability guidance, and post-scan analytics for brands.
        </p>
      </Section>

      <Section className="bg-sand">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <Reveal as="h2" className="display text-4xl md:text-6xl">
            Ready to put it on<br />
            <span className="text-foreground/40">your pack?</span>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap gap-3">
            <Link to="/companies" className="btn-primary">
              For Companies <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Talk to the team
            </Link>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
