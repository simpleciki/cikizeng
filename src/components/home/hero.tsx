import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="py-28 sm:py-36" style={{ backgroundColor: '#D6EEFF' }}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <AnimateIn delay={0} direction="none">
          <span className="inline-block accent-pill rounded-full px-4 py-1.5 font-mono text-xs tracking-[0.15em] uppercase mb-8">
            Solo Developer x AI
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl leading-[1.1]">
            One Person{" "}
            <span className="text-gradient">x AI</span>
            <br />
            <span className="font-light text-muted-foreground">= One Team</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed">
            3 SaaS products. One person. No team, no outsourcing, no funding.
            From idea to production &mdash; all with AI as a co-founder.
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <LinkButton href="/projects" size="lg">
              See the Products
            </LinkButton>
            <LinkButton
              href={siteConfig.gumroadUrl}
              variant="outline"
              size="lg"
              external
            >
              Get My AI Workflow
            </LinkButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
