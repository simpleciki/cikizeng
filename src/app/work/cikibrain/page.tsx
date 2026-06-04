import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";

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

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background font-mono text-xs font-bold">
      {n}
    </span>
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

// ── Walkthrough (architect captions — text only, honesty-framed) ──────────────
type Step = { n: number; label: string; caption: React.ReactNode };

const steps: Step[] = [
  {
    n: 1,
    label: "The system",
    caption: (
      <>
        A personal AI-agent operating system that runs a one-person, four-product software company. I{" "}
        <strong>
          designed the governance, directed AI to implement it, and I&apos;m the verification gate.
        </strong>{" "}
        It&apos;s a system of files and config &mdash; deliberately legible, not a black box &mdash; so
        the judgment lives somewhere I can audit and the AI has to obey.
      </>
    ),
  },
  {
    n: 2,
    label: "Prompts are suggestions. Hooks are law.",
    caption: (
      <>
        A rule written into a prompt is best-effort &mdash; and the insight that forced the next layer
        was watching <strong>a rule that existed and the AI still not follow it.</strong> So judgment
        that actually matters descends into hooks: mandatory checks that run in code on every session,
        not reminders the model is free to skip. The enforcement layer is the difference between a
        document and an operating system.
      </>
    ),
  },
  {
    n: 3,
    label: "Capture low, promote on recurrence, then retire",
    caption: (
      <>
        Observations start cheap. When one recurs &mdash; twice, or across projects, or it hardens into
        a rule &mdash; it&apos;s <strong>promoted into an enforced hook.</strong> And every enforced
        rule carries a <strong>retire-if</strong> condition, so it can die when it&apos;s obsolete. A
        rule that can&apos;t expire becomes a shackle; the lifecycle is part of the design, not an
        afterthought.
      </>
    ),
  },
  {
    n: 4,
    label: "It catches its own operator",
    caption: (
      <>
        732 passing tests are not production-verified. A &ldquo;done&rdquo; can be false. Context drifts
        over a long session. The system encodes those failure modes as gates &mdash; verification,
        grounding, completeness &mdash; so it catches{" "}
        <strong>my own false-completions and drift, not just the AI&apos;s.</strong> Designing against
        your own blind spots is the part most workflows skip.
      </>
    ),
  },
  {
    n: 5,
    label: "Threat-modeling the AI pipeline",
    caption: (
      <>
        A non-obvious leak chain &mdash; an AI debug transcript that syncs to cloud storage and then
        gets indexed by AI search &mdash; isn&apos;t something a secret-scanner alone can catch. So the
        enforcement layer includes <strong>security hooks and a source-write quarantine</strong>{" "}
        designed around that specific chain. Correctness here is a safety property, not a nicety.
      </>
    ),
  },
  {
    n: 6,
    label: "Self-evolution, then productized",
    caption: (
      <>
        The capability-ledger closes the loop &mdash; the system now updates its operator&apos;s own
        capability record from live evidence, PII-safe by design. And the whole methodology was{" "}
        <strong>sanitized into a portable framework</strong> &mdash; the internal system built first,
        then packaged so it&apos;s installable by someone else.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Judgment encoded as executable rules",
    body: "Verification, scope, and grounding guards turn a recurring human-or-AI failure into a permanent, mechanical guarantee. The thesis a public case study proved 16 times: AI won't reliably self-enforce, so you force it in code — and verify it with real incidents, not theory.",
  },
  {
    title: "Self-evolving capability tracking",
    body: "A hook plus a skill plus a PII-safe ledger that learns its operator's demonstrated capability from live signals. Novel and meta — the system observes the person operating it, by consent, storing allow-listed keys and a hash, never a word of prompt text.",
  },
  {
    title: "Anti-self-deception, by design",
    body: "Grounding, completeness, and compliance gates catch the system's own false-completion, stale context, and drift. The point isn't catching the AI — it's designing against my failure modes as deliberately as the model's.",
  },
  {
    title: "Lifecycle governance, not rule-piling",
    body: "An auto-derived registry surfaces every mechanism's liveness from its own footprint — never hand-maintained, so it never rots. When capture began to outrun drain, the fix was drain mechanisms, not more rules. Systems thinking over discipline theater.",
  },
];

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
            CikiBrain is the governance layer that lets one person plus AI run four shipped products
            without the wheels coming off. A four-layer memory architecture, ~19&ndash;20 enforcement
            hooks across five lifecycle events, and a self-evolving ledger that tracks its own
            operator&apos;s demonstrated capability from live signals. I designed it, directed AI to
            build it, and I&apos;m the verification gate. Here&apos;s how it&apos;s built, and the calls
            I made.
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
            Most of this system governs <em>work</em>. This part governs <em>evidence</em>: a silent,
            PII-safe loop that captures what the operator actually does, distills it into proof, and
            evolves a capability baseline from real signals instead of a once-a-year rewrite. It&apos;s
            the newest layer &mdash; and the reason this case study exists alongside the methodology.
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
          <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl">
            In an AI-leveraged company the bottleneck isn&apos;t writing code &mdash; AI does that fast,
            and platforms will only make it faster. The bottleneck is <strong>judgment</strong>: knowing
            when output is wrong, when &ldquo;done&rdquo; isn&apos;t done, when not to trust the model.
            That judgment doesn&apos;t scale by working harder, and it quietly drifts over a long
            session. CikiBrain is built around one idea: systematize judgment into rules the system runs
            on its own &mdash; so AI scales the work without scaling the recklessness, and the discipline
            survives my own attention.
          </p>
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
            Every kind of information has exactly one home. Knowledge lives in the vault; active rules in
            the runtime; mandatory checks in the enforcement layer; and graduating feedback in the
            training buffer. The enforcement layer is what turns a set of good intentions into an
            operating system.
          </p>
          <LayerStack />
        </section>
      </AnimateIn>

      {/* ── Walkthrough ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <div className="mb-8">
          <SectionLabel>Walkthrough · 6 steps</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How the system works &mdash; and why it&apos;s built this way.
          </h2>
        </div>
      </AnimateIn>

      <div className="space-y-10">
        {steps.map((step, i) => (
          <AnimateIn key={step.n} delay={i < 3 ? 150 : 0}>
            <section>
              <div className="flex items-start gap-3">
                <StepNumber n={step.n} />
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Step {step.n} · {step.label}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl">
                    {step.caption}
                  </p>
                </div>
              </div>
            </section>
          </AnimateIn>
        ))}
      </div>

      {/* ── Architecture & judgment ───────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-20">
          <SectionLabel>Architecture &amp; judgment</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
            The four calls that define the system.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-5 rounded-2xl border-2 bg-white"
                style={{ borderColor: "rgba(45,45,45,0.14)" }}
              >
                <h3 className="text-base font-bold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── Outcomes ──────────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: ACCENT.border, backgroundColor: ACCENT.bg }}
          >
            <SectionLabel>Outcomes</SectionLabel>
            <p className="text-lg font-bold leading-snug max-w-2xl">
              One system governs four shipped products &mdash; and catches its own operator&apos;s
              false-completion and context drift.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-2xl">
              The verifiable surface is the system itself: a four-layer architecture, ~19&ndash;20
              enforcement hooks across five lifecycle events, and a 45-entry methodology library
              &mdash; each entry a real incident &rarr; root cause &rarr; reusable rule, the case
              studies published on this site a curated subset of it. It&apos;s a system of files and
              config, not a versioned repo &mdash; so the honest evidence is what it does, not a commit
              count.
            </p>
          </div>
        </section>
      </AnimateIn>

      {/* ── What I owned ──────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: ACCENT.border, backgroundColor: ACCENT.bg }}
          >
            <SectionLabel>What I owned</SectionLabel>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono font-bold" style={{ color: ACCENT.deep }}>01</span>
                <span>
                  <strong>Designed &amp; architected</strong> the governance &mdash; the four-layer
                  memory model, the enforcement layer, the capability-ledger loop, and the auto-derived
                  registry that keeps it honest.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-bold" style={{ color: ACCENT.deep }}>02</span>
                <span>
                  <strong>Directed</strong> the AI build &mdash; wrote the rules and specs, set where the
                  model may and may not be trusted, and decided what graduated into an enforced hook and
                  what retired.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono font-bold" style={{ color: ACCENT.deep }}>03</span>
                <span>
                  <strong>Was the verification gate</strong> &mdash; validated behavior and
                  domain-correctness on the running system, not &ldquo;it compiles,&rdquo; then encoded
                  that judgment as rules so it survives my own attention drift.
                </span>
              </li>
            </ul>
          </div>
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
