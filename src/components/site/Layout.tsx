import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className="pt-36 md:pt-44 pb-12 md:pb-20">
      <div className="container-x">
        <div className="eyebrow text-ember mb-8 flex items-center gap-2 animate-[fadeUp_700ms_ease-out_both]">
          <span className="inline-block h-1 w-1 rounded-full bg-ember" />
          {eyebrow}
        </div>
        <h1
          className="display text-[10vw] md:text-[7vw] lg:text-[6.5rem] leading-[0.95] max-w-[16ch] animate-[fadeUp_900ms_120ms_ease-out_both]"
        >
          {title}
        </h1>
        {lede && (
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-[fadeUp_900ms_280ms_ease-out_both]">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
