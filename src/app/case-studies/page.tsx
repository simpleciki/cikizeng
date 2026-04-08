import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Ciki Zeng",
  description:
    "17 documented incidents where the methodology caught real failures in production SaaS development.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn>
        <div className="mb-20">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Case Studies
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Battle-Tested
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            Every methodology claim is backed by a real incident from production
            development. These aren&#39;t hypotheticals — they&#39;re
            documented moments where the system caught what I would have missed.
          </p>
        </div>
      </AnimateIn>

      {/* Deep Dive banner */}
      <AnimateIn>
        <Link
          href="/case-studies/sop-driven-autonomy"
          className="block mb-12"
        >
          <div className="card-bordered p-6 sm:p-8 bg-[#D6EEFF] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Deep Dive
              </span>
              <h2 className="text-lg font-bold tracking-tight sm:text-xl mt-1">
                Your AI Isn&#39;t Smart — Your System Is
              </h2>
              <p className="text-sm leading-relaxed mt-2">
                7 detailed cases across 3 projects prove every
                &quot;autonomous&quot; AI decision traces back to an explicit
                SOP rule. See the three-layer architecture and full evidence.
              </p>
            </div>
            <span className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-[#383838] bg-[#6FC2FF] text-white px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#5AB0ED]">
              Read the Deep Dive &rarr;
            </span>
          </div>
        </Link>
      </AnimateIn>

      <div className="space-y-10">
        {caseStudies.map((cs, i) => (
          <AnimateIn key={cs.id} delay={i * 60}>
            <article className="card-bordered p-8">
              {/* Header: number + project tag + date */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-[#6FC2FF]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
                  {cs.project}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {cs.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold tracking-tight sm:text-xl mb-4">
                {cs.title}
              </h2>

              {/* Three-part narrative */}
              <div className="space-y-4 text-sm leading-relaxed sm:pl-9">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    What happened
                  </span>
                  <p className="mt-1">{cs.scenario}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Rule triggered
                  </span>
                  <p className="mt-1">{cs.rule}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Without the SOP
                    </span>
                    <p className="mt-1">{cs.withoutSOP}</p>
                  </div>
                  <div className="rounded-lg border-2 border-[#383838] bg-[#FFDE00] p-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      What actually happened
                    </span>
                    <p className="mt-1">{cs.result}</p>
                  </div>
                </div>
              </div>

              {/* Punchline callout */}
              <div className="sm:ml-9 mt-5 callout-highlight text-sm">
                {cs.punchline}
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      {/* CTA */}
      <AnimateIn>
        <div
          className="mt-20 cta-card text-center"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-3">
            Install the methodology behind these results
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
            Templates, SOPs, and enforcement hooks — from $39.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton href="/pricing">See Pricing</LinkButton>
            <Link
              href="/method"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#383838] bg-white px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#F4EFEA]"
            >
              Read the Method
            </Link>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
