import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#companies", label: "For Companies" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="display text-xl md:text-2xl text-foreground">PackyTrace</span>
          <span className="hidden sm:inline text-[11px] tracking-widest text-muted-foreground uppercase mt-1">
            by Ready2Trace
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 md:px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
        >
          Partner With Us
        </a>
      </div>
    </header>
  );
}
