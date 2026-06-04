import type { ReactNode } from "react";

export type SketchTone = "neutral" | "blue" | "green" | "yellow" | "red";

export function NumberDot({ n }: { n: number }) {
  return (
    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background font-mono text-xs font-bold">
      {n}
    </span>
  );
}

export function SketchFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-[220px] overflow-hidden rounded-2xl border-2 p-4"
      style={{
        borderColor: "rgba(45,45,45,0.2)",
        backgroundColor: "#FFFEF7",
        backgroundImage:
          "linear-gradient(rgba(45,45,45,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(45,45,45,0.055) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {children}
    </div>
  );
}

export function SketchChip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: SketchTone;
}) {
  const tones: Record<SketchTone, { bg: string; border: string }> = {
    neutral: { bg: "#FFFFFF", border: "rgba(45,45,45,0.35)" },
    blue: { bg: "#D6EEFF", border: "#54B4DE" },
    green: { bg: "#EEF5F0", border: "#5B9A7A" },
    yellow: { bg: "#FFF4B8", border: "#D4A800" },
    red: { bg: "#FFE3E0", border: "#D87973" },
  };
  const t = tones[tone];

  return (
    <span
      className="inline-flex items-center rounded-full border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]"
      style={{ backgroundColor: t.bg, borderColor: t.border }}
    >
      {children}
    </span>
  );
}

export function SketchArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="h-px flex-1 border-t-2 border-dashed border-current" />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
        {label ?? "then"}
      </span>
      <span className="text-xl leading-none">&rarr;</span>
    </div>
  );
}
