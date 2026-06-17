import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import groceries from "@/assets/groceries.jpg";
import heroScan from "@/assets/hero-scan.jpg";
import { ArrowUpRight, BookOpen, Gift, Leaf, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/packytrace")({
  head: () => ({
    meta: [
      { title: "PackyTrace — A useful 15-second moment on every pack" },
      {
        name: "description",
        content:
          "PackyTrace is Ready2Trace's consumer product. Scan the QR on any pack and get clear answers — allergens, recipes, recycling, rewards.",
      },
      { property: "og:title", content: "PackyTrace — Ready2Trace's consumer product" },
      {
        property: "og:description",
        content:
          "Clear answers on the things you already buy. No app install, no friction.",
      },
      { property: "og:url", content: "/packytrace" },
    ],
    links: [{ rel: "canonical", href: "/packytrace" }],
  }),
  component: PackyTracePage,
});

function PackyTracePage() {
  const value = [
    { i: Sparkles, t: "Personalised allergens", d: "Plain-language answers tuned to your dietary profile — no scrolling through fine print." },
    { i: BookOpen, t: "Recipes from your pantry", d: "Turn what you already bought into ideas, with steps that match the products on your shelf." },
    { i: Leaf, t: "Recycle right, by postcode", d: "Geo-localised guidance down to the municipality. The right bin, every time." },
    { i: Gift, t: "Rewards built-in", d: "Loyalty from the brands you actually buy — not a separate app to download." },
    { i: MapPin, t: "Origin, transparent", d: "Lifecycle, sourcing and certifications — the story behind the shelf." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="PackyTrace · B2C"
        title={
          <>
            Clear answers, on<br />
            <span className="text-foreground/40">the things you buy.</span>
          </>
        }
        lede="PackyTrace is Ready2Trace's first product — built for the shopper standing in front of the shelf, not the regulator behind a desk."
      />

      <Section>
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          <Reveal>
            <div className="relative h-full min-h-[420px] rounded-md overflow-hidden bg-sand">
              <img
                src={groceries}
                alt="Everyday groceries — what PackyTrace is built for"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-foreground text-background rounded-md p-8 md:p-12 h-full flex flex-col">
              <div className="eyebrow text-ember">Why it exists</div>
              <p className="mt-8 text-xl md:text-2xl leading-relaxed text-background">
                Most QR codes on food packs lead nowhere useful. PackyTrace turns
                that mandatory square into a fifteen-second answer — about what's
                in the pack, where it came from, and what to do with it next.
              </p>
              <div className="mt-auto pt-10">
                <Link to="/how-it-works" className="inline-flex items-center gap-2 text-background hover:text-ember transition-colors">
                  See how PackyTrace works
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="What you get">
        <Reveal as="h2" className="display text-4xl md:text-6xl max-w-3xl mb-16">
          Five things, one scan.
          <span className="text-foreground/40"> No app to install.</span>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {value.map((v, i) => (
            <Reveal key={v.t} delay={i * 80} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="group bg-card border border-border rounded-md p-8 h-full min-h-[220px] flex flex-col hover:-translate-y-1 hover:border-foreground/40 transition-all duration-500">
                <v.i className="h-6 w-6 text-ember transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <div className="mt-auto pt-10">
                  <h3 className="text-2xl mb-2">{v.t}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-sand">
        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-center">
          <Reveal>
            <div className="rounded-md overflow-hidden aspect-[4/5]">
              <img src={heroScan} alt="Scanning a PackyTrace QR code" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="display text-4xl md:text-6xl">
              Curious how the<br />
              <span className="text-foreground/40">15 seconds unfold?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              The product flow, the features, and what each tap actually does.
            </p>
            <Link to="/how-it-works" className="btn-primary mt-10">
              See how PackyTrace works <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </Layout>
  );
}
