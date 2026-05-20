import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="container-x">
        {eyebrow && (
          <div className="eyebrow text-ember mb-10 flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-ember" />
            {eyebrow}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
