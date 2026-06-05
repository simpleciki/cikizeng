import Image from "next/image";
import { Box, SectionLabel, SketchFrame } from "./visual-primitives";

export function HeroVisual() {
  return (
    <SketchFrame className="mb-12 p-2 sm:p-3">
      <div className="overflow-hidden rounded-md border-2 border-[#383838] bg-white">
        <Image
          src="/blog/ai-engineer-fake-job-title/hero.png"
          alt=""
          width={1672}
          height={941}
          sizes="(max-width: 768px) 100vw, 960px"
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
    </SketchFrame>
  );
}

export function ThesisMap() {
  const cards = [
    ["01", "One title hides three jobs", "blue"],
    ["02", "The hiring pipe mismatches all three", "red"],
    ["03", "Only 2-3 of 8 tasks are code-heavy", "yellow"],
    ["04", "~70% is organizational capital", "green"],
    ["05", "Process redesign beats tool setup by 10x", "purple"],
  ] as const;

  return (
    <SketchFrame>
      <SectionLabel>Visual thesis map</SectionLabel>
      <div className="grid gap-3 sm:grid-cols-5">
        {cards.map(([n, label, tone]) => (
          <Box key={n} tone={tone} className="min-h-28">
            <div className="font-mono text-[11px] font-bold text-muted-foreground">{n}</div>
            <div className="mt-2 text-sm font-bold leading-snug">{label}</div>
          </Box>
        ))}
      </div>
    </SketchFrame>
  );
}
