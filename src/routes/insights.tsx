import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — PackyTrace" },
      { name: "description", content: "Field notes on food packaging, consumer behaviour, traceability and the product layer behind the QR." },
      { property: "og:title", content: "Insights — PackyTrace" },
      { property: "og:description", content: "Research, product and industry writing from the Ready2Trace team." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const featured = {
  tag: "Research",
  date: "May 2026",
  read: "8 min read",
  title: "Why 73% of food QR scans end in a dead page",
  excerpt:
    "We scanned 200 supermarket packages across three EU markets. Most QR codes lead to brochures, PDFs, or 404s. Here is what we found — and what the next layer should look like.",
};

const posts = [
  { tag: "Product", date: "Apr 2026", read: "6 min read", title: "Designing PackyTrace: from interview to interface" },
  { tag: "Industry", date: "Mar 2026", read: "5 min read", title: "EU packaging regulation is a product opportunity" },
  { tag: "Research", date: "Feb 2026", read: "7 min read", title: "What shoppers actually want from a scan" },
  { tag: "Engineering", date: "Jan 2026", read: "4 min read", title: "Building a low-latency layer for in-aisle moments" },
  { tag: "Brand", date: "Dec 2025", read: "5 min read", title: "Compliance is the wrong word. Try product." },
  { tag: "Sustainability", date: "Nov 2025", read: "6 min read", title: "Geo-localised recycling, by the bin" },
];

function InsightsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Field notes from<br />
            <span className="text-foreground/40">the next layer.</span>
          </>
        }
        lede="Research, product and industry writing from the Ready2Trace team. Plain language. Specific evidence."
      />

      <Section>
        <Reveal>
          <a
            href="#"
            className="group block bg-foreground text-background rounded-md p-8 md:p-14 relative overflow-hidden transition-transform duration-500 hover:-translate-y-1"
          >
            <div
              aria-hidden
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl"
              style={{ animation: "floaty 7s ease-in-out infinite" }}
            />
            <div className="relative flex items-center justify-between text-xs uppercase tracking-widest mb-12">
              <span className="text-ember">{featured.tag} · Featured</span>
              <span className="text-background/50">
                {featured.date} · {featured.read}
              </span>
            </div>
            <h2 className="relative display text-3xl md:text-6xl text-background max-w-4xl leading-[1.02] group-hover:text-ember transition-colors duration-500">
              {featured.title}
            </h2>
            <p className="relative mt-8 text-background/60 max-w-2xl text-lg leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="relative mt-10 inline-flex items-center gap-2 text-background text-sm">
              Read the report
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
        </Reveal>
      </Section>

      <Section eyebrow="All writing">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="bg-background p-8 min-h-[280px] h-full flex flex-col group cursor-pointer transition-colors duration-500 hover:bg-sand">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-ember">{p.tag}</span>
                  <span className="text-xs text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="display text-2xl mt-auto pt-12 leading-tight transition-colors duration-300 group-hover:text-ember">
                  {p.title}
                </h3>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Subscribe" className="bg-sand">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <Reveal as="h2" className="display text-4xl md:text-6xl leading-[1.02]">
            Field notes,<br />
            <span className="text-foreground/40">in your inbox.</span>
          </Reveal>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 border-b border-foreground/30 pb-3 focus-within:border-ember transition-colors duration-300"
            >
              <input
                type="email"
                required
                placeholder="you@brand.com"
                className="flex-1 bg-transparent outline-none text-lg placeholder:text-foreground/40"
              />
              <button type="submit" className="text-sm font-medium hover:text-ember transition-colors">
                Subscribe →
              </button>
            </form>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
