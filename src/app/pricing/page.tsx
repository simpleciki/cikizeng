import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — Ciki Zeng",
  description: "AI workflow templates, SOPs, and enforcement hooks. Core $39 / Full $79 / Framework $149.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn>
        <div className="text-center mb-14">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Templates &amp; Tools
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get the Methodology</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            Install the same system I use every day. Templates, SOPs, and enforcement hooks &mdash;
            packaged for you to start using immediately.
          </p>
        </div>
      </AnimateIn>

      <div className="grid gap-4 sm:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <AnimateIn key={tier.name} delay={i * 150}>
            <div
              className="h-full p-8 transition-all duration-200 flex flex-col"
              style={{
                border: tier.highlighted ? '3px solid #6FC2FF' : '2px solid #383838',
                borderRadius: '1.25rem',
                backgroundColor: '#FFFFFF',
              }}
            >
              {tier.highlighted && (
                <span className="inline-block accent-pill rounded-full px-3 py-0.5 text-[10px] uppercase tracking-wider mb-4">
                  Recommended
                </span>
              )}
              <span className="label-tag mb-3">{tier.name}</span>
              <p className="font-mono text-5xl font-bold mb-1">{tier.price}</p>
              <p className="text-xs text-muted-foreground mb-6">{tier.description}</p>

              <LinkButton
                href={tier.href}
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full mb-6"
                external
              >
                {tier.cta}
              </LinkButton>

              <ul className="space-y-3 text-left flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16AA98" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={500}>
        <p className="mt-10 text-center text-[10px] text-muted-foreground uppercase tracking-wider">
          All products delivered via Gumroad. Instant download after purchase.
        </p>
      </AnimateIn>
    </div>
  );
}
