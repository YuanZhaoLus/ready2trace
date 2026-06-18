import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Lock, ShieldCheck, EyeOff } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Brand Dashboard — Ready2Trace" },
      {
        name: "description",
        content:
          "Pack-level, first-party consumer insight for food brands — continuous, GDPR-safe by design. The B2B side of Ready2Trace.",
      },
      { property: "og:title", content: "Brand Dashboard — Ready2Trace" },
      {
        property: "og:description",
        content:
          "Continuous, pack-level behavioural data from actual buyers of your product. €40–80k/yr — replacing fragmented €30–150k+ research stacks.",
      },
      { property: "og:url", content: "/dashboard" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="For Companies · B2B"
        title={
          <>
            Pack-level insight.<br />
            <span className="text-foreground/40">GDPR-safe by design.</span>
          </>
        }
        lede="The other half of Ready2Trace — a brand dashboard built on the same scans that power PackyTrace, with privacy baked into the architecture, not bolted on."
      />

      {/* WHY A DASHBOARD — pricing benchmark */}
      <Section eyebrow="Why a dashboard">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal as="h2" className="display text-4xl md:text-5xl">
            Brands sell through retailers.<br />
            <span className="text-foreground/40">So they never meet the buyer.</span>
          </Reveal>
          <Reveal delay={150} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Food brands rely on periodic surveys, third-party trend tools and
              retailer-shared POS — fragmented, lagging, and aggregated far above
              the individual product.
            </p>
            <p className="text-foreground">
              Ready2Trace gives them continuous, pack-level, first-party behavioural
              data from the people who actually bought their product.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-hidden rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-foreground text-background">
              <tr>
                <th className="p-4 font-normal eyebrow text-background/70">Category</th>
                <th className="p-4 font-normal eyebrow text-background/70">Typical annual cost</th>
                <th className="p-4 font-normal eyebrow text-background/70">What it gives the brand</th>
              </tr>
            </thead>
            <tbody className="bg-background">
              {[
                ["One-off food consumer test (EU)", "€5k–10k / study", "Point-in-time reaction, before launch"],
                ["Brand-health tracker (1–2 markets)", "~$60k / yr", "Periodic aggregate — not pack-level"],
                ["Standing consumer panel", "$30k–100k / yr", "Pre-recruited respondents, not your buyers"],
                ["Enterprise insight platform", "$30k–150k+ / yr", "Tooling — brand still recruits"],
                ["Syndicated retail data", "Tens of thousands / yr", "Category sales, no consumer behaviour"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-4 align-top">{a}</td>
                  <td className="p-4 align-top text-muted-foreground">{b}</td>
                  <td className="p-4 align-top text-muted-foreground">{c}</td>
                </tr>
              ))}
              <tr className="border-t border-border bg-sand">
                <td className="p-4 align-top font-medium">Ready2Trace</td>
                <td className="p-4 align-top text-foreground">€40k–80k / yr</td>
                <td className="p-4 align-top">
                  Continuous, pack-level, first-party behavioural data from actual buyers — plus the consumer app itself.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* DASHBOARD MOCKUP */}
      <Section eyebrow="The dashboard" className="bg-foreground text-background">
        <Reveal as="h2" className="display text-4xl md:text-6xl text-background max-w-3xl mb-12">
          One pack.<br />
          <span className="text-background/40">A dozen answers.</span>
        </Reveal>

        <div className="rounded-md border border-background/15 overflow-hidden bg-background text-foreground">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-border bg-sand">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-ember" />
              <div className="text-sm font-medium">Yogurt 500g</div>
              <div className="text-xs text-muted-foreground">· SKU 7384-921</div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-sm bg-background border border-border">Last 30 days</span>
              <span className="px-3 py-1.5 rounded-sm bg-background border border-border text-muted-foreground">All regions</span>
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { k: "Total scans", v: "18,420", d: "↑ 12% vs prior period", tone: "ember" },
              { k: "First-time scanners", v: "71%", d: "of total scans" },
              { k: "Return-scan rate", v: "23%", d: "Account 31% · Anon 18%" },
              { k: "Recycling completion", v: "41%", d: "of opened sessions" },
              { k: "Allergen alert rate", v: "12%", d: "↑ from 9% last period", tone: "ember" },
              { k: "Avg dwell time", v: "47s", d: "Recipes most-viewed" },
              { k: "Product satisfaction", v: "4.2 / 5", d: "across 4,860 reviews" },
              { k: "Top requested variant", v: "Lactose-free", d: "from preference data" },
            ].map((m) => (
              <div key={m.k} className="bg-background p-5 min-h-[120px] flex flex-col justify-between">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                <div className={`display text-3xl md:text-4xl ${m.tone === "ember" ? "text-ember" : "text-foreground"}`}>
                  {m.v}
                </div>
                <div className="text-xs text-muted-foreground">{m.d}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid md:grid-cols-2 gap-px bg-border border-t border-border">
            {/* Scan volume bars */}
            <div className="bg-background p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-medium">Scan volume</div>
                  <div className="text-xs text-muted-foreground">New vs returning, daily</div>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 bg-foreground" /> New</span>
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 bg-ember" /> Returning</span>
                </div>
              </div>
              <div className="flex items-end gap-2 h-40">
                {[55, 70, 48, 82, 64, 90, 75, 88, 72, 95, 80, 68, 92, 78].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-px justify-end">
                    <div className="bg-foreground" style={{ height: `${h * 0.6}%` }} />
                    <div className="bg-ember" style={{ height: `${h * 0.35}%` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement by region */}
            <div className="bg-background p-6">
              <div className="mb-6">
                <div className="text-sm font-medium">Engagement by region</div>
                <div className="text-xs text-muted-foreground">Share of scans (k ≥ 5 only)</div>
              </div>
              <ul className="space-y-3">
                {[
                  ["Lombardia", 32],
                  ["Lazio", 21],
                  ["Veneto", 17],
                  ["Emilia-Romagna", 14],
                  ["Piemonte", 9],
                  ["Toscana", 7],
                ].map(([r, p]) => (
                  <li key={r as string} className="flex items-center gap-3 text-sm">
                    <span className="w-32 text-muted-foreground">{r}</span>
                    <div className="flex-1 h-2 bg-sand rounded-full overflow-hidden">
                      <div className="h-full bg-foreground" style={{ width: `${(p as number) * 2.5}%` }} />
                    </div>
                    <span className="w-10 text-right text-xs tabular-nums">{p}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SKU comparison */}
          <div className="bg-background border-t border-border p-6">
            <div className="mb-5">
              <div className="text-sm font-medium">SKU comparison</div>
              <div className="text-xs text-muted-foreground">Across the product range, this period</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="text-left py-2 font-normal">SKU</th>
                    <th className="text-right py-2 font-normal">Scans</th>
                    <th className="text-right py-2 font-normal">First-time</th>
                    <th className="text-right py-2 font-normal">Recycling</th>
                    <th className="text-right py-2 font-normal">Lactose-sensitive</th>
                    <th className="text-right py-2 font-normal">Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Yogurt 500g", "18,420", "71%", "41%", "18%", "4.2 / 5"],
                    ["Granola bar", "9,310", "66%", "35%", "9%", "3.9 / 5"],
                    ["Oat drink 1L", "4,180", "80%", "48%", "27%", "4.0 / 5"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-border">
                      {row.map((c, i) => (
                        <td key={i} className={`py-3 ${i === 0 ? "text-left" : "text-right tabular-nums"} ${i === 0 ? "" : "text-muted-foreground"}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Allergen + footnote */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-px bg-border border-t border-border">
            <div className="bg-background p-6">
              <div className="text-sm font-medium">Allergen alert triggers</div>
              <div className="text-xs text-muted-foreground mb-5">Share of scans, aggregate only</div>
              <div className="space-y-3">
                {[["Gluten", 12], ["Lactose", 8], ["Nuts", 3]].map(([a, p]) => (
                  <div key={a as string} className="flex items-center gap-3 text-sm">
                    <span className="w-24">{a}</span>
                    <div className="flex-1 h-2 bg-sand rounded-full overflow-hidden">
                      <div className="h-full bg-ember" style={{ width: `${(p as number) * 6}%` }} />
                    </div>
                    <span className="w-10 text-right text-xs tabular-nums">{p}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-muted-foreground flex items-start gap-2">
                <Lock className="h-3 w-3 mt-0.5" />
                Individual profiles never shown — Art. 9 special category data.
              </p>
            </div>
            <div className="bg-background p-6">
              <div className="text-sm font-medium">Loyalty engagement</div>
              <div className="text-xs text-muted-foreground mb-5">Last 30 days</div>
              <div className="grid grid-cols-3 gap-4">
                <Mini k="Participation" v="34%" />
                <Mini k="Points redeemed" v="9,140" />
                <Mini k="Top reward" v="Recipe pack" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-background/50 text-xs">
          Mockup with illustrative figures. No real brand data shown.
        </p>
      </Section>

      {/* GDPR by design */}
      <Section eyebrow="GDPR by design">
        <Reveal as="h2" className="display text-4xl md:text-6xl max-w-3xl mb-16">
          Three tiers of data.<br />
          <span className="text-foreground/40">One safe seam.</span>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              i: ShieldCheck,
              t: "Never-personal",
              d: "Product, pack and event data — SKU, batch, timestamp, region. Flows raw to the brand, because it never describes a person.",
            },
            {
              i: EyeOff,
              t: "Pseudonymised, consumer-side",
              d: "Device-based ID, individual scan history, dietary profiles, sentiment. Stays on the consumer side of the seam — never reaches the brand at row level.",
            },
            {
              i: Lock,
              t: "Aggregated only",
              d: "Behavioural insight reaches the brand as k ≥ 5 aggregates. Small regions or niche SKUs show 'not enough data yet' instead of a number.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="bg-card border border-border rounded-md p-8 h-full min-h-[260px] flex flex-col">
                <c.i className="h-6 w-6 text-ember" />
                <h3 className="text-xl mt-8 mb-3">{c.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <Reveal as="h2" className="display text-4xl md:text-6xl">
            Want this for<br />
            <span className="text-foreground/40">your SKUs?</span>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to the team <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/companies" className="btn-ghost">
              The B2B story
            </Link>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="display text-xl mt-1">{v}</div>
    </div>
  );
}
