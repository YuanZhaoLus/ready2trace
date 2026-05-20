import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Partner With PackyTrace" },
      { name: "description", content: "Let's build the next layer of food packaging together. Food brands, packaging companies, retailers and innovation teams — get in touch." },
      { property: "og:title", content: "Contact — Partner With PackyTrace" },
      { property: "og:description", content: "Become a partner brand. Pilot a single SKU. Scale across the range." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="bg-foreground text-background pt-36 md:pt-44 pb-24 md:pb-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-ember/15 blur-3xl"
          style={{ animation: "floaty 8s ease-in-out infinite" }}
        />
        <div className="container-x relative">
          <div
            className="eyebrow text-ember mb-10 flex items-center gap-2"
            style={{ animation: "fadeUp 700ms ease-out both" }}
          >
            <span className="inline-block h-1 w-1 rounded-full bg-ember" style={{ animation: "blink 1.6s ease-in-out infinite" }} />
            Partner With Us
          </div>
          <h1
            className="display text-[10vw] md:text-[7vw] lg:text-[7rem] leading-[0.95] text-background max-w-[18ch]"
            style={{ animation: "fadeUp 900ms 150ms ease-out both" }}
          >
            Let's build the next<br />
            layer of food<br />
            <span className="text-background/40">packaging together.</span>
          </h1>
          <p
            className="mt-12 text-lg md:text-xl text-background/60 max-w-2xl leading-relaxed"
            style={{ animation: "fadeUp 900ms 320ms ease-out both" }}
          >
            Food brands, packaging companies, retailers, innovation teams — if a QR on a pack
            should mean something more, we'd like to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={150} className="space-y-8">
            <ContactCard
              icon={Mail}
              label="Email"
              value="hello@ready2trace.com"
              href="mailto:hello@ready2trace.com"
            />
            <ContactCard
              icon={MessageSquare}
              label="Book a call"
              value="30-min intro with the team"
              href="#"
            />
            <ContactCard
              icon={MapPin}
              label="Based in"
              value="Milano, Italia"
            />
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Who we work with" className="bg-sand">
        <Reveal as="h2" className="display text-4xl md:text-6xl mb-12 max-w-3xl">
          Brands, packaging,<br />
          <span className="text-foreground/40">retail, research.</span>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
          {[
            { t: "Food & Beverage brands", d: "From single-SKU pilots to portfolio rollouts." },
            { t: "Packaging companies", d: "Co-deliver the digital layer with the physical one." },
            { t: "Retailers", d: "Own the post-shelf experience across categories." },
            { t: "Innovation & research", d: "Studies, pilots, and EU-funded programs." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="bg-background p-8 min-h-[200px] h-full flex flex-col justify-between group transition-colors duration-500 hover:bg-foreground hover:text-background">
                <ArrowUpRight className="h-5 w-5 text-ember transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                <div>
                  <div className="display text-xl mb-2">{c.t}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-background/60 transition-colors duration-500">
                    {c.d}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-start gap-5 border-t border-foreground/15 pt-6">
      <div className="h-10 w-10 rounded-sm bg-foreground text-background flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="eyebrow text-ember mb-1">{label}</div>
        <div className="text-xl text-foreground">{value}</div>
      </div>
      {href && (
        <ArrowUpRight className="h-5 w-5 text-foreground/30 transition-all duration-500 group-hover:text-ember group-hover:-translate-y-1 group-hover:translate-x-1" />
      )}
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8 bg-sand p-8 md:p-10 rounded-md"
    >
      <div className="eyebrow text-ember">Send us a note</div>
      <Field label="Name" name="name" placeholder="Maria Rossi" />
      <Field label="Company" name="company" placeholder="Brand or organisation" />
      <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
      <Field
        label="Tell us about your packaging"
        name="message"
        textarea
        placeholder="What product line, what region, what you'd like the QR to do…"
      />
      <button
        type="submit"
        className="btn-primary"
        disabled={sent}
      >
        {sent ? "Thanks — we'll be in touch." : "Send message"}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const common =
    "w-full bg-transparent border-b border-foreground/20 py-3 outline-none text-lg placeholder:text-foreground/30 focus:border-ember transition-colors duration-300";
  return (
    <label className="block group">
      <span className="eyebrow text-foreground/60 group-focus-within:text-ember transition-colors duration-300">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={common + " resize-none"} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={common} required />
      )}
    </label>
  );
}
