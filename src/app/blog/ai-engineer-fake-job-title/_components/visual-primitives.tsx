import type { ReactNode } from "react";

export type Tone = "neutral" | "blue" | "green" | "yellow" | "red" | "purple";

const tones: Record<Tone, { bg: string; border: string; text?: string }> = {
  neutral: { bg: "#FFFFFF", border: "rgba(45,45,45,0.22)" },
  blue: { bg: "#D6EEFF", border: "#54B4DE", text: "#1E5C7A" },
  green: { bg: "#EEF5F0", border: "#5B9A7A", text: "#315E47" },
  yellow: { bg: "#FFF4B8", border: "#D4A800", text: "#725A00" },
  red: { bg: "#FFE3E0", border: "#D87973", text: "#8A332D" },
  purple: { bg: "#F7F1FF", border: "#A78BFA", text: "#5D4F9A" },
};

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </div>
  );
}

export function SketchFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`my-8 overflow-hidden rounded-lg border-2 p-4 sm:p-5 ${className}`}
      style={{
        borderColor: "rgba(45,45,45,0.2)",
        backgroundColor: "#FFFEF7",
        backgroundImage:
          "linear-gradient(rgba(45,45,45,0.052) 1px, transparent 1px), linear-gradient(90deg, rgba(45,45,45,0.052) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {children}
    </figure>
  );
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  const t = tones[tone];
  return (
    <span
      className="inline-flex items-center rounded-full border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]"
      style={{ backgroundColor: t.bg, borderColor: t.border, color: t.text }}
    >
      {children}
    </span>
  );
}

export function Box({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <div
      className={`rounded-lg border-2 bg-white p-4 ${className}`}
      style={{ backgroundColor: t.bg, borderColor: t.border }}
    >
      {children}
    </div>
  );
}

export function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground" aria-hidden="true">
      <div className="h-px flex-1 border-t-2 border-dashed border-current" />
      {label && (
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
          {label}
        </span>
      )}
      <span className="text-xl leading-none">&rarr;</span>
    </div>
  );
}

export function KeyPoint({ children }: { children: ReactNode }) {
  return (
    <strong className="my-1 inline-block max-w-full box-border break-words rounded-md border-[3px] border-[#FF4D5A] bg-white px-2 py-1 font-black leading-relaxed text-[#136DFF]">
      {children}
    </strong>
  );
}
