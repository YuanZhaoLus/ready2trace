import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Sections";
import heroScan from "@/assets/hero-scan.jpg";
import groceries from "@/assets/groceries.jpg";
import {
  ArrowUpRight,
  BookOpen,
  Recycle,
  Gift,
  Sparkles,
  MapPin,
  ScanLine,
  ChartBarBig,
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <HowItWorks />
        <Features />
        <SplitAudience />
        <WhyUs />
        <ForCompanies />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="container-x">
        <div className="eyebrow text-ember mb-8 flex items-center gap-2">
          <span className="inline-block h-1 w-1 rounded-full bg-ember" />
          Ready2Trace · PackyTrace
        </div>
        <h1 className="display text-[12vw] md:text-[8.5vw] lg:text-[7.5rem] text-foreground max-w-[14ch]">
          From shelf to habit<br />
          <span className="text-foreground/40">in 15 seconds.</span>
        </h1>
        <div className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            PackyTrace transforms food packaging QR codes into useful digital
            experiences for consumers — and actionable insights for the brands
            behind them.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
            >
              Partner With Us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/15 px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/40 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
            <div className="relative aspect-[4/5] md:aspect-auto bg-sand rounded-md overflow-hidden">
              <img
                src={heroScan}
                alt="A consumer scanning a QR code on an Italian food package with PackyTrace"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-foreground text-background rounded-md p-8 md:p-12 flex flex-col justify-between">
              <div className="eyebrow text-ember">A living product page</div>
              <div className="mt-12">
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
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-background/15 pt-3">
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
      <div className="flex gap-12 whitespace-nowrap animate-[scroll_40s_linear_infinite] text-sm text-muted-foreground">
        {[...items, ...items, ...items].map((i, idx) => (
          <span key={idx} className="flex items-center gap-12">
            {i}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <Section eyebrow="The digital layer">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
        <h2 className="display text-4xl md:text-6xl leading-[1.02]">
          The information<br />exists. The right<br />answer doesn't.
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
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
        </div>
      </div>
    </Section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
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
  return (
    <Section id="how" eyebrow="How it works" className="bg-foreground text-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 className="display text-4xl md:text-6xl text-background max-w-3xl">
          A useful 15-second<br />moment, built into every pack.
        </h2>
        <p className="text-background/60 max-w-sm text-lg">
          One integrated platform replacing dead landing pages with measurable
          product experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-background/15 border border-background/15 rounded-md overflow-hidden">
        {steps.map((s) => (
          <div key={s.n} className="bg-foreground p-8 md:p-10 min-h-[280px] flex flex-col">
            <div className="flex items-center justify-between">
              <span className="display text-5xl text-background/30">{s.n}</span>
              <s.i className="h-6 w-6 text-ember" />
            </div>
            <div className="mt-auto">
              <h3 className="text-background text-2xl mb-3">{s.t}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
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
    <Section id="features" eyebrow="Features">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 className="display text-4xl md:text-6xl max-w-3xl">
          Five tools.<br />
          <span className="text-foreground/40">One product system.</span>
        </h2>
        <p className="text-muted-foreground max-w-md text-lg">
          Modular by design, integrated by default. Activate what your brand
          needs and grow into the rest.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={f.t}
            className={`group relative bg-card border border-border rounded-md p-8 hover:border-foreground/40 transition-colors min-h-[260px] flex flex-col ${
              i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-sm ${
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
            <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-foreground/30 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
        Also available — allergen alerts, recipe surfaces, pantry tracking,
        sustainability guidance, and post-scan analytics for brands.
      </p>
    </Section>
  );
}

/* ---------------- SPLIT AUDIENCE ---------------- */
function SplitAudience() {
  return (
    <Section eyebrow="Who it's for">
      <div className="grid md:grid-cols-2 gap-4">
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
      className={`relative rounded-md overflow-hidden p-8 md:p-12 min-h-[520px] flex flex-col ${
        isInk ? "bg-foreground text-background" : "bg-sand text-foreground"
      }`}
    >
      <div className={`eyebrow ${isInk ? "text-ember" : "text-ember"}`}>{tag}</div>
      <h3 className={`display text-3xl md:text-5xl mt-6 max-w-md ${isInk ? "text-background" : "text-foreground"}`}>
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
            <span className={`mt-1.5 h-1 w-3 ${isInk ? "bg-ember" : "bg-ember"}`} />
            {b}
          </li>
        ))}
      </ul>
      {img && (
        <div className="mt-auto pt-8 -mx-8 md:-mx-12 -mb-8 md:-mb-12">
          <img
            src={img}
            alt="Fresh groceries — the everyday products PackyTrace serves"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full h-56 object-cover"
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
    {
      i: ShieldCheck,
      t: "Regulation-aware by design",
      d: "Built on top of the QR codes that EU regulation already requires — we turn compliance pressure into product value.",
    },
    {
      i: Sparkles,
      t: "Designed for real adoption",
      d: "Consumer-first interfaces grounded in interviews and research. Not another dead compliance page.",
    },
    {
      i: Leaf,
      t: "A bridge, not a silo",
      d: "We connect packaging, people and data — the missing link between brand intent and shelf behaviour.",
    },
  ];
  return (
    <Section eyebrow="Why Ready2Trace">
      <h2 className="display text-4xl md:text-6xl max-w-4xl mb-16">
        The QR code is already there.
        <span className="text-foreground/40"> We make it useful.</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
        {items.map((it) => (
          <div key={it.t} className="bg-background p-8 md:p-10 min-h-[260px] flex flex-col">
            <it.i className="h-6 w-6 text-ember" />
            <h3 className="text-xl mt-8 mb-3">{it.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FOR COMPANIES ---------------- */
function ForCompanies() {
  const points = [
    "Branded digital experience on every pack",
    "Behavioural insight from real product interactions",
    "Pack-level data, not aggregated guesswork",
    "Retention & loyalty mechanics built-in",
    "Fast setup. Scalable architecture.",
    "Brands pay. Consumers use it for free.",
  ];
  return (
    <Section id="companies" eyebrow="For Companies" className="bg-sand">
      <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
        <div>
          <h2 className="display text-4xl md:text-6xl leading-[1.02]">
            We turn compliance<br />pressure into<br />
            <span className="text-ember">product value.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-md">
            For food brands, packaging companies, retailers and innovation teams
            ready to make the QR on their pack actually work.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
          >
            Become a partner brand
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
          {points.map((p, i) => (
            <li key={p} className="flex items-start gap-6 py-5">
              <span className="display text-sm text-ember mt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
        <div>
          <h2 className="display text-4xl md:text-6xl leading-[1.02]">
            Six students.<br />
            One question.<br />
            <span className="text-foreground/40">Five months of innovation.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ready2Trace began as a research challenge: six students from different
            backgrounds, asking why the QR code on every package leads nowhere
            useful. Five months of interviews, prototypes and pressure-testing
            later, we're turning the answer into a company.
          </p>
        </div>
        <div className="space-y-10">
          <Stmt label="Purpose">
            Make product information understandable, useful, and actionable —
            for both consumers and brands.
          </Stmt>
          <Stmt label="Vision">
            A world where every physical product becomes a meaningful digital
            experience.
          </Stmt>
          <Stmt label="Mission">
            Help food brands transform mandatory product scans into experiences
            people actually value.
          </Stmt>
        </div>
      </div>
    </Section>
  );
}

function Stmt({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow text-ember mb-2">{label}</div>
      <p className="text-xl text-foreground leading-snug">{children}</p>
    </div>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  const posts = [
    {
      tag: "Research",
      title: "Why 73% of food QR scans end in a dead page",
      meta: "8 min read",
    },
    {
      tag: "Product",
      title: "Designing PackyTrace: from interview to interface",
      meta: "6 min read",
    },
    {
      tag: "Industry",
      title: "EU packaging regulation is a product opportunity",
      meta: "5 min read",
    },
  ];
  return (
    <Section id="insights" eyebrow="Insights">
      <div className="flex items-end justify-between mb-12">
        <h2 className="display text-4xl md:text-6xl">Field notes.</h2>
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          All writing <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
        {posts.map((p) => (
          <article
            key={p.title}
            className="bg-background p-8 min-h-[260px] flex flex-col group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ember">{p.tag}</span>
              <span className="text-xs text-muted-foreground">{p.meta}</span>
            </div>
            <h3 className="display text-2xl mt-auto pt-12 leading-tight group-hover:text-ember transition-colors">
              {p.title}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <Section id="contact" className="bg-foreground text-background">
      <div className="eyebrow text-ember mb-10 flex items-center gap-2">
        <span className="inline-block h-1 w-1 rounded-full bg-ember" />
        Partner With Us
      </div>
      <h2 className="display text-5xl md:text-8xl leading-[0.95] max-w-[18ch] text-background">
        Let's build the next<br />layer of food<br />
        <span className="text-background/40">packaging together.</span>
      </h2>
      <div className="mt-16 grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <p className="text-lg text-background/60 max-w-xl leading-relaxed">
          Food brands, packaging companies, retailers, innovation teams — if a
          QR on a pack should mean something more, we'd like to hear from you.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:hello@ready2trace.com"
            className="inline-flex items-center justify-between gap-2 rounded-sm bg-background text-foreground px-6 py-4 text-sm font-medium hover:bg-background/90 transition-colors"
          >
            hello@ready2trace.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-between gap-2 rounded-sm border border-background/20 text-background px-6 py-4 text-sm font-medium hover:border-background/60 transition-colors"
          >
            Book an intro call
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
