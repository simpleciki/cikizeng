import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "JumpOnion — CV + rule-engine figure-skating jump diagnosis",
  description:
    "A case study of a computer-vision + rule-engine system I designed and operate that diagnoses figure-skating jumps — measurement decides the verdict, a human reviews the high-stakes calls, and an LLM only translates.",
  openGraph: {
    title: "JumpOnion — a CV + rule-engine system I designed & operate",
    description:
      "Measurement first, LLM as translator. The architecture, the trust boundary, and the judgment behind a live figure-skating jump-diagnosis product.",
    url: "https://cikizeng.com/work/jumponion",  },
  twitter: {
    card: "summary_large_image",
    title: "JumpOnion — measurement first, LLM as translator",
    description:
      "A deterministic rule engine plus a human decide the verdict; the LLM only translates. A system I designed, directed the build of, and verified end-to-end.",  },
};

const BASE = "/work/jumponion";

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

// ── Architecture diagram (the centerpiece visual — the trust boundary) ─────────
type Tone = "input" | "truth" | "human" | "llm" | "gate" | "output";
const toneStyles: Record<Tone, { border: string; bg: string }> = {
  input: { border: "rgba(45,45,45,0.16)", bg: "#FFFFFF" },
  truth: { border: "#54B4DE", bg: "#EBF9FF" },
  human: { border: "#F4A261", bg: "#FFF6EC" },
  llm: { border: "#A78BFA", bg: "#F7F1FF" },
  gate: { border: "#D97757", bg: "#FBE9E1" },
  output: { border: "#7FB069", bg: "#F0F7E8" },
};

type Stage = { kicker?: string; title: string; tone: Tone };

const verdictStages: Stage[] = [
  { title: "Phone video", kicker: "Input · a skater uploads from their phone", tone: "input" },
  { title: "Computer-vision pose estimation", tone: "input" },
  { title: "Biomechanical measurement", kicker: "Air time, axis, rotation timing — exact, repeatable", tone: "input" },
  {
    title: "Deterministic rule engine",
    kicker: "The truth layer · a pure function, no LLM — same input, byte-identical verdict",
    tone: "truth",
  },
  {
    title: "Human expert review",
    kicker: "High-stakes rotation calls are routed here — by construction, not by disclaimer",
    tone: "human",
  },
];

const translateStages: Stage[] = [
  {
    title: "LLM translator",
    kicker: "Narrative only · turns the verdict into parent / coach / athlete language — never invents a number",
    tone: "llm",
  },
  {
    title: "Post-validation safety gate",
    kicker: "Forbidden-label + semantic-leak audit → falls back to a deterministic phrase bank on any violation",
    tone: "gate",
  },
  {
    title: "Personalized drill plan",
    kicker: "Output · the LLM picks only from a rule-gated drill pool — it can't invent a drill",
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
      {verdictStages.map((stage, i) => (
        <div key={stage.title}>
          <StageBox stage={stage} />
          {i < verdictStages.length - 1 && <FlowArrow />}
        </div>
      ))}

      {/* The boundary — the single most important line in the diagram */}
      <div className="my-3 flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(45,45,45,0.18)" }} />
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#1E5C7A] text-center">
          Verdict frozen &mdash; everything below only translates it
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: "rgba(45,45,45,0.18)" }} />
      </div>

      {translateStages.map((stage, i) => (
        <div key={stage.title}>
          <StageBox stage={stage} />
          {i < translateStages.length - 1 && <FlowArrow />}
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
        End-to-end figure-skating jump diagnosis. I designed the whole flow:{" "}
        <strong>
          phone video &rarr; computer-vision measurement &rarr; a deterministic verdict &rarr;
          human review of the high-stakes calls &rarr; an LLM translation &rarr; a personalized
          drill plan.
        </strong>
      </>
    ),
  },
  {
    n: 2,
    label: "Measurement first, LLM as translator",
    caption: (
      <>
        The core architectural call: a deterministic rule engine owns the diagnosis; the LLM only
        translates it into words. The engine is a pure function &mdash; same input, byte-identical
        output, no model in the loop. The rule that sits at the top of the system:{" "}
        <strong>&ldquo;&#21487;&#20197;&#23569;&#65292;&#19981;&#35201;&#38169;&rdquo; &mdash; it can be less, but it cannot be wrong.</strong>
      </>
    ),
  },
  {
    n: 3,
    label: "Expert calls go to a human, by construction",
    caption: (
      <>
        High-stakes rotation calls (under-rotation, cheated takeoff) are{" "}
        <strong>forbidden from auto-display and routed to a human coach</strong>. It&apos;s built
        into the label pipeline &mdash; a pre-filter, a post-validation gate, and a semantic-leak
        audit &mdash; not left to a disclaimer.
      </>
    ),
  },
  {
    n: 4,
    label: "Confidence gating — better silent than wrong",
    caption: (
      <>
        Early on, a world champion&apos;s textbook triple was flagged as an under-rotation risk. I
        raised the confidence threshold and suppressed the call; today that class of call is
        categorically routed to a human instead. <strong>The product&apos;s value is restraint</strong>{" "}
        &mdash; when the system isn&apos;t sure, it stays quiet.
      </>
    ),
  },
  {
    n: 5,
    label: "Every claim traced to a measurement",
    caption: (
      <>
        Every number the skater sees must appear <strong>verbatim in the captured evidence</strong>
        &mdash; the LLM is banned from inventing a value, deriving one by arithmetic, or referencing
        a frame the system never captured. Evidence, not hallucination.
      </>
    ),
  },
  {
    n: 6,
    label: "Diagnosis becomes an action plan",
    caption: (
      <>
        The verdict&apos;s tags intersect a <strong>54-drill library</strong> to form a candidate
        pool; the LLM then picks 3&ndash;5 and orders them into a weekly plan &mdash; but it can only
        choose from the rule-selected pool. It can&apos;t invent a drill.
      </>
    ),
  },
  {
    n: 7,
    label: "Calibrated, not guessed",
    caption: (
      <>
        When a beginner&apos;s deep-knee landing was mis-called a &ldquo;fall,&rdquo; I didn&apos;t
        nudge a threshold &mdash; I ran an <strong>ablation across pipeline variants</strong> to find
        the root cause, fixed it at the root (a body-contact gate + apex-frame removal), and verified
        15/15 with real falls still detected.
      </>
    ),
  },
  {
    n: 8,
    label: "Operator-grade reliability",
    caption: (
      <>
        A deploy once removed a route labeled &ldquo;dead code&rdquo;; uploads silently failed for
        ~30 hours while the whole test suite stayed green &mdash; because nothing asserted the route
        existed. The fix wasn&apos;t just re-mounting it: <strong>a registry of critical routes</strong>{" "}
        plus a 15-minute runtime smoke, so that class of silent failure is caught in minutes, not
        hours.
      </>
    ),
  },
];

// ── Architecture evolution (the build-journey timeline — 6 milestones) ──────────────
type Milestone = { n: number; title: string; pain: React.ReactNode; call: React.ReactNode };

const milestones: Milestone[] = [
  {
    n: 1,
    title: "Algorithm-first hit a physics ceiling",
    pain: (
      <>
        I first let the algorithm output the diagnosis directly &mdash; but rotation completeness is{" "}
        <em>motion</em> information, not single-frame appearance. No amount of tuning fixes that.
      </>
    ),
    call: (
      <>
        I demoted raw measurement to an <strong>evidence layer</strong> and moved the product&apos;s
        value to problem identification and a training prescription.
      </>
    ),
  },
  {
    n: 2,
    title: "“All tests green — but production was analyzing nothing”",
    pain: (
      <>
        The eval path and the production path quietly diverged; users were handed a
        &ldquo;result&rdquo; computed on empty input.
      </>
    ),
    call: (
      <>
        I built <strong>production-parity verification</strong> and made it a rule:{" "}
        <em>code exists &ne; the path is verified.</em>
      </>
    ),
  },
  {
    n: 3,
    title: "A world champion’s textbook jump was flagged as a severe defect",
    pain: <>One false positive defined the entire product&apos;s safety philosophy.</>,
    call: (
      <>
        The first rule &mdash; <strong>&ldquo;it can be less, but it cannot be wrong&rdquo;</strong>:
        high-sensitivity rotation calls stay silent and route to a human coach rather than guess.
      </>
    ),
  },
  {
    n: 4,
    title: "The biggest refactor: LLM-first → rules-first, human-reviewed, LLM-last",
    pain: (
      <>
        A general-purpose LLM hallucinates &ldquo;plausible evidence&rdquo; exactly where trust
        matters most.
      </>
    ),
    call: (
      <>
        A <strong>deterministic rule engine plus a human expert own the verdict</strong>; the LLM
        only translates, never invents a number, and every output is validated against the frozen
        verdict.
      </>
    ),
  },
  {
    n: 5,
    title: "A confident “dead-code” deletion silently broke uploads for ~30 hours",
    pain: <>Every test passed &mdash; because none asserted the route existed.</>,
    call: (
      <>
        The fix wasn&apos;t just re-mounting it: <strong>a registry of critical routes</strong> plus
        a 15-minute runtime smoke, so that class of silent failure is caught in minutes.
      </>
    ),
  },
  {
    n: 6,
    title: "A destructive “reset cache” operation damaged already-generated content",
    pain: (
      <>
        Multi-level caches that should have failed independently were wiped together by a single
        query.
      </>
    ),
    call: (
      <>
        Two guardrails &mdash; <strong>destructive operations must SELECT-and-confirm first</strong>,
        and cache invalidation gets the smallest possible blast radius &mdash; plus choosing human
        review over auto-migration to match risk to the size of the business.
      </>
    ),
  },
];

const highlights = [
  {
    title: "Measurement-first boundary",
    body: "A deterministic engine owns the verdict; the LLM only translates it into words. It can't introduce a number the measurement didn't produce — a post-validation gate enforces that, not a prompt.",
  },
  {
    title: "Human-in-the-loop, by construction",
    body: "Rotation-defect calls are forbidden from auto-display and routed to a coach — enforced by a pre-filter, a post-validation gate, and a semantic-leak audit, not by a disclaimer.",
  },
  {
    title: "Calibrated, not patched",
    body: "False positives and over-calls were caught against real video and fixed at the root cause — an ablation to find why, not a threshold nudge to hide it — with real falls still detected.",
  },
  {
    title: "Operator-grade reliability",
    body: "A ~30-hour silent outage became a permanent guard: a registry of critical routes plus a runtime smoke, so that whole class of failure surfaces in minutes instead of hours.",
  },
];

export default function JumpOnionWorkPage() {
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
            Case Study · JumpOnion
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            A computer-vision + rule-engine system that diagnoses figure-skating jumps —{" "}
            <span className="text-muted-foreground">designed, directed, and verified end-to-end.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
            A product I designed and operate, live with paying subscribers. A skater uploads a phone
            video; the system measures the jump with computer vision, a deterministic rule engine
            decides the verdict, a human expert reviews the high-stakes calls, and an LLM only
            translates the result into language a parent and a nine-year-old can act on. Here&apos;s
            how it&apos;s built — and the calls I made.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Designed", "Directed AI build", "Verified end-to-end"].map((chip) => (
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

      {/* ── Video (hero — full upload→analysis→result flow) ───────────── */}
      <AnimateIn delay={100}>
        <div className="mb-6">
          <SectionLabel>A full upload &rarr; analysis &rarr; result walkthrough</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            <video
              src={`${BASE}/jumponion-full-flow.mp4`}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
            >
              Your browser doesn&apos;t support HTML5 video.
            </video>
          </div>
        </div>
      </AnimateIn>

      {/* ── Privacy / anonymity disclaimer ────────────────────────────── */}
      <AnimateIn delay={150}>
        <p className="mb-16 text-xs text-muted-foreground italic leading-relaxed">
          Everything shown is my own skater, recorded with consent and with faces mosaicked — the
          same scrubbed footage already public on the live product. No other customer&apos;s footage,
          data, or private reliability thresholds appear anywhere on this page. Throughout,
          &ldquo;the skater&rdquo; and &ldquo;a world champion&rdquo; are anonymized, and drill names
          are generalized.
        </p>
      </AnimateIn>

      {/* ── The problem ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>The problem</SectionLabel>
          <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl">
            A skater and parent can&apos;t see what&apos;s actually wrong with a jump, so they train
            blind; a coach can see it, but their time is expensive and limited. The hard part
            isn&apos;t reading one number — it&apos;s deciding which calls a machine is allowed to
            make at all. Rotation defects look almost identical to clean landings to a general-purpose
            model, and a confident wrong diagnosis is worse than none. The system is built around that
            boundary: measure what can be measured exactly, decide the verdict with deterministic
            rules plus a human, and let the LLM translate — never diagnose.
          </p>
        </section>
      </AnimateIn>

      {/* ── Architecture diagram (centerpiece) ────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-8">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            Measurement decides. The LLM only translates.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-6">
            The whole system is organized around one boundary. Everything that decides the
            diagnosis is deterministic measurement, rules, and a human; the LLM lives downstream of
            a frozen verdict and is only ever allowed to put it into words.
          </p>
          <ArchitectureDiagram />
        </section>
      </AnimateIn>

      {/* ── Result close-up video (one real 2Lo) ──────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>A result close-up &mdash; one real jump</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            <video
              src={`${BASE}/skater-2lo-demo.mp4`}
              controls
              playsInline
              muted
              loop
              preload="metadata"
              className="w-full h-auto block"
            >
              Your browser doesn&apos;t support HTML5 video.
            </video>
          </div>
          <p className="mt-3 text-xs text-muted-foreground italic">
            The skater&apos;s own double loop, faces mosaicked. The same engine runs on this jump as
            on every customer upload.
          </p>
        </section>
      </AnimateIn>

      {/* ── Walkthrough ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <div className="mb-8">
          <SectionLabel>Walkthrough · 8 steps</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How the system works — and why it&apos;s built this way.
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

      {/* ── Architecture evolution (build-journey timeline) ───────────────────── */}
      <AnimateIn>
        <section className="mt-20">
          <SectionLabel>Architecture evolution</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
            It wasn&apos;t written in a straight line.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-8">
            The architecture was forced into shape by a string of setbacks. None of the turning
            points was &ldquo;a cooler model&rdquo; — every one was a judgment about trust
            boundaries. Each pain became a permanent guardrail.
          </p>

          <div className="space-y-4">
            {milestones.map((m) => (
              <div
                key={m.n}
                className="rounded-2xl border-2 bg-white p-5"
                style={{ borderColor: "rgba(45,45,45,0.14)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-lg font-bold text-[#54B4DE] tabular-nums leading-none mt-0.5">
                    {String(m.n).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-snug mb-2">{m.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground mb-2">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#A8431F] mr-1">
                        The pain
                      </span>
                      {m.pain}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#1E5C7A] mr-1">
                        The call
                      </span>
                      {m.call}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

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
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            <SectionLabel>What I owned</SectionLabel>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">01</span>
                <span>
                  <strong>Designed</strong> the diagnosis architecture — the measurement/LLM trust
                  boundary, the rules-first verdict flow, and the human-review routing for
                  high-stakes calls.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">02</span>
                <span>
                  <strong>Directed</strong> the AI build — wrote the specs, set what the LLM may and
                  may not do, reviewed the output, and decided what shipped.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">03</span>
                <span>
                  <strong>Verified</strong> it end-to-end — caught the false positive on a world
                  champion&apos;s jump, the beginner-fall over-call, and the dead-code outage before
                  they defined the product.
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
            style={{ borderColor: "#383838", backgroundColor: "#6FC2FF" }}
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
