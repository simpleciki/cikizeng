import { NumberDot, SketchArrow, SketchChip, SketchFrame } from "./sketch-primitives";

const GREEN = {
  border: "#5B9A7A",
  bg: "#EEF5F0",
  deep: "#36715A",
};

const decisions = [
  {
    title: "Judgment becomes executable",
    visual: ["failure", "rule", "hook"],
    callout: "If a mistake repeats, it stops being advice.",
    proof: "Verification, scope, and grounding checks run as mechanical gates.",
  },
  {
    title: "Evidence updates the operator",
    visual: ["signal", "hash", "baseline"],
    callout: "The system learns from behavior, not from prompt text.",
    proof: "Live signals become reviewable capability evidence by consent.",
  },
  {
    title: "Done requires proof",
    visual: ["claim", "gate", "evidence"],
    callout: "Confidence is not a closing condition.",
    proof: "Build output, live behavior, logs, screenshots, or commits close the loop.",
  },
  {
    title: "Rules are allowed to die",
    visual: ["catch", "enforce", "retire"],
    callout: "A system that only adds rules eventually becomes noise.",
    proof: "Every L2+ rule carries a retire-if condition.",
  },
];

const outcomeRows = [
  ["Products governed", "4 shipped products"],
  ["Enforcement surface", "~19-20 hooks across five lifecycle events"],
  ["Method library", "45 real incidents turned into reusable rules"],
  ["Evidence shape", "files and config, not a black-box app"],
];

const ownership = [
  {
    title: "Designed the governance",
    body: "Four-layer memory, enforcement hooks, capability ledger, and auto-derived registry.",
  },
  {
    title: "Directed the AI build",
    body: "Set rules, wrote specs, decided what graduated into code and what retired.",
  },
  {
    title: "Owned verification",
    body: "Validated behavior on the running system, then encoded that judgment so it survives drift.",
  },
];

function MiniDecisionSketch({ labels }: { labels: string[] }) {
  return (
    <SketchFrame>
      <div className="flex h-full min-h-[160px] flex-col justify-center gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          {labels.map((label, i) => (
            <SketchChip key={label} tone={i === labels.length - 1 ? "green" : "neutral"}>
              {label}
            </SketchChip>
          ))}
        </div>
        <SketchArrow label="becomes" />
        <div className="rounded-2xl border-2 border-[#5B9A7A] bg-[#EEF5F0] px-4 py-3 text-center">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#36715A]">
            system behavior
          </div>
        </div>
      </div>
    </SketchFrame>
  );
}

export function JudgmentDecisionGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {decisions.map((decision) => (
        <div
          key={decision.title}
          className="grid gap-4 rounded-2xl border-2 bg-white p-5"
          style={{ borderColor: "rgba(45,45,45,0.14)" }}
        >
          <MiniDecisionSketch labels={decision.visual} />
          <div>
            <h3 className="text-base font-bold">{decision.title}</h3>
            <p className="mt-2 text-sm font-semibold leading-relaxed">{decision.callout}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{decision.proof}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function OutcomeReceipt() {
  return (
    <div
      className="grid gap-6 rounded-2xl border-2 p-5 sm:grid-cols-[0.9fr_1fr] sm:p-8"
      style={{ borderColor: GREEN.border, backgroundColor: GREEN.bg }}
    >
      <div className="rounded-2xl border-2 border-foreground bg-[#FFFEF7] p-4 shadow-[4px_4px_0_rgba(45,45,45,0.18)]">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          evidence receipt
        </div>
        <div className="mt-4 grid gap-3">
          {outcomeRows.map(([label, value]) => (
            <div key={label} className="border-b border-dashed border-foreground/20 pb-2 last:border-b-0">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </div>
              <div className="mt-1 text-sm font-bold leading-snug">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold leading-snug">
          One system governs four shipped products and catches false-completion before it becomes a
          public claim.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The honest evidence is not commit count. It is the system surface: memory architecture,
          lifecycle hooks, and a methodology library where real incidents become reusable rules.
        </p>
      </div>
    </div>
  );
}

export function OwnershipCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {ownership.map((item, i) => (
        <div
          key={item.title}
          className="rounded-2xl border-2 bg-white p-5"
          style={{ borderColor: GREEN.border }}
        >
          <NumberDot n={i + 1} />
          <h3 className="mt-4 text-base font-bold leading-snug">{item.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
