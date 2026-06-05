import { Box, Chip, SectionLabel, SketchFrame } from "./visual-primitives";

export function TaskCompositionDiagram() {
  const tasks = [
    ["01", "Design workflow", "process"],
    ["02", "Deploy system", "code"],
    ["03", "Maintain context", "process"],
    ["04", "Connect systems", "code"],
    ["05", "Build evals", "mixed"],
    ["06", "Human loop", "process"],
    ["07", "Manage migration", "process"],
    ["08", "Change management", "process"],
  ] as const;

  return (
    <SketchFrame>
      <SectionLabel>Diagram 03</SectionLabel>
      <div className="mb-4 grid gap-2 sm:grid-cols-3">
        <Chip tone="green">process / organization</Chip>
        <Chip tone="blue">code-heavy</Chip>
        <Chip tone="yellow">mixed</Chip>
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        {tasks.map(([n, label, kind]) => {
          const tone = kind === "code" ? "blue" : kind === "mixed" ? "yellow" : "green";
          return (
            <Box key={n} tone={tone} className="min-h-24">
              <div className="font-mono text-[11px] font-bold text-muted-foreground">{n}</div>
              <div className="mt-2 text-sm font-bold leading-snug">{label}</div>
            </Box>
          );
        })}
      </div>
      <div className="mt-4 rounded-lg border-2 border-[#383838] bg-white px-4 py-3">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Count them
        </div>
        <div className="mt-1 text-lg font-black">2-3 of 8 tasks require writing code.</div>
      </div>
    </SketchFrame>
  );
}

export function OrgCapitalDiagram() {
  return (
    <SketchFrame>
      <SectionLabel>Diagram 04</SectionLabel>
      <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr] md:items-stretch">
        <Box tone="green" className="flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Capability mix
            </div>
            <div className="mt-3 h-12 overflow-hidden rounded-full border-2 border-[#383838] bg-white">
              <div className="flex h-full w-full">
                <div className="flex basis-[70%] items-center justify-center bg-[#5B9A7A] text-sm font-black text-white">
                  ~70%
                </div>
                <div className="flex flex-1 items-center justify-center bg-[#D6EEFF] text-xs font-bold">
                  portable
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Organizational capital lives in relationships, informal process knowledge, and internal
              credit.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip tone="green">non-portable</Chip>
            <Chip tone="blue">tools travel</Chip>
          </div>
        </Box>
        <Box tone="red">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Job switch
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <div className="rounded-lg border-2 border-[#383838] bg-white p-3 text-center text-xs font-bold">
              Company A
            </div>
            <span className="text-xl">&rarr;</span>
            <div className="rounded-lg border-2 border-[#383838] bg-white p-3 text-center text-xs font-bold">
              Company B
            </div>
          </div>
          <div className="mt-4 rounded-lg border-2 border-[#D87973] bg-white p-3 text-center">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
              org capital transfer
            </div>
            <div className="mt-1 text-2xl font-black">resets</div>
          </div>
        </Box>
      </div>
    </SketchFrame>
  );
}

export function ParadigmShiftDiagram() {
  return (
    <SketchFrame>
      <SectionLabel>Diagram 05</SectionLabel>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Box tone="blue">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            configure tools
          </div>
          <div className="mt-4 space-y-2">
            {["employee", "AI assistant", "same process"].map((label) => (
              <div
                key={label}
                className="rounded-lg border-2 border-[#54B4DE] bg-white px-3 py-2 text-sm font-bold"
              >
                {label}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border-2 border-[#383838] bg-white px-3 py-2 text-xs text-muted-foreground">
            Productivity bump. The process itself does not move.
          </div>
        </Box>
        <div className="rounded-full border-2 border-[#383838] bg-[#FFDE00] px-4 py-3 text-center font-mono text-xs font-black uppercase tracking-[0.12em]">
          vs
        </div>
        <Box tone="purple">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            redesign processes
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {["remove", "parallelize", "compress", "human gate"].map((label) => (
              <div
                key={label}
                className="rounded-lg border-2 border-[#A78BFA] bg-white px-3 py-2 text-sm font-bold"
              >
                {label}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border-2 border-[#383838] bg-white px-3 py-2 text-center text-2xl font-black">
            10x
          </div>
        </Box>
      </div>
    </SketchFrame>
  );
}
