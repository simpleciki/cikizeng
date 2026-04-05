import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { methodSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Method — Ciki Zeng",
  description: "The AI partnership methodology that built 3 SaaS products solo.",
};

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn>
        <div className="mb-20">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Methodology
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">The Method</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            Not &ldquo;how to use AI&rdquo; &mdash; how to systematize your judgment
            so AI makes you more effective, not more reckless.
          </p>
        </div>
      </AnimateIn>

      <div className="space-y-16">
        {methodSections.map((section, i) => (
          <AnimateIn key={section.id} delay={i * 80}>
            <section id={section.id} className="card-bordered p-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-sm font-bold text-[#6FC2FF]">0{i + 1}</span>
                <div>
                  <h2 className="text-lg font-bold tracking-tight sm:text-xl">{section.title}</h2>
                  <p className="text-xs text-muted-foreground mt-1">{section.subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 pl-9">
                {section.content}
              </p>
              <div className="ml-9 callout-highlight text-sm">
                {section.highlight}
              </div>
            </section>
          </AnimateIn>
        ))}
      </div>

      {/* CTA to pricing */}
      <AnimateIn>
        <div className="mt-20 cta-card text-center" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-3">
            Ready to install the methodology?
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
            Templates, SOPs, and enforcement hooks &mdash; from $39.
          </p>
          <LinkButton href="/pricing">
            See Pricing
          </LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
