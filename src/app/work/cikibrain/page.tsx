import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  JudgmentDecisionGrid,
  OutcomeReceipt,
  OwnershipCards,
} from "./_components/evidence-sections";
import { SketchVisual } from "./_components/sketch-visuals";
import { StoryPanelCard } from "./_components/storyboard";
import { storyPanels } from "./_components/storyboard-data";

export const metadata: Metadata = {
  title: "CikiBrain — an AI-agent operating system I architected & operate",
  description:
    "A case study of the AI-agent operating system I architected to run a one-person, four-product software company — verification enforced in code, not prompts, a four-layer memory architecture, and a self-evolving ledger that tracks its own operator's demonstrated capability from live signals.",
  openGraph: {
    title: "CikiBrain — verification enforced in code, not prompts",
    description:
      "The AI-agent operating system I architected to run a solo, four-product software company: a four-layer architecture, ~19–20 enforcement hooks across five lifecycle events, and a self-evolving capability ledger — PII-safe by design.",
    url: "https://cikizeng.com/work/cikibrain",  },
  twitter: {
    card: "summary_large_image",
    title: "CikiBrain — verification enforced in code, not prompts",
    description:
      "A self-governing AI-agent OS that runs my one-person, four-product company — and even tracks its own operator's demonstrated capability from live signals. Designed, directed, operated.",  },
};

// ── Section primitives (match cikizeng.com design language) ───────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
      {children}
    </div>
  );
}

// ── Accent palette (green / slate — "systems-healthy"; distinct from the others) ─
const ACCENT = {
  border: "#5B9A7A", // sea-green primary
  bg: "#EEF5F0", // pale sage card
  deep: "#36715A", // deep green accent text
  cta: "#A8D5BE", // soft green CTA fill
  slate: "#64748B", // slate — the human / decision tone
  slateDeep: "#475569",
};

// ── Capability-ledger loop (the hero — the not-on-/method differentiator) ──────
type Tone = "capture" | "process" | "gate" | "evolve";
const toneStyles: Record<Tone, { border: string; bg: string; sub: string }> = {
  capture: { border: "#CBD5DC", bg: "#FFFFFF", sub: ACCENT.slate },
  process: { border: ACCENT.border, bg: ACCENT.bg, sub: ACCENT.deep },
  gate: { border: ACCENT.slate, bg: "#EEF2F6", sub: ACCENT.slateDeep },
  evolve: { border: ACCENT.deep, bg: "#E4F0E8", sub: ACCENT.deep },
};

type Stage = { kicker?: string; title: string; tone: Tone };

const ledgerStages: Stage[] = [
  {
    title: "Capture — silent, PII-safe",
    kicker:
      "A hook logs capability signals as they happen — challenge, refuse-fake-done, demand-proof, architect, catch — as allow-listed keys plus a non-reversible hash. No prompt text is ever stored.",
    tone: "capture",
  },
  {
    title: "Enrich into evidence",
    kicker:
      "A skill distills the high-signal events into structured capability evidence — raw signal becomes reviewable proof.",
    tone: "process",
  },
  {
    title: "Propose a baseline delta",
    kicker: "It proposes a concrete update to the operator's demonstrated-capability record.",
    tone: "process",
  },
];

const evolveStage: Stage = {
  title: "The baseline evolves",
  kicker:
    "Only approved evidence moves the record — it grows from live signals, never a manual rewrite. The evolved baseline then informs what's worth capturing next, and the loop closes.",
  tone: "evolve",
};

function StageBox({ stage }: { stage: Stage }) {
  const s = toneStyles[stage.tone];
  return (
    <div
      className="rounded-xl border-2 px-4 py-3"
      style={{ borderColor: s.border, backgroundColor: s.bg }}
    >
      <div className="text-sm font-bold leading-snug">{stage.title}</div>
      {stage.kicker && (
        <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{stage.kicker}</div>
      )}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <span className="text-base leading-none text-muted-foreground/50">&darr;</span>
    </div>
  );
}

function LedgerLoopDiagram() {
  return (
    <div
      className="rounded-2xl border-2 p-5 sm:p-6"
      style={{ borderColor: "rgba(45,45,45,0.14)", backgroundColor: "#FBFBFA" }}
    >
      {ledgerStages.map((stage, i) => (
        <div key={stage.title}>
          <StageBox stage={stage} />
          {i < ledgerStages.length - 1 && <FlowArrow />}
        </div>
      ))}

      <FlowArrow />

      {/* The decision boundary — the operator is the gate (the honesty line) */}
      <div className="my-3 flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(100,116,139,0.5)" }} />
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-center" style={{ color: ACCENT.slateDeep }}>
          The operator approves &mdash; the human is the decision gate
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(100,116,139,0.5)" }} />
      </div>

      <FlowArrow />

      <StageBox stage={evolveStage} />

      {/* Loop-back rail */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border-2 border-dashed px-4 py-2" style={{ borderColor: "rgba(91,154,122,0.45)" }}>
        <span className="text-base leading-none" style={{ color: ACCENT.deep }} aria-hidden="true">&#8635;</span>
        <span className="text-[11px] leading-snug text-muted-foreground">
          Raw &rarr; distilled &rarr; evolve &mdash; the same loop the rest of the system runs on. The
          system learns its operator&apos;s capability from live signals, by consent, storing no prompt text.
        </span>
      </div>
    </div>
  );
}

// ── Four-layer architecture diagram (the second centerpiece) ───────────────────
type Layer = { name: string; home: string; holds: string; emphasized?: boolean };
const layers: Layer[] = [
  {
    name: "Asset",
    home: "Obsidian vault",
    holds: "Knowledge, decisions, case studies, sellable assets — the long-term memory.",
  },
  {
    name: "Runtime",
    home: "CLAUDE.md",
    holds: "Active behavioral rules and routing the agent must follow this session.",
  },
  {
    name: "Enforcement",
    home: "hooks that run in code",
    holds:
      "~19–20 mandatory checks across five lifecycle events. Not reminders the model may skip — code that runs whether the AI remembers to or not. This is the layer that makes the difference.",
    emphasized: true,
  },
  {
    name: "Training",
    home: "memory buffer",
    holds: "Feedback that graduates into a rule on recurrence — then retires when it's obsolete.",
  },
];

function LayerStack() {
  return (
    <div
      className="rounded-2xl border-2 p-5 sm:p-6 space-y-3"
      style={{ borderColor: "rgba(45,45,45,0.14)", backgroundColor: "#FBFBFA" }}
    >
      {layers.map((l) => (
        <div
          key={l.name}
          className="rounded-xl px-4 py-3"
          style={{
            border: l.emphasized ? `2px solid ${ACCENT.border}` : "2px solid rgba(45,45,45,0.12)",
            backgroundColor: l.emphasized ? ACCENT.bg : "#FFFFFF",
          }}
        >
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="text-sm font-bold">{l.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {l.home}
            </span>
            {l.emphasized && (
              <span
                className="ml-auto font-mono text-[9px] font-bold uppercase tracking-wider"
                style={{ color: ACCENT.deep }}
              >
                Prompts are suggestions &middot; hooks are law
              </span>
            )}
          </div>
          <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{l.holds}</div>
        </div>
      ))}
    </div>
  );
}

export default function CikiBrainWorkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* ── Back link ─────────────────────────────────────────────────── */}
      <AnimateIn>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; All work
        </Link>
      </AnimateIn>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AnimateIn>
        <div className="mb-10">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Case Study · CikiBrain
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            The AI-agent operating system I architected to run a one-person, four-product company.{" "}
            <span className="text-muted-foreground">Verification enforced in code, not prompts.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
            AI made one person dangerously fast. CikiBrain is the counterweight: a four-layer memory
            architecture, ~19&ndash;20 enforcement hooks across five lifecycle events, and a
            self-evolving ledger that turns live work into evidence. I designed it, directed AI to
            build it, and I&apos;m the verification gate.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Designed & architected", "Directed the AI build", "Operated daily"].map((chip) => (
              <span
                key={chip}
                className="inline-block rounded-full border-2 border-foreground/20 bg-white/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* ── Hero visual — the capability-ledger loop (no app; this is the differentiator) ─ */}
      <AnimateIn delay={100}>
        <div className="mb-6">
          <SectionLabel>The hero mechanism &mdash; a self-evolving capability ledger</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            A system that learns its own operator&apos;s capability &mdash; from live signals, storing
            no prompt text.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-6">
            Most of CikiBrain governs <em>work</em>. This loop governs <em>evidence</em>: what happened,
            what it proves, and whether the human approves moving the baseline.
          </p>
          <LedgerLoopDiagram />
        </div>
      </AnimateIn>

      {/* ── No-app / synthetic-data disclaimer ────────────────────────── */}
      <AnimateIn delay={150}>
        <p className="mb-16 text-xs text-muted-foreground italic leading-relaxed">
          There&apos;s no app to screen-record here &mdash; CikiBrain <strong>is</strong> the operating
          system that runs the company, not a product with a UI. Everything shown is the architecture
          and the mechanisms; every on-screen signal is <strong>synthetic or generic</strong>. No vault
          contents, client, or private data appears anywhere on this page. It&apos;s a solo build,
          dogfooded daily &mdash; this shows capability and judgment, not traction.
        </p>
      </AnimateIn>

      {/* ── The problem ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>The problem</SectionLabel>
          <div className="grid gap-6 sm:grid-cols-[1fr_0.9fr] sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                The keyboard got faster. The judgment did not.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                In an AI-leveraged company, output is cheap: code, plans, fixes, copy. The expensive
                part is deciding when output is wrong, when &ldquo;done&rdquo; is not done, and when not
                to trust the model.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                CikiBrain is built around one idea: systematize that judgment into rules the system
                runs on its own, so AI scales the work without scaling the recklessness.
              </p>
            </div>
            <SketchVisual kind="bottleneck" />
          </div>
        </section>
      </AnimateIn>

      {/* ── Four-layer architecture (second centerpiece) ──────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Four layers, one rule: the things that matter run in code.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-6">
            Each layer owns one job. The important shift is layer three: when a recurring failure matters,
            it stops being advice and starts running as code.
          </p>
          <LayerStack />
        </section>
      </AnimateIn>

      {/* ── Walkthrough ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <div className="mb-8">
          <SectionLabel>Storyboard &middot; 6 frames</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            The system, told as six small pictures.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each frame is one design call: what broke, what moved into the system, and what evidence
            proves the mechanism exists.
          </p>
        </div>
      </AnimateIn>

      <div className="space-y-8">
        {storyPanels.map((panel, i) => (
          <AnimateIn key={panel.title} delay={i < 3 ? 150 : 0}>
            <StoryPanelCard panel={panel} />
          </AnimateIn>
        ))}
      </div>

      {/* ── Architecture & judgment ───────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-20">
          <SectionLabel>Architecture &amp; judgment</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
            The four calls that define the system.
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The design is not a pile of rules. Each call turns a recurring failure mode into a visible
            system behavior.
          </p>
          <JudgmentDecisionGrid />
        </section>
      </AnimateIn>

      {/* ── Outcomes ──────────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <SectionLabel>Outcomes</SectionLabel>
          <OutcomeReceipt />
        </section>
      </AnimateIn>

      {/* ── What I owned ──────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <SectionLabel>What I owned</SectionLabel>
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
            The role was not "AI user." It was system operator.
          </h2>
          <OwnershipCards />
        </section>
      </AnimateIn>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: "#383838", backgroundColor: ACCENT.cta }}
          >
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              This is how I work: design the system, encode the judgment, own the verification.
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-xl">
              If you&apos;re evaluating someone to design or operate AI-augmented systems, this is the
              clearest piece of how I think &mdash; the system I run everything else on. There&apos;s
              more in the collection.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/cikizeng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
              >
                Connect on LinkedIn &rarr;
              </a>
              <Link
                href="/work"
                className="text-sm font-semibold text-foreground underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity"
              >
                See more work &rarr;
              </Link>
              <a
                href="https://x.com/cikibuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 underline underline-offset-4 hover:text-foreground"
              >
                @cikibuilds
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
