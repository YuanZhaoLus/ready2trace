export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container-x py-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="display text-2xl">PackyTrace</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The digital layer behind food packaging. Built by Ready2Trace, an Italian software company.
          </p>
        </div>
        <FooterCol
          title="Product"
          items={["How It Works", "Features", "For Companies", "Insights"]}
        />
        <FooterCol title="Company" items={["About", "Mission", "Team", "Contact"]} />
        <FooterCol title="Legal" items={["Privacy", "Terms", "GDPR", "Cookies"]} />
      </div>
      <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground border-t border-border/60">
        <span>© {new Date().getFullYear()} Ready2Trace S.r.l. — Milano, Italia</span>
        <span>Building the next layer of food packaging.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="eyebrow text-foreground/70 mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
