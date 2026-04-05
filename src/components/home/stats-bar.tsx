"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function AnimatedNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = parseInt(target.replace(/\D/g, ""), 10);
          const suffix = target.replace(/\d/g, "");
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(numericPart * eased)}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export function StatsBar() {
  return (
    <section className="border-y-2 border-foreground/10 py-10" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-mono text-4xl font-bold tracking-tight text-primary">
              <AnimatedNumber target={stat.value} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
