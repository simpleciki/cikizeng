import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "SOP-Driven Agent Autonomy — Ciki Zeng",
  description:
    "16 instances across 3 projects prove AI agents don't develop judgment — system designers encode judgment into executable rules. See the evidence.",
  openGraph: {
    title: "Your AI Isn't Smart — Your System Is",
    description:
      "16 instances across 3 projects, 6 months of production evidence. Every 'autonomous' AI decision traces back to an explicit SOP rule.",
  },
};

const killerCases = [
  {
    number: "01",
    project: "JumpOnion",
    date: "2026-03-20",
    title: "Refusing to Diagnose a World Champion",
    scenario:
      "During rotation calibration with 11 real figure skating videos, the system diagnosed Nathan Chen's textbook-perfect triple Axel as 'high under-rotation risk.' It was about to tell users that an Olympic gold medalist's signature jump was wrong.",
    rootCause:
      "2D camera projection created an artifact: blade angle appeared 99 degrees off from body angle. The algorithm interpreted this as 'still rotating at landing.' In reality, it was projection distortion -- not biomechanics.",
    rule: "Zero-Misdiagnosis Principle + Confidence Gating",
    ruleExplain:
      "'Better to say nothing than to say something wrong.' Confidence gating requires rotation_confidence >= threshold before activating diagnosis. Threshold raised from 0.60 to 0.70 -- Nathan's 0.61 correctly suppressed.",
    withoutSOP:
      "System tells a coach: 'Serious under-rotation risk.' About a world champion. Figure skating community is small -- one bad review spreads to every club. Product trust: zero before launch.",
    proof:
      "Remove the Zero-Misdiagnosis Principle. The AI has no reason to suppress a computed result. It would report it. The 'wisdom' to stay silent when uncertain is entirely encoded in the SOP.",
  },
  {
    number: "02",
    project: "JumpOnion",
    date: "2026-03-26",
    title: "732 Tests Passed -- AI Still Said 'Wait'",
    scenario:
      "The ultimate diagnosis pipeline was connected to production routing. 732 tests passed, 0 failures. Everything green. The natural reaction: ship it, announce Phase 7 complete.",
    rootCause:
      "Claude cited a historical precedent -- the Gold Gate incident from a previous phase where eval passed but production broke. The SOP system has memory. It doesn't repeat mistakes.",
    rule: "Partner Challenge Protocol + Verification-Before-Completion",
    ruleExplain:
      "'When a solution might have issues, raise doubt rather than silently continue.' And: 'Before claiming done, ask yourself: verified or assumed?'",
    withoutSOP:
      "732 green lights -> celebrate -> announce complete -> Phase 8 builds on top -> production routing doesn't actually work -> everything collapses. Green tests hypnotize developers into false confidence.",
    proof:
      "Remove the Partner Challenge Protocol from CLAUDE.md. Claude will happily report '732 passed, 0 failed, Phase 7 complete!' and move on. The caution isn't innate -- it's injected by the rule.",
  },
  {
    number: "03",
    project: "CikiBrain",
    date: "2026-03-19",
    title: "The Rule Existed -- AI Still Didn't Follow It",
    scenario:
      "Claude wrote a new protocol and saved it to project-level memory. But global CLAUDE.md already stated: 'Cross-project rules must be written into global CLAUDE.md.' Claude had the rule, read the rule -- and still didn't execute the self-check.",
    rootCause:
      "AI models can read rules, understand rules, even explain rules. But they cannot 100% reliably self-enforce during complex multi-step tasks. Attention drifts. Context competes.",
    rule: "Hooks Enforcement Layer (mechanical guarantee)",
    ruleExplain:
      "This failure proved a critical insight: prompt-level instructions aren't reliable enough. This is exactly why enforcement hooks exist -- they don't trust the AI to 'remember,' they force compliance in code.",
    withoutSOP:
      "The new protocol would only be visible in one project. During development of other products, the AI wouldn't know it exists. Silent scope failure.",
    proof:
      "This IS the proof. The rule existed and the AI didn't follow it. Most AI workflow products claim 'AI will auto-check everything.' This SOP framework is honest: AI won't. So we force-execute critical checks via hooks.",
  },
];

const evidenceTable = [
  {
    case: "732 tests, said 'wait'",
    project: "JumpOnion",
    appeared: "Exercise caution",
    drivenBy: "Partner Challenge Protocol",
  },
  {
    case: "Refused to diagnose champion",
    project: "JumpOnion",
    appeared: "Make safety judgment",
    drivenBy: "Zero-Misdiagnosis + Confidence Gating",
  },
  {
    case: "Bug Confession x3 -> architectural fix",
    project: "JumpOnion",
    appeared: "Self-reflect on patterns",
    drivenBy: "Bug Confession Protocol",
  },
  {
    case: "3 tool switches, zero lost context",
    project: "JO x CikiBrain",
    appeared: "Maintain awareness",
    drivenBy: "Cross-Platform Handoff Protocol",
  },
  {
    case: "Rule existed, AI didn't follow",
    project: "CikiBrain",
    appeared: "(Failure -- honest)",
    drivenBy: "Proves necessity of Hooks layer",
  },
  {
    case: "Suggested session wrap-up",
    project: "SmartLearning",
    appeared: "Sense timing",
    drivenBy: "Phase 6 completion criteria",
  },
  {
    case: "Challenged own work within minutes",
    project: "CikiBrain",
    appeared: "Self-criticize",
    drivenBy: "Partner Challenge Protocol",
  },
];

export default function SOPDrivenAutonomyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      {/* ── Hero ── */}
      <AnimateIn>
        <div className="mb-20">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <span aria-hidden>&larr;</span> Back to Case Studies
          </Link>

          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Deep Dive
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your AI Isn&rsquo;t Smart &mdash; Your System Is
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed">
            Solo founders using AI agents observe a recurring phenomenon: after
            enough sessions, the AI seems to &ldquo;get smarter.&rdquo; It
            catches bugs before you do, refuses to ship when tests pass,
            switches strategies when stuck. This looks like AI self-improvement.
            It isn&rsquo;t.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed font-semibold">
            Every &ldquo;autonomous&rdquo; decision traces back to an explicit
            rule in the SOP framework.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="card-bordered px-5 py-3 text-center">
              <div className="font-mono text-2xl font-bold text-[#6FC2FF]">
                16
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                instances
              </div>
            </div>
            <div className="card-bordered px-5 py-3 text-center">
              <div className="font-mono text-2xl font-bold text-[#6FC2FF]">
                3
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                projects
              </div>
            </div>
            <div className="card-bordered px-5 py-3 text-center">
              <div className="font-mono text-2xl font-bold text-[#6FC2FF]">
                6
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                months of evidence
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* ── 3 Killer Cases ── */}
      <div className="space-y-12">
        {killerCases.map((cs, i) => (
          <AnimateIn key={cs.number} delay={i * 80}>
            <article className="card-bordered p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-[#6FC2FF]">
                  {cs.number}
                </span>
                <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
                  {cs.project}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {cs.date}
                </span>
              </div>

              <h2 className="text-lg font-bold tracking-tight sm:text-xl mb-6">
                {cs.title}
              </h2>

              {/* Narrative sections */}
              <div className="space-y-5 text-sm leading-relaxed sm:pl-9">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    What happened
                  </span>
                  <p className="mt-1">{cs.scenario}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Root cause
                  </span>
                  <p className="mt-1">{cs.rootCause}</p>
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Rule: {cs.rule}
                  </span>
                  <p className="mt-1">{cs.ruleExplain}</p>
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
                      Proof it&rsquo;s SOP, not AI
                    </span>
                    <p className="mt-1">{cs.proof}</p>
                  </div>
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>

      {/* ── Three-Layer Architecture ── */}
      <AnimateIn>
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            The Three-Layer Architecture
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl mb-8">
            Across all 7 cases (and 9 more documented individually), a
            consistent architecture emerges. The gap between Layer&nbsp;0 and
            Layer&nbsp;3 is the product.
          </p>

          <div className="space-y-4">
            {[
              {
                layer: "3",
                name: "Hooks",
                tagline: "Mechanical Guarantee",
                desc: "Shell scripts that run on every tool call. Cannot be skipped, forgotten, or context-competed away.",
                examples:
                  "verification-guard, write-guard, compliance-logger",
                reliability: "~100%",
                bg: "bg-[#FFDE00]",
              },
              {
                layer: "2",
                name: "Rules",
                tagline: "AI-Executed",
                desc: "Written in CLAUDE.md, read by AI at session start. Reliable for most cases, fails under cognitive load.",
                examples:
                  "Bug Confession, Partner Challenge, Root-Cause-First",
                reliability: "~85%",
                bg: "bg-[#D6EEFF]",
              },
              {
                layer: "1",
                name: "Skills",
                tagline: "Phase-Triggered",
                desc: "Auto-dispatched by keywords and lifecycle phase. Systematic but bypassable.",
                examples:
                  "/verify security on payment code, /unstuck after 2 failures",
                reliability: "~95%",
                bg: "bg-[#F6FFF6]",
              },
              {
                layer: "0",
                name: "AI Baseline",
                tagline: "Without SOP",
                desc: "Fix the immediate symptom, move on. Accept green tests as proof. No self-check, no pattern recognition.",
                examples:
                  "This is what most people get from AI coding assistants",
                reliability: "",
                bg: "bg-white",
              },
            ].map((l) => (
              <div
                key={l.layer}
                className={`card-bordered p-6 ${l.bg}`}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-mono text-lg font-bold text-[#6FC2FF]">
                    L{l.layer}
                  </span>
                  <span className="text-base font-bold">{l.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {l.tagline}
                  </span>
                  {l.reliability && (
                    <span className="ml-auto font-mono text-xs font-semibold">
                      {l.reliability}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed">{l.desc}</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {l.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* ── Evidence Table ── */}
      <AnimateIn>
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Full Evidence Table
          </h2>
          <div className="card-bordered overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#383838] bg-[#EDE8E3]">
                    <th className="px-4 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider">
                      Case
                    </th>
                    <th className="px-4 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-4 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider">
                      AI Appeared To
                    </th>
                    <th className="px-4 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-wider">
                      Actually Driven By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {evidenceTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#EDE8E3] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}
                    >
                      <td className="px-4 py-3 font-medium">{row.case}</td>
                      <td className="px-4 py-3 font-mono text-xs">
                        {row.project}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.appeared}
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        {row.drivenBy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            16 total instances documented across 3 projects. 0 involved AI
            &ldquo;learning&rdquo; autonomy. All traced to explicit SOP rules.
          </p>
        </div>
      </AnimateIn>

      {/* ── Closing statement ── */}
      <AnimateIn>
        <div className="callout-highlight text-sm leading-relaxed mb-16">
          AI agents don&rsquo;t develop judgment. System designers encode
          judgment into executable rules. The SOP framework is that encoding
          &mdash; and this page is the proof.
        </div>
      </AnimateIn>

      {/* ── CTA ── */}
      <AnimateIn>
        <div
          className="cta-card text-center"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-3">
            Install the system behind these results
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
            Templates, SOPs, and enforcement hooks &mdash; from $39.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton href="/pricing">See Pricing</LinkButton>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#383838] bg-white px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#F4EFEA]"
            >
              All 14 Case Studies
            </Link>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
