import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ready2Trace" },
      { name: "description", content: "Ready2Trace began as a five-month innovation challenge. Six students from different backgrounds asking why the QR code on every package leads nowhere useful." },
      { property: "og:title", content: "About — Ready2Trace" },
      { property: "og:description", content: "Six students. One question. Five months of innovation. Now a startup." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const timeline = [
    { p: "Month 01", t: "The question", d: "Why does a QR code on a food pack lead nowhere useful?" },
    { p: "Month 02", t: "Field research", d: "Interviews with shoppers, brands, packaging stakeholders." },
    { p: "Month 03", t: "Prototypes", d: "Testing the digital layer behind the scan." },
    { p: "Month 04", t: "Validation", d: "Pressure-testing the platform with real food brands." },
    { p: "Month 05", t: "Ready2Trace", d: "From challenge project to early-stage venture." },
  ];
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title={
          <>
            Six students.<br />
            One question.<br />
            <span className="text-foreground/40">Five months of innovation.</span>
          </>
        }
        lede="Ready2Trace began as a research challenge. We're turning the answer into a company — the digital layer behind food packaging."
      />

      <Section>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <Reveal as="p" className="text-xl md:text-2xl text-foreground leading-relaxed">
            We are six students from different backgrounds who met inside an innovation challenge.
            Five months of interviews, prototypes and pressure-testing later, we decided the work
            shouldn't end with a final presentation — it should become a company.
          </Reveal>
          <Reveal delay={150} className="space-y-10">
            <Stmt label="Purpose">
              Make product information understandable, useful, and actionable — for both consumers and brands.
            </Stmt>
            <Stmt label="Vision">
              A world where every physical product becomes a meaningful digital experience.
            </Stmt>
            <Stmt label="Mission">
              Help food brands transform mandatory product scans into experiences people actually value.
            </Stmt>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="The journey" className="bg-sand">
        <Reveal as="h2" className="display text-4xl md:text-6xl mb-16 max-w-3xl">
          Five months,<br />in five chapters.
        </Reveal>
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-foreground/15 hidden md:block" />
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((m, i) => (
              <Reveal key={m.p} delay={i * 120}>
                <div className="group">
                  <div className="hidden md:block h-3 w-3 rounded-full bg-foreground -mt-1.5 mb-8 transition-all duration-500 group-hover:bg-ember group-hover:scale-150" />
                  <div className="eyebrow text-ember mb-3">{m.p}</div>
                  <div className="display text-2xl mb-2">{m.t}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{m.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="The team">
        <Reveal as="h2" className="display text-4xl md:text-6xl max-w-3xl mb-12">
          Six backgrounds.<br />
          <span className="text-foreground/40">One product.</span>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border rounded-md overflow-hidden">
            {["Product", "Design", "Engineering", "Research", "Business", "Sustainability"].map(
              (role, i) => (
                <div
                  key={role}
                  className="bg-background p-6 min-h-[160px] flex flex-col justify-between group transition-colors duration-500 hover:bg-foreground hover:text-background"
                >
                  <div className="display text-sm text-ember tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                  <div className="display text-xl mt-auto">{role}</div>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </Section>

      <Section className="bg-foreground text-background">
        <Reveal as="h2" className="display text-4xl md:text-6xl text-background max-w-3xl">
          The project ended.<br />
          <span className="text-background/40">The work just started.</span>
        </Reveal>
        <Reveal delay={150} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-background/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            Work with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>
    </Layout>
  );
}

function Stmt({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <div className="eyebrow text-ember mb-2 transition-all duration-500 group-hover:tracking-[0.3em]">
        {label}
      </div>
      <p className="text-xl text-foreground leading-snug">{children}</p>
    </div>
  );
}
