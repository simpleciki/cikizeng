import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "IvyBloom — an AI adaptive-learning platform I designed & directed",
  description:
    "A case study of a production AI homeschool-tutoring SaaS I designed, architected, and directed — MAP-driven adaptive instruction, bank-first anti-hallucination, and an academic-integrity layer that verifies real learning, not AI-pasted work.",
  openGraph: {
    title: "IvyBloom — witness real growth, verify real learning",
    description:
      "An adaptive-learning SaaS I designed, directed the build of, and validated end-to-end: MAP-driven, bank-first anti-hallucination, and an integrity layer that catches AI-pasted work.",
    url: "https://cikizeng.com/work/ivybloom",  },
  twitter: {
    card: "summary_large_image",
    title: "IvyBloom — witness real growth, verify real learning",
    description:
      "An AI tutoring platform that reads a student's real arc and won't count work until it's verified the student's own. A system I designed, directed, and validated.",  },
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

// ── Architecture diagram (the centerpiece — witness, then verify) ──────────────
type Tone = "input" | "truth" | "gate" | "output";
const toneStyles: Record<Tone, { border: string; bg: string }> = {
  input: { border: "rgba(45,45,45,0.16)", bg: "#FFFFFF" },
  truth: { border: "#A78BFA", bg: "#F7F1FF" },
  gate: { border: "#F4A261", bg: "#FFF6EC" },
  output: { border: "#7FB069", bg: "#F0F7E8" },
};

type Stage = { kicker?: string; title: string; tone: Tone };

const witnessStages: Stage[] = [
  {
    title: "MAP assessment + BKT mastery model",
    kicker: "Input · where the student truly is — real NWEA scores, Bayesian weak-concept tracking",
    tone: "input",
  },
  {
    title: "Bank-first adaptive generation",
    kicker:
      "Verified question banks decide the content across eight domains; the LLM only fills gaps where no bank exists — and its output is validated against a curriculum concept list",
    tone: "truth",
  },
  {
    title: "Student work + focus telemetry",
    kicker: "The student completes the week; timing and behavior are tracked",
    tone: "input",
  },
];

const recordStages: Stage[] = [
  {
    title: "Trust Score — the integrity gate",
    kicker:
      "Catches AI-pasted and rushed work · a comprehension check to recover, not a black-box accusation",
    tone: "gate",
  },
  {
    title: "Mastery + Lexile update",
    kicker: "Only verified learning moves the needle — growth recorded as a real arc over time",
    tone: "truth",
  },
  {
    title: "Admissions suite",
    kicker:
      "Output · transcript, college list, executive synthesis — every AI artifact labeled raw material, the parent as author of record",
    tone: "output",
  },
];

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

function ArchitectureDiagram() {
  return (
    <div
      className="rounded-2xl border-2 p-5 sm:p-6"
      style={{ borderColor: "rgba(45,45,45,0.14)", backgroundColor: "#FBFBFA" }}
    >
      {witnessStages.map((stage, i) => (
        <div key={stage.title}>
          <StageBox stage={stage} />
          {i < witnessStages.length - 1 && <FlowArrow />}
        </div>
      ))}

      {/* The boundary — the single most important line in the diagram */}
      <div className="my-3 flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(244,162,97,0.5)" }} />
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#B4530A] text-center">
          Nothing counts as mastery until it&apos;s verified the student&apos;s own
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(244,162,97,0.5)" }} />
      </div>

      {recordStages.map((stage, i) => (
        <div key={stage.title}>
          <StageBox stage={stage} />
          {i < recordStages.length - 1 && <FlowArrow />}
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
        A production, multi-tenant AI homeschool-tutoring platform. I designed the whole thing:{" "}
        <strong>
          MAP-driven, BKT-adaptive instruction across eight domains, a bank-first anti-hallucination
          pipeline, an academic-integrity layer, parent-billing, and a full college-admissions suite.
        </strong>
      </>
    ),
  },
  {
    n: 2,
    label: "Witness the real arc, not one polished year",
    caption: (
      <>
        Most college counseling sees a single polished senior year. IvyBloom reads the student&apos;s
        learning <em>over time</em> &mdash; three MAP test points showing{" "}
        <strong>+10 / +9 / +9 RIT growth</strong> &mdash; and turns that longitudinal data into the
        next concrete action. I made difficulty MAP-driven and Bayesian on purpose, so it comes from
        real assessment data, not a guess.
      </>
    ),
  },
  {
    n: 3,
    label: "The integrity layer — the moat",
    caption: (
      <>
        A parent&apos;s real fear: a kid uses AI to hand in perfect work and learns nothing. So I
        designed an integrity layer. When a submission reads above the student&apos;s level, it&apos;s
        flagged and <strong>won&apos;t count until she proves she understood it</strong> &mdash; a
        comprehension check, not a black-box accusation. A strong, honest student still scores 89, not
        100, because the guardrail actually fired.
      </>
    ),
  },
  {
    n: 4,
    label: "Bank-first, so it can't invent facts",
    caption: (
      <>
        It generates a full week from the student&apos;s level and weak concepts &mdash; but{" "}
        <strong>bank-first</strong>: verified question banks for math and science, the LLM only where
        no bank exists, and even then validated. Anti-hallucination by construction, because one wrong
        math answer loses a parent forever.
      </>
    ),
  },
  {
    n: 5,
    label: "Responsible AI, by design",
    caption: (
      <>
        It generates admissions material &mdash; an executive synthesis, an ability narrative, an
        evidence portfolio &mdash; but every generator is labeled{" "}
        <strong>&ldquo;raw material, rewrite in your own voice.&rdquo;</strong> The system is the
        research assistant; the parent is the author of record. And the synthesis names gaps, not just
        strengths &mdash; an evaluator that only praises is useless.
      </>
    ),
  },
  {
    n: 6,
    label: "A full admissions suite",
    caption: (
      <>
        Underneath is a real three-year transcript I can issue as an{" "}
        <strong>immutable, serial-numbered record</strong> &mdash; and a public link an admissions
        office opens with no account, that I can revoke. Plus a College List that auto-buckets Reach /
        Match / Safety from real SAT and GPA, an essay coach, and a live FBLA business simulation where
        an AI investor probes the economics and pushes back.
      </>
    ),
  },
  {
    n: 7,
    label: "A real operator product",
    caption: (
      <>
        It&apos;s not a prototype: <strong>tiered billing charged to the parent</strong>, role-based
        admin, God-Mode overrides, and per-call AI cost tracking. I audited the billing-bypass paths
        before building features &mdash; in a paid product, correctness is a security property.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Academic-integrity layer",
    body: "Stylometry, readability, and behavioral signals catch AI-pasted and rushed work. A flag routes to a comprehension check, not an auto-accusation — passing clears the penalty without erasing the record. Product-safety thinking specific to an education product.",
  },
  {
    title: "Bank-first anti-hallucination",
    body: "Verified question banks are preferred over the model; the LLM only fills gaps where no bank exists, and its output is validated against a curriculum concept list. Anti-hallucination by construction — judgment about where not to trust a model.",
  },
  {
    title: "MAP-driven + BKT adaptive engine",
    body: "Difficulty comes from real NWEA MAP scores; weak-concept targeting comes from Bayesian mastery tracking. Real adaptive-learning modeling — not a quiz app with a difficulty slider.",
  },
  {
    title: "Parent-billing + safety rails",
    body: "Student actions charge the parent; God-Mode and impersonation skip billing; rate limits and refund-on-failure protect the paid AI routes. Financial-grade correctness in a multi-tenant system, audited before features shipped.",
  },
];

export default function IvyBloomWorkPage() {
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
            Case Study · IvyBloom
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            An AI tutoring platform that witnesses real learning &mdash; and verifies it&apos;s real.{" "}
            <span className="text-muted-foreground">Designed, directed, and validated end-to-end.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
            A production, multi-tenant adaptive-learning SaaS I designed, architected, and directed
            (AI as the implementer) over about three months, solo. MAP-driven, BKT-adaptive
            instruction across eight domains, bank-first so it can&apos;t hallucinate facts &mdash;
            and an academic-integrity layer that catches AI-pasted work and makes a student prove she
            understood it. Here&apos;s how it&apos;s built, and the calls I made.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Designed & architected", "Directed the AI build", "Validated end-to-end"].map((chip) => (
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

      {/* ── Video (hero — narrated synthetic walkthrough, hosted on YouTube) ─ */}
      <AnimateIn delay={100}>
        <div className="mb-6">
          <SectionLabel>A narrated walkthrough of the live system &mdash; on synthetic data</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "#A78BFA", backgroundColor: "#F7F1FF" }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/e4jCDGxgFLo"
                title="IvyBloom — a narrated walkthrough on 100% synthetic data"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 block h-full w-full"
              />
            </div>
          </div>
        </div>
      </AnimateIn>

      {/* ── Privacy / synthetic-data disclaimer ───────────────────────── */}
      <AnimateIn delay={150}>
        <p className="mb-16 text-xs text-muted-foreground italic leading-relaxed">
          Everything shown is a <strong>100% synthetic student</strong> &mdash; &ldquo;April
          Brown,&rdquo; a fictional grade-11 competitive climber &mdash; on a throwaway database. No
          real child&apos;s name, scores, essays, or private data appears anywhere on this page. The
          product is real; the person is invented. It&apos;s a ~3-month solo build, dogfooded &mdash;
          this shows capability and judgment, not traction.
        </p>
      </AnimateIn>

      {/* ── The problem ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>The problem</SectionLabel>
          <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl">
            Homeschool parents spend thousands on curriculum but still can&apos;t tell if their child
            truly mastered the material &mdash; and now there&apos;s a sharper fear: a kid uses AI to
            produce perfect work and learns nothing. When it&apos;s time to apply to college, years of
            real learning are scattered and have to be rebuilt into a record from scratch. The hard
            part isn&apos;t generating lessons &mdash; it&apos;s proving the learning is real and
            earning a parent&apos;s trust in what an AI puts in front of them. IvyBloom is built around
            that boundary: measure where the student actually is, generate from verified banks so facts
            can&apos;t be invented, and let nothing count as mastery until the student proves the work
            is her own.
          </p>
        </section>
      </AnimateIn>

      {/* ── Architecture diagram (centerpiece) ────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Witness real growth. Verify real learning.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-6">
            The platform is organized around one idea: read the student&apos;s true arc over time,
            generate only what can be trusted, and let nothing count as mastery until it&apos;s
            verified the student&apos;s own work. The AI is the research assistant; the parent stays
            the author of record.
          </p>
          <ArchitectureDiagram />
        </section>
      </AnimateIn>

      {/* ── Walkthrough ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <div className="mb-8">
          <SectionLabel>Walkthrough · 7 steps</SectionLabel>
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

      {/* ── What I owned ──────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: "#A78BFA", backgroundColor: "#F7F1FF" }}
          >
            <SectionLabel>What I owned</SectionLabel>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-[#6D5BB0] font-bold">01</span>
                <span>
                  <strong>Designed &amp; architected</strong> the platform &mdash; the MAP-driven +
                  BKT adaptive engine, the bank-first anti-hallucination pipeline, the academic-integrity
                  layer, and the admissions suite.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#6D5BB0] font-bold">02</span>
                <span>
                  <strong>Directed</strong> the AI build &mdash; wrote the specs, set where the model
                  may and may not be trusted, reviewed the output, and decided what shipped. (Halted a
                  finished feature when AP-level chat would have overloaded absolute beginners &mdash;
                  domain judgment over code.)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#6D5BB0] font-bold">03</span>
                <span>
                  <strong>Validated</strong> it end-to-end &mdash; audited the billing-bypass paths
                  before features shipped, caught the logic bug that wrongly auto-stopped an athlete for
                  switching to another study tool, and QA&apos;d on the real running app, not
                  &ldquo;it compiles.&rdquo;
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
            style={{ borderColor: "#383838", backgroundColor: "#C4B5FD" }}
          >
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              This is how I work: design the system, draw the trust boundary, own the verification.
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-xl">
              If you&apos;re evaluating someone to design or operate AI-augmented systems, this is a
              representative piece of how I think. There&apos;s more in the collection.
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
