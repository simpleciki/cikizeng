import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { siteConfig } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimateIn>
          <div className="cta-card text-center" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-3">
              Get the AI Workflow That Built All of This
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              The same methodology, templates, and enforcement hooks I use every
              day &mdash; packaged for you to install and start using immediately.
            </p>
            <LinkButton href={siteConfig.gumroadUrl} size="lg" external>
              Browse Templates &amp; Tools
            </LinkButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
