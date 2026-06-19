import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import heroScan from "@/assets/hero-scan.jpg";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  ScanLine,
  LineChart,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ready2Trace — The digital layer behind food packaging" },
      {
        name: "description",
        content:
          "Ready2Trace builds the digital layer behind food packaging. Two products on one architecture: PackyTrace for shoppers, a brand dashboard for the companies behind the shelf.",
      },
      { property: "og:title", content: "Ready2Trace — The digital layer behind food packaging" },
      {
        property: "og:description",
        content:
          "Two products, one architecture. PackyTrace for shoppers, a brand dashboard for the companies behind the shelf.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <Problem />
      <TwoPillars />
      <WhyUs />
      <ExploreMore />
    </Layout>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.78 0.13 268 / 0.55), transparent 70%)",
            animation: "drift 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-20 -right-32 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.85 0.08 290 / 0.6), transparent 70%)",
            animation: "drift 18s ease-in-out -4s infinite",
          }}
        />
      </div>
      <div className="container-x">
        <div
          className="eyebrow text-ember mb-8 flex items-center gap-2"
          style={{ animation: "fadeUp 700ms ease-out both" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" style={{ animation: "blink 1.6s ease-in-out infinite" }} />
          Ready2Trace
        </div>
        <h1 className="display text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] text-foreground">
          <span className="inline-block" style={{ animation: "fadeUp 900ms 120ms ease-out both" }}>
            The digital layer
          </span>
          <br />
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              animation: "fadeUp 900ms 280ms ease-out both, gradient-pan 8s linear infinite",
              backgroundImage:
                "linear-gradient(90deg, oklch(0.42 0.21 268), oklch(0.62 0.20 280), oklch(0.42 0.21 268))",
              backgroundSize: "200% 100%",
            }}
          >
            behind food packaging.
          </span>
        </h1>
        <div className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            style={{ animation: "fadeUp 900ms 460ms ease-out both" }}
          >
            We're an Italian software company turning the QR code on every food
            pack into something useful — for the shopper standing in front of
            the shelf, and for the brand behind it.
          </p>
          <div
            className="flex flex-wrap gap-3 md:justify-end"
            style={{ animation: "fadeUp 900ms 600ms ease-out both" }}
          >
            <Link to="/packytrace" className="btn-primary">
              Meet PackyTrace
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/dashboard" className="btn-ghost">
              See the dashboard
            </Link>
          </div>
        </div>

        <Reveal className="mt-20" delay={100}>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
            <div className="relative aspect-[4/5] md:aspect-auto bg-sand rounded-md overflow-hidden group">
              <img
                src={heroScan}
                alt="A consumer scanning a QR code on an Italian food package"
                width={1280}
                height={1280}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
            </div>
            <div className="bg-foreground text-background rounded-md p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-ember/20 blur-3xl"
                style={{ animation: "floaty 6s ease-in-out infinite" }}
              />
              <div className="eyebrow text-ember relative">Two products, one architecture</div>
              <div className="mt-12 relative">
                <div className="display text-3xl md:text-5xl text-background leading-tight">
                  PackyTrace for<br />
                  shoppers. A dashboard<br />
                  <span className="text-background/40">for the brand.</span>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
                  <Stat k="B2C" v="PackyTrace" />
                  <Stat k="B2B" v="Brand dashboard" />
                  <Stat k="Built in" v="Italy" />
                  <Stat k="GDPR" v="By design" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-background/15 pt-3 transition-colors duration-300 hover:border-ember">
      <div className="text-background/50 text-xs uppercase tracking-widest">{k}</div>
      <div className="text-background mt-1">{v}</div>
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Food & Beverage",
    "Packaging",
    "Retail",
    "Sustainability",
    "Traceability",
    "Consumer Insight",
    "GDPR-aware",
    "EU Regulation-ready",
    "DPP (Digital Product Passport) starts to reveal in our daily lifes and has been implemented into heterogeneous fields step by step according to the regulation",
  ];
  return (
    <div className="border-y border-border/60 py-6 overflow-hidden bg-background">
      <div
        className="flex gap-12 whitespace-nowrap text-sm text-muted-foreground"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...items, ...items, ...items].map((i, idx) => (
          <span key={idx} className="flex items-center gap-12">
            {i}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  return (
    <Section eyebrow="The problem we picked">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
        <Reveal as="h2" className="display text-4xl md:text-6xl leading-[1.02]">
          The information<br />exists. The right<br />answer doesn't.
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            Shoppers face fragmented labels and untrusted sources. Brands ship
            mandatory QR codes that lead to dead landing pages — and stay
            structurally distant from the people who buy their products.
          </p>
          <p>
            Ready2Trace turns those mandatory codes into a living service layer.
            One side speaks to the consumer. The other gives the brand back its
            buyer, in a privacy-safe form.
          </p>
          <p className="text-foreground font-medium">
            We help people understand what they buy — and help brands understand
            the people who buy it.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- TWO PILLARS ---------------- */
function TwoPillars() {
  return (
    <Section eyebrow="What we build">
      <div className="grid md:grid-cols-2 gap-4">
        <Reveal>
          <PillarCard
            tone="cream"
            tag="B2C · PackyTrace"
            title="A useful 15-second moment on every pack."
            bullets={[
              "Personalised allergens & nutrition",
              "Recipes from your pantry",
              "Recycling by postcode",
              "Rewards from the brands you buy",
            ]}
            icon={ScanLine}
            cta={{ to: "/packytrace", label: "Meet PackyTrace" }}
          />
        </Reveal>
        <Reveal delay={150}>
          <PillarCard
            tone="ink"
            tag="B2B · Brand Dashboard"
            title="Pack-level insight from the people who actually bought."
            bullets={[
              "Continuous, first-party behavioural data",
              "Aggregated k ≥ 5, GDPR-safe by design",
              "SKU-level scan, recycling and sentiment",
              "Replaces fragmented €30k–150k+ research stacks",
            ]}
            icon={LineChart}
            cta={{ to: "/dashboard", label: "See the dashboard" }}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function PillarCard({
  tag,
  title,
  bullets,
  tone,
  cta,
  icon: Icon,
}: {
  tag: string;
  title: string;
  bullets: string[];
  tone: "cream" | "ink";
  cta: { to: string; label: string };
  icon: typeof ScanLine;
}) {
  const isInk = tone === "ink";
  return (
    <div
      className={`group relative rounded-md overflow-hidden p-8 md:p-12 min-h-[480px] h-full flex flex-col transition-all duration-700 hover:-translate-y-1 ${
        isInk ? "bg-foreground text-background" : "bg-sand text-foreground"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="eyebrow text-ember">{tag}</div>
        <Icon className={`h-6 w-6 ${isInk ? "text-background/60" : "text-foreground/60"}`} />
      </div>
      <h3
        className={`display text-3xl md:text-5xl mt-6 max-w-md ${
          isInk ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-8 space-y-3">
        {bullets.map((b) => (
          <li
            key={b}
            className={`flex items-start gap-3 text-sm ${
              isInk ? "text-background/70" : "text-foreground/70"
            }`}
          >
            <span className="mt-1.5 h-1 w-3 bg-ember transition-all duration-500 group-hover:w-5" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-10">
        <Link
          to={cta.to}
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
            isInk ? "text-background hover:text-ember" : "text-foreground hover:text-ember"
          }`}
        >
          {cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { i: ShieldCheck, t: "Regulation-aware by design", d: "Built on top of the QR codes EU regulation already requires — turning compliance pressure into product value." },
    { i: Sparkles, t: "Designed for real adoption", d: "Consumer-first interfaces grounded in interviews and research. Not another dead compliance page." },
    { i: Leaf, t: "A bridge, not a silo", d: "One architecture serving both sides of the shelf — shoppers and brands, on the same scan." },
  ];
  return (
    <Section eyebrow="Why Ready2Trace">
      <Reveal as="h2" className="display text-4xl md:text-6xl max-w-4xl mb-16">
        The QR code is already there.
        <span className="text-foreground/40"> We make it useful.</span>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
        {items.map((it, idx) => (
          <Reveal key={it.t} delay={idx * 120}>
            <div className="bg-background p-8 md:p-10 min-h-[260px] h-full flex flex-col group transition-colors duration-500 hover:bg-sand">
              <it.i className="h-6 w-6 text-ember transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <h3 className="text-xl mt-8 mb-3">{it.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- EXPLORE MORE ---------------- */
function ExploreMore() {
  const links = [
    { to: "/packytrace", t: "PackyTrace", d: "The consumer product, in one page." },
    { to: "/how-it-works", t: "How It Works", d: "The 15-second flow and full feature system." },
    { to: "/companies", t: "For Companies", d: "The B2B side and how it came to be." },
    { to: "/dashboard", t: "Brand Dashboard", d: "Pack-level insight, GDPR-safe by design." },
    { to: "/about", t: "About", d: "Six students. One question. A startup in the making." },
    { to: "/contact", t: "Contact", d: "Build the next layer of food packaging with us." },
  ] as const;
  return (
    <Section eyebrow="Keep exploring">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
        {links.map((l, i) => (
          <Reveal key={l.to} delay={i * 80}>
            <Link
              to={l.to}
              className="group bg-background block p-8 h-full min-h-[200px] flex flex-col justify-between transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <ArrowUpRight className="h-5 w-5 text-ember transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              <div>
                <div className="display text-2xl mb-2">{l.t}</div>
                <div className="text-sm text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                  {l.d}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
