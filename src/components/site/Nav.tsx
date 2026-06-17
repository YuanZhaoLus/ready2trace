import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/companies", label: "For Companies" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "glass border-b border-border/60 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="display text-xl md:text-2xl text-foreground transition-transform duration-300 group-hover:-translate-y-px">
            READY2TRACE
          </span>
          <span className="hidden sm:inline text-[11px] tracking-widest text-muted-foreground uppercase mt-1">
            {"\n"}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "link-underline text-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="btn-primary hidden sm:inline-flex"
          >
            Partner With Us
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 group"
          >
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x py-6 flex flex-col gap-1">
          {links.slice(1).map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 text-2xl display border-b border-border/60 text-foreground hover:text-ember transition-colors"
              style={{
                animation: open ? `fadeUp 500ms ${i * 60}ms ease-out both` : "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 justify-center"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
