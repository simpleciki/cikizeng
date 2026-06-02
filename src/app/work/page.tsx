import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";
import { workCaseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — Systems I've Designed & Operate",
  description:
    "Case studies of AI-augmented systems I designed, directed the build of, and verified end-to-end — the judgment and architecture behind each one.",
  openGraph: {
    title: "Work — Systems I've Designed & Operate",
    description:
      "Case studies of AI-augmented systems I designed, directed, and verified end-to-end.",
    url: "https://cikizeng.com/work",
  },
};

const published = workCaseStudies.filter((w) => w.status === "published");
const inProgress = workCaseStudies.filter((w) => w.status === "in-progress");

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      {/* ── Header ────────────────────────────────────────────────────── */}
      <AnimateIn>
        <div className="mb-14">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Case Studies
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            Systems I designed —{" "}
            <span className="text-muted-foreground">and the judgment behind them.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I design AI-augmented systems, direct the AI that builds them, and verify them
            end-to-end. Each case study below walks through one real system: the flow, the
            controls, and the calls I made — not a feature list, the reasoning underneath.
          </p>
        </div>
      </AnimateIn>

      {/* ── Featured (published) ──────────────────────────────────────── */}
      {published.map((w, i) => (
        <AnimateIn key={w.slug} delay={100 + i * 100}>
          <Link
            href={w.href ?? "#"}
            className="group block mb-12 overflow-hidden transition-all duration-200 hover:-translate-y-1"
            style={{
              backgroundColor: w.accent,
              border: `2px solid ${w.borderColor}`,
              borderRadius: "1.25rem",
            }}
          >
            {w.cover && (
              <div className="relative border-b-2" style={{ borderColor: w.borderColor }}>
                <Image
                  src={w.cover}
                  alt={`${w.name} — system landing`}
                  width={2880}
                  height={1800}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full h-auto block"
                  priority
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="label-tag">{w.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {w.role}
                </span>
              </div>
              <p className="text-base font-semibold leading-snug mb-3">{w.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{w.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2D2D2D] underline underline-offset-4 decoration-2 group-hover:text-[#1A5A8A] transition-colors">
                Read the case study &rarr;
              </span>
            </div>
          </Link>
        </AnimateIn>
      ))}

      {/* ── In progress ───────────────────────────────────────────────── */}
      {inProgress.length > 0 && (
        <AnimateIn delay={300}>
          <div className="mb-6">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              More case studies in progress
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {inProgress.map((w) => (
              <div
                key={w.slug}
                className="p-6 flex flex-col"
                style={{
                  backgroundColor: w.accent,
                  border: `2px solid ${w.borderColor}`,
                  borderRadius: "1.25rem",
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="label-tag text-xs">{w.name}</span>
                  <span className="inline-block rounded border border-foreground/30 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-muted-foreground">
                    In progress
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug mb-2">{w.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{w.summary}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      )}

      {/* ── Context note ──────────────────────────────────────────────── */}
      <AnimateIn delay={400}>
        <p className="mt-12 text-xs text-muted-foreground italic leading-relaxed max-w-2xl">
          These are working systems, shown through synthetic, debranded data — no real client,
          pricing, or private information appears on any page. The goal is to show how the
          systems are designed, not to expose what runs inside them.
        </p>
      </AnimateIn>
    </div>
  );
}
