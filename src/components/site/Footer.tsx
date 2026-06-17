import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Consumer",
    items: [
      { label: "PackyTrace", to: "/packytrace" as const },
      { label: "How It Works", to: "/how-it-works" as const },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "For Companies", to: "/companies" as const },
      { label: "Brand Dashboard", to: "/dashboard" as const },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-x py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="display text-2xl">READY2TRACE</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The digital layer behind food packaging. Built by Ready2Trace, an
            Italian software company.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="eyebrow text-foreground/70 mb-4">{c.title}</div>
            <ul className="space-y-2 text-sm">
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="eyebrow text-foreground/70 mb-4">Legal</div>
          <ul className="space-y-2 text-sm">
            {["Privacy", "Terms", "GDPR", "Cookies"].map((l) => (
              <li key={l}>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground border-t border-border/60">
        <span>© {new Date().getFullYear()} Ready2Trace S.r.l. — Milano, Italia</span>
        <span>Building the next layer of food packaging.</span>
      </div>
    </footer>
  );
}
