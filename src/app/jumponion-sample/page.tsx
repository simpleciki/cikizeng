import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "See a Real JumpOnion Analysis — Start to Finish",
  description:
    "A complete 2Lo (double loop) figure skating diagnosis from a real upload: physical metrics, AI diagnosis, evidence, and a personalized 4-drill training plan. The same engine that runs on every customer upload.",
  openGraph: {
    title: "See a Real JumpOnion Analysis — Figure Skating Jump AI",
    description:
      "A complete 2Lo diagnosis from a real upload: physical metrics, AI diagnosis, evidence, and a 4-drill training plan. The same engine every customer uses.",
    images: ["/og/jumponion-sample.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "See a Real JumpOnion Analysis",
    description:
      "A complete 2Lo diagnosis with metrics, evidence, and a personalized training plan — the real production engine, on one page.",
  },
  keywords: [
    "figure skating jump analysis",
    "2Lo double loop",
    "AI skating coach",
    "biomechanics jump diagnosis",
    "off-ice training plan",
    "skating parent tools",
  ],
};

// ──────────────────────────────────────────────────────────────────────────────
// Sample data — pulled from production task 0dc3eb30-0ef5-46c0-ac72-15f94d4b87f4
// (Oliver, 2Lo, 2026-03-30). This is a real analysis, not mocked.
// ──────────────────────────────────────────────────────────────────────────────

const metrics = [
  { label: "Air Time", value: "0.348", unit: "s", note: "target ≥ 0.40s for a clean double" },
  { label: "Jump Height", value: "14.9", unit: "cm", note: "estimated from biomechanical model" },
  { label: "Takeoff Velocity", value: "1.71", unit: "m/s", note: "vertical component" },
  { label: "Takeoff Angle", value: "46.6", unit: "°", note: "near the 45° optimal" },
  { label: "Time to Tight", value: "0.214", unit: "s", note: "target < 0.15s for fast rotation" },
  { label: "Under-rotation", value: "82.8", unit: "°", note: "shortfall from a clean double" },
];

const diagnosisSummary = {
  parent_summary:
    "This jump looks good overall. No major issues were identified.",
  why_it_happens:
    "The skater lacks the vertical impulse needed to achieve sufficient air time for a double jump. Combined with a slightly delayed arm pull, the skater runs out of time to complete the rotations in the air, resulting in an under-rotated landing.",
  secondary_issues: ["underrotation_risk", "late_tightening"],
};

const evidencePoints = [
  {
    metric: "Air time",
    actual: "0.348s",
    target: "≥ 0.40s",
    note: "Strong, reliable measurement. Confirms the height shortage.",
  },
  {
    metric: "Estimated jump height",
    actual: "14.9 cm",
    target: "—",
    note: "Corroborates the air-time finding. Independent measurement, same conclusion.",
  },
  {
    metric: "Time to tight position",
    actual: "0.214s",
    target: "< 0.15s",
    note: "Slow to compress the rotation axis. Costs angular velocity.",
  },
];

const drills = [
  {
    name: "Metronome-Synced Takeoff",
    sets: "3 × 8",
    timing: "Pre-Ice Activation",
    why: "Builds consistent, explosive vertical impulse — train your body to be a precise 'human metronome' for maximum jump height.",
  },
  {
    name: "Kinetic Freeze-Frame",
    sets: "3 × 8",
    timing: "Pre-Ice Activation",
    why: "By forcing instant 'freeze-frames' in various jump positions, this drill sharpens proprioception so you can find and hold a perfectly tight axis in the air.",
  },
  {
    name: "Fast Arm Pull",
    sets: "3 × 15",
    timing: "Pre-Ice Activation",
    why: "Targets tightening speed directly. Train the arms to snap in like a retracting tape measure the instant the blade leaves the ice.",
  },
  {
    name: "Band-Resisted Arm Snap",
    sets: "3 × 12",
    timing: "Post-Ice Strengthening",
    why: "Builds explosive 'braking' power against centrifugal force. Essential for snapping into a super-tight air position when rotation is already loaded.",
  },
];

const skaterCue =
  "The instant your blade leaves the ice, imagine your body becoming a tightly wound spring — push up, then instantly snap into a spinning top.";

const observerRadar =
  "Stand at the side, slightly behind the takeoff point. Watch the takeoff knee: does it fully extend upwards, like a powerful piston, or is there hesitation? Immediately after takeoff, watch the arms: do they snap to the chest in one explosive motion, or is there a visible delay?";

// ──────────────────────────────────────────────────────────────────────────────
// Reusable section primitives — match the cikizeng.com design language
// (label-tag, accent-pill, card-bordered, mono labels)
// ──────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
      {children}
    </h2>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background font-mono text-xs font-bold">
      {n}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────────

export default function JumpOnionSamplePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      {/* ── Back link ─────────────────────────────────────────────────── */}
      <AnimateIn>
        <Link
          href="/projects#jumponion"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; Back to Projects
        </Link>
      </AnimateIn>

      {/* ── Header ────────────────────────────────────────────────────── */}
      <AnimateIn>
        <div className="mb-12">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Live Sample · Real Diagnosis
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            See exactly what JumpOnion analyzes —{" "}
            <span className="text-muted-foreground">start to finish, on one page.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
            First, a quick look inside the app. Then a complete 2Lo (double loop) diagnosis
            from a real practice session — the same engine that runs on every customer upload.
            Look through it, then decide if it&apos;s worth $49/month to your skater.
          </p>
        </div>
      </AnimateIn>

      {/* ── Video ─────────────────────────────────────────────────────── */}
      <AnimateIn delay={100}>
        <div className="mb-16">
          <SectionLabel>Inside the App · A real practice session</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            <video
              src="/jumponion/oliver-2lo-demo.mp4"
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
            Faces mosaicked for privacy. Recorded inside the JumpOnion app during a real practice session.
          </p>
        </div>
      </AnimateIn>

      {/* ── Section 1: Physical Metrics ───────────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <StepNumber n={1} />
            <SectionLabel>Step 1 · Physical Metrics</SectionLabel>
          </div>
          <SectionTitle>Computer vision measures the jump.</SectionTitle>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Below are the metrics from one real 2Lo upload. Pose estimation extracts 33 body
            keypoints per frame; biomechanics turns those points into measurements that match
            what a coach would see — but exact, repeatable, frame-by-frame.
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-6 rounded-2xl border-2"
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/70 rounded-lg p-3 border border-foreground/10">
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-1">
                  {m.label}
                </div>
                <div className="text-2xl font-bold tabular-nums">
                  {m.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{m.unit}</span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-1 leading-tight">{m.note}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted-foreground italic">
            Not AI-generated. Computed with computer vision + biomechanics.
            Same numbers every time you upload the same video.
          </p>
        </section>
      </AnimateIn>

      {/* ── Section 2: AI Diagnosis ───────────────────────────────────── */}
      <AnimateIn delay={200}>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <StepNumber n={2} />
            <SectionLabel>Step 2 · AI Diagnosis</SectionLabel>
          </div>
          <SectionTitle>Rule engine measures. LLM translates.</SectionTitle>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            A deterministic rule engine compares every metric to clean-jump targets and decides
            severity. Then Gemini 3 Pro turns that decision into language a parent and a 9-year-old
            can both act on. The LLM never invents numbers — it&apos;s an interpreter, not a judge.
          </p>

          <div className="space-y-4">
            {/* Main verdict — green */}
            <div
              className="p-5 rounded-2xl border-2"
              style={{ borderColor: "#7FB069", backgroundColor: "#F0F7E8" }}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5C8A3A] mb-2">
                Primary Verdict · Severity 0
              </div>
              <div className="text-lg font-semibold mb-2">
                Excellent execution.
              </div>
              <p className="text-sm leading-relaxed">{diagnosisSummary.parent_summary}</p>
            </div>

            {/* ALSO NOTED — red, the part most tools skip */}
            <div
              className="p-5 rounded-2xl border-2"
              style={{ borderColor: "#D97757", backgroundColor: "#FBE9E1" }}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A8431F] mb-2">
                Also Noted · Two non-blocking risks
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {diagnosisSummary.secondary_issues.map((issue) => (
                  <span
                    key={issue}
                    className="inline-block rounded border border-[#A8431F]/30 bg-white/60 px-2 py-0.5 text-[11px] font-mono text-[#A8431F]"
                  >
                    {issue}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed">{diagnosisSummary.why_it_happens}</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground italic">
            The green &quot;excellent&quot; is the main verdict.
            The red &quot;also noted&quot; is where most tools stop.
            That&apos;s where JumpOnion starts.
          </p>
        </section>
      </AnimateIn>

      {/* ── Section 3: Evidence ───────────────────────────────────────── */}
      <AnimateIn delay={250}>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <StepNumber n={3} />
            <SectionLabel>Step 3 · Evidence</SectionLabel>
          </div>
          <SectionTitle>Every claim is traced to a measurement.</SectionTitle>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Three evidence points support the &quot;also noted&quot; warnings. Not hallucination.
            Not guessing. If you want to challenge a claim, click through to the metric.
          </p>

          <div className="space-y-3">
            {evidencePoints.map((ev) => (
              <div
                key={ev.metric}
                className="p-4 rounded-xl border-2 bg-white"
                style={{ borderColor: "#D4A800" }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                    {ev.metric}
                  </span>
                  <span className="text-base font-bold tabular-nums">{ev.actual}</span>
                  {ev.target !== "—" && (
                    <span className="text-xs text-muted-foreground">
                      target {ev.target}
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{ev.note}</div>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── Section 4: Training Plan ──────────────────────────────────── */}
      <AnimateIn delay={300}>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <StepNumber n={4} />
            <SectionLabel>Step 4 · Personalized Training Plan</SectionLabel>
          </div>
          <SectionTitle>The diagnosis becomes a sequence.</SectionTitle>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Four off-ice drills, picked from a 54-drill catalog, ordered by when they should
            happen relative to the next ice session. Each drill explains <em>why</em> — so you know
            what you&apos;re fixing, not just what to do.
          </p>

          <div className="space-y-3">
            {drills.map((d, i) => (
              <div
                key={d.name}
                className="p-5 rounded-xl border-2 bg-white flex gap-4"
                style={{ borderColor: "#A78BFA" }}
              >
                <div className="flex-shrink-0 font-mono text-2xl font-bold text-[#A78BFA] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-base font-bold">{d.name}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground">{d.sets}</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#7C3AED] mb-2">
                    {d.timing}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── Section 5: Skater Cue + Observer Radar ────────────────────── */}
      <AnimateIn delay={350}>
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <StepNumber n={5} />
            <SectionLabel>Step 5 · Skater Cue + Observer Radar</SectionLabel>
          </div>
          <SectionTitle>What the skater feels. What the parent watches.</SectionTitle>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Most AI tools forget that the people executing the fix are a 9-year-old on the ice and
            a parent in the stands. JumpOnion gives each of them their own page.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className="p-5 rounded-2xl border-2"
              style={{ borderColor: "#F4A261", backgroundColor: "#FFF6EC" }}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A85C00] mb-2">
                Skater Cue · Mind picture
              </div>
              <p className="text-sm leading-relaxed italic">&ldquo;{skaterCue}&rdquo;</p>
            </div>

            <div
              className="p-5 rounded-2xl border-2"
              style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1E5C7A] mb-2">
                Observer Radar · What to watch
              </div>
              <p className="text-sm leading-relaxed">{observerRadar}</p>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* ── CTA: Try with your skater ─────────────────────────────────── */}
      <AnimateIn delay={400}>
        <section className="mb-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: "#383838", backgroundColor: "#FFDE00" }}
          >
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Want this for your skater?
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-xl">
              Every JumpOnion subscription includes unlimited jump uploads, full access to the
              54-drill library, historical tracking across sessions, before/after comparison,
              and email support from a skating mom (me).
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://jumponion.com/account#pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
              >
                See Pricing &rarr;
              </a>
              <span className="font-mono text-xs text-foreground/70">
                Starts at $49/month · cancel anytime
              </span>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* ── Footer: Why not Gemini + social ───────────────────────────── */}
      <AnimateIn delay={450}>
        <section className="border-t border-foreground/10 pt-8">
          {/* Gemini differentiation — promoted to a blue card */}
          <div
            className="mb-8 p-5 rounded-2xl border-2"
            style={{ borderColor: "#54B4DE", backgroundColor: "#EBF9FF" }}
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#1E5C7A] mb-2">
              Why not just use Gemini directly?
            </div>
            <p className="text-sm leading-relaxed text-foreground">
              I tested it. Gemini misclassified a 2Lz as a Toe Loop. Gemini called an imperfect
              air position &quot;perfect&quot;. LLMs hallucinate; rule engines don&apos;t. JumpOnion uses
              Gemini only as a translator on top of a deterministic biomechanical engine —
              that&apos;s what makes the diagnosis trustworthy. Read the full breakdown on the{" "}
              <Link href="/blog" className="underline underline-offset-2 hover:text-[#1E5C7A]">
                blog
              </Link>
              .
            </p>
          </div>

          {/* Plain footer text — still muted */}
          <div className="space-y-6 text-xs text-muted-foreground leading-relaxed">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-foreground mb-2">
                Questions?
              </div>
              <p>
                DM{" "}
                <a
                  href="https://x.com/cikibuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  @cikibuilds
                </a>{" "}
                on X or{" "}
                <span className="font-mono">@jumponion</span> on 小红书. I read everything.
              </p>
            </div>

            <div className="pt-4 border-t border-foreground/10">
              <p className="text-[10px] italic">
                The diagnosis, metrics, and training plan above come from a real production task
                (<span className="font-mono">0dc3eb30</span>, March 30, 2026). Not a mockup.
                Not a demo. The same engine ran on this upload as runs on every customer upload.
              </p>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
