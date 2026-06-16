import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import heroScan from "@/assets/hero-scan.jpg";
import groceries from "@/assets/groceries.jpg";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PackyTrace — The digital layer behind food packaging" },
      {
        name: "description",
        content:
          "PackyTrace turns food packaging QR codes into useful digital experiences for consumers and actionable insights for brands. Built by Ready2Trace.",
      },
      { property: "og:title", content: "PackyTrace — The digital layer behind food packaging" },
      {
        property: "og:description",
        content:
          "From shelf to habit in 15 seconds. Branded consumer experiences and pack-level insight for food & beverage brands.",
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
      <Intro />
      <SplitAudience />
      <WhyUs />
      <ExploreMore />
    </Layout>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Ambient gradient blobs — Apple-style atmosphere */}
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
          Ready2Trace · PackyTrace
        </div>
        <h1 className="display text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] text-foreground max-w-[14ch]">
          <span className="inline-block" style={{ animation: "fadeUp 900ms 120ms ease-out both" }}>
            From shelf to habit
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
            in 15 seconds.
          </span>
        </h1>
        <div className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            style={{ animation: "fadeUp 900ms 460ms ease-out both" }}
          >
            We build the digital layer behind food packaging. Our first product,
            PackyTrace, turns every QR code into a useful experience for
            consumers — and a measurable channel for brands.
          </p>
          <div
            className="flex flex-wrap gap-3 md:justify-end"
            style={{ animation: "fadeUp 900ms 600ms ease-out both" }}
          >
            <Link to="/how-it-works" className="btn-primary">
              Meet PackyTrace
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link to="/companies" className="btn-ghost">
              For Companies
            </Link>
          </div>
        </div>

        <Reveal className="mt-20" delay={100}>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
            <div className="relative aspect-[4/5] md:aspect-auto bg-sand rounded-md overflow-hidden group">
              <img
                src={heroScan}
                alt="A consumer scanning a QR code on an Italian food package with PackyTrace"
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
              <div className="eyebrow text-ember relative">A living product page</div>
              <div className="mt-12 relative">
                <div className="display text-3xl md:text-5xl text-background leading-tight">
                  One scan.<br />
                  Five answers.<br />
                  <span className="text-background/40">Zero friction.</span>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
                  <Stat k="Origin" v="Field to shelf" />
                  <Stat k="Recycling" v="By postcode" />
                  <Stat k="Allergens" v="Personalised" />
                  <Stat k="Rewards" v="Loyalty built-in" />
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

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <Section eyebrow="The digital layer">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
        <Reveal as="h2" className="display text-4xl md:text-6xl leading-[1.02]">
          The information<br />exists. The right<br />answer doesn't.
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            Consumers face fragmented labels and untrusted sources. Brands ship
            QR codes under regulatory pressure that lead nowhere useful.
          </p>
          <p>
            PackyTrace turns those mandatory codes into a living service layer —
            clear answers for shoppers, branded engagement for companies,
            actionable insight across the supply chain.
          </p>
          <p className="text-foreground font-medium">
            We help people understand what they buy, and help brands understand
            the people who buy it.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}


/* ---------------- SPLIT AUDIENCE ---------------- */
function SplitAudience() {
  return (
    <Section eyebrow="Who it's for">
      <div className="grid md:grid-cols-2 gap-4">
        <Reveal>
          <AudienceCard
            tone="cream"
            tag="For Consumers"
            title="Clear answers, on the things you already buy."
            bullets={[
              "Personalised allergens & nutrition",
              "Recipes based on your pantry",
              "Recycle guidance by postcode",
              "Rewards from your favourite brands",
            ]}
            img={groceries}
          />
        </Reveal>
        <Reveal delay={150}>
          <AudienceCard
            tone="ink"
            tag="For Companies"
            title="A branded channel, with the data behind it."
            bullets={[
              "On-pack digital experience",
              "Pack-level interaction analytics",
              "Retention & loyalty built-in",
              "Fast setup, scalable architecture",
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function AudienceCard({
  tag,
  title,
  bullets,
  img,
  tone,
}: {
  tag: string;
  title: string;
  bullets: string[];
  img?: string;
  tone: "cream" | "ink";
}) {
  const isInk = tone === "ink";
  return (
    <div
      className={`group relative rounded-md overflow-hidden p-8 md:p-12 min-h-[520px] h-full flex flex-col transition-all duration-700 hover:-translate-y-1 ${
        isInk ? "bg-foreground text-background" : "bg-sand text-foreground"
      }`}
    >
      <div className="eyebrow text-ember">{tag}</div>
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
      {img && (
        <div className="mt-auto pt-8 -mx-8 md:-mx-12 -mb-8 md:-mb-12 overflow-hidden">
          <img
            src={img}
            alt="Fresh groceries — the everyday products PackyTrace serves"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full h-56 object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
        </div>
      )}
      {!img && (
        <div className="mt-auto pt-8 grid grid-cols-3 gap-3 text-xs">
          <MiniStat n="38%" l="repeat scans" />
          <MiniStat n="2.4×" l="time on pack" />
          <MiniStat n="12s" l="median dwell" />
        </div>
      )}
    </div>
  );
}

function MiniStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-background/15 pt-3">
      <div className="display text-2xl text-background">{n}</div>
      <div className="text-background/50 uppercase tracking-widest text-[10px] mt-1">{l}</div>
    </div>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { i: ShieldCheck, t: "Regulation-aware by design", d: "Built on top of the QR codes that EU regulation already requires — we turn compliance pressure into product value." },
    { i: Sparkles, t: "Designed for real adoption", d: "Consumer-first interfaces grounded in interviews and research. Not another dead compliance page." },
    { i: Leaf, t: "A bridge, not a silo", d: "We connect packaging, people and data — the missing link between brand intent and shelf behaviour." },
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
    { to: "/how-it-works", t: "How It Works", d: "The 15-second flow and full feature system." },
    { to: "/companies", t: "For Companies", d: "Branded channel, behavioural insight, retention." },
    { to: "/about", t: "About", d: "Six students. One question. A startup in the making." },
    { to: "/insights", t: "Insights", d: "Field notes from food, packaging and product." },
    { to: "/contact", t: "Contact", d: "Build the next layer of food packaging with us." },
  ] as const;
  return (
    <Section eyebrow="Keep exploring">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
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
