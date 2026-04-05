import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";
import { valuePillars } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
};

export function ValuePillars() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            The Methodology Behind the Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Not just tools &mdash; a system that makes AI reliable, accountable, and
            continuously improving.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <AnimateIn key={pillar.id} delay={i * 150}>
              <Link href="/method" className="group block h-full">
                <div className="card-bordered h-full p-6">
                  <div className="mb-4 text-[#6FC2FF]">
                    {icons[pillar.icon]}
                  </div>
                  <span className="label-tag mb-3">{pillar.title}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {pillar.description}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
