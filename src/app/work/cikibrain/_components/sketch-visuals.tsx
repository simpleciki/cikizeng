import {
  NumberDot,
  SketchArrow,
  SketchChip,
  SketchFrame,
  type SketchTone,
} from "./sketch-primitives";

export type VisualKind = "bottleneck" | "hook" | "lifecycle" | "security" | "proof" | "ledger";

export function SketchVisual({ kind }: { kind: VisualKind }) {
  if (kind === "bottleneck") {
    return (
      <SketchFrame>
        <div className="grid h-full gap-4">
          <div className="flex flex-wrap gap-2">
            <SketchChip tone="blue">code</SketchChip>
            <SketchChip tone="blue">copy</SketchChip>
            <SketchChip tone="blue">plans</SketchChip>
            <SketchChip tone="blue">fixes</SketchChip>
          </div>
          <SketchArrow label="AI speeds up output" />
          <div className="mx-auto w-full max-w-[240px] rounded-2xl border-2 border-foreground bg-white p-4 text-center shadow-[4px_4px_0_rgba(45,45,45,0.22)]">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              bottleneck
            </div>
            <div className="mt-1 text-lg font-black">judgment</div>
            <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
              What deserves trust?
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <SketchChip tone="green">ship</SketchChip>
            <SketchChip tone="red">stop</SketchChip>
            <SketchChip tone="yellow">verify</SketchChip>
          </div>
        </div>
      </SketchFrame>
    );
  }

  if (kind === "hook") {
    return (
      <SketchFrame>
        <div className="grid gap-3">
          <div className="rounded-2xl border-2 border-dashed border-foreground/30 bg-white/70 p-3">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
              prompt rule
            </div>
            <div className="mt-1 text-sm font-semibold">Please verify before saying done.</div>
            <div className="mt-2 text-[11px] text-muted-foreground">Best effort. Easy to skip.</div>
          </div>
          <div className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            replaced by
          </div>
          <div className="rounded-2xl border-2 border-foreground bg-[#EEF5F0] p-4 shadow-[4px_4px_0_rgba(45,45,45,0.22)]">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#36715A]">
              hook gate
            </div>
            <div className="mt-1 text-sm font-black">Runs whether the model remembers or not.</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <SketchChip tone="green">scope</SketchChip>
              <SketchChip tone="green">proof</SketchChip>
              <SketchChip tone="green">security</SketchChip>
            </div>
          </div>
        </div>
      </SketchFrame>
    );
  }

  if (kind === "lifecycle") {
    const lifecycle: { title: string; sub: string; tone: SketchTone }[] = [
      { title: "catch", sub: "cheap observation", tone: "yellow" },
      { title: "promote", sub: "recurs into a rule", tone: "green" },
      { title: "enforce", sub: "runs in code", tone: "blue" },
      { title: "retire", sub: "expires when obsolete", tone: "neutral" },
    ];

    return (
      <SketchFrame>
        <div className="grid gap-3">
          {lifecycle.map((item, i) => (
            <div key={item.title} className="flex items-center gap-3">
              <NumberDot n={i + 1} />
              <div className="flex-1 rounded-xl border-2 border-foreground/15 bg-white px-3 py-2">
                <SketchChip tone={item.tone}>{item.title}</SketchChip>
                <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </SketchFrame>
    );
  }

  if (kind === "security") {
    return (
      <SketchFrame>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            {["debug log", "cloud sync", "AI index"].map((label, i) => (
              <div key={label} className="rounded-xl border-2 border-foreground/20 bg-white p-3">
                <div className="text-xl font-black">{i + 1}</div>
                <div className="text-[11px] font-semibold">{label}</div>
              </div>
            ))}
          </div>
          <SketchArrow label="not one bug, a chain" />
          <div className="rounded-2xl border-2 border-[#D87973] bg-[#FFE3E0] p-4 text-center">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
              source-write quarantine
            </div>
            <div className="mt-1 text-sm font-black">
              Stop the leak before it becomes a cloud artifact.
            </div>
          </div>
        </div>
      </SketchFrame>
    );
  }

  if (kind === "proof") {
    return (
      <SketchFrame>
        <div className="grid gap-3">
          <div className="rounded-2xl border-2 border-foreground bg-white p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              claim
            </div>
            <div className="mt-1 text-sm font-bold">Done.</div>
          </div>
          <SketchArrow label="gate asks" />
          <div className="rounded-2xl border-2 border-[#5B9A7A] bg-[#EEF5F0] p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#36715A]">
              evidence
            </div>
            <div className="mt-1 text-sm font-black">
              Build, log, screenshot, commit, or live behavior.
            </div>
          </div>
          <div className="flex justify-end">
            <SketchChip tone="green">only then: done</SketchChip>
          </div>
        </div>
      </SketchFrame>
    );
  }

  return (
    <SketchFrame>
      <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          <SketchChip tone="neutral">live signal</SketchChip>
          <SketchChip tone="neutral">allow-listed key</SketchChip>
          <SketchChip tone="neutral">hash</SketchChip>
        </div>
        <SketchArrow label="distill" />
        <div className="rounded-2xl border-2 border-[#5B9A7A] bg-[#EEF5F0] p-4 text-center">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#36715A]">
            operator approval
          </div>
          <div className="mt-1 text-sm font-black">Evidence moves the capability baseline.</div>
        </div>
        <div className="rounded-xl border-2 border-dashed border-[#5B9A7A] bg-white/70 px-3 py-2 text-[11px] leading-snug text-muted-foreground">
          The system learns from behavior, not from storing prompt text.
        </div>
      </div>
    </SketchFrame>
  );
}
