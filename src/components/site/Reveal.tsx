import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: React.ElementType;
  className?: string;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: Tag = "div",
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: visible ? 1 : 0,
    transition: `transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 700ms ease-out ${delay}ms`,
    willChange: "transform, opacity",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = Tag;
  return (
    <Comp ref={ref as never} className={className} style={style}>
      {children}
    </Comp>
  );
}
