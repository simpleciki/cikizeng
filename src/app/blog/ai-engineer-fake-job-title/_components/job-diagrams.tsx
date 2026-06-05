import { Arrow, Box, Chip, SectionLabel, SketchFrame } from "./visual-primitives";

export function JobTitleLayersDiagram() {
  const jobs = [
    {
      n: "#1",
      title: "floor-raiser",
      tone: "blue" as const,
      body: "Fast demos. Tool fluency. Stalls at permissions, data, approvals, and cross-department reality.",
    },
    {
      n: "#2",
      title: "ceiling-keeper",
      tone: "purple" as const,
      body: "Senior engineering made stronger by AI. Architecture, review, performance, orchestration.",
    },
    {
      n: "#3",
      title: "process-rebuilder",
      tone: "green" as const,
      body: "Finds the undocumented workflow, changes it with the organization, then locks it in with AI.",
    },
  ];

  return (
    <SketchFrame>
      <SectionLabel>Diagram 01</SectionLabel>
      <div className="rounded-lg border-2 border-[#383838] bg-white px-5 py-4 text-center">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          Market label
        </div>
        <div className="mt-1 text-2xl font-black tracking-tight">&quot;AI Engineer&quot;</div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {jobs.map((job) => (
          <Box key={job.title} tone={job.tone}>
            <div className="flex items-center justify-between gap-3">
              <Chip tone={job.tone}>{job.n}</Chip>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                hidden job
              </div>
            </div>
            <h3 className="mt-3 text-base font-bold">{job.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{job.body}</p>
          </Box>
        ))}
      </div>
    </SketchFrame>
  );
}

export function HiringMismatchDiagram() {
  const steps = [
    {
      title: "JD wants #2",
      tone: "purple" as const,
      body: "The company asks for hard technical capability.",
    },
    {
      title: "HR receives #1",
      tone: "blue" as const,
      body: "The inbox fills with tool-demo candidates.",
    },
    {
      title: "Only #3 keeps it alive",
      tone: "green" as const,
      body: "The project needs someone who can rebuild the process.",
    },
  ];

  return (
    <SketchFrame>
      <SectionLabel>Diagram 02</SectionLabel>
      <div className="grid gap-3 md:grid-cols-[1fr_72px_1fr_72px_1fr] md:items-center">
        <Box tone={steps[0].tone}>
          <h3 className="text-base font-bold">{steps[0].title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{steps[0].body}</p>
        </Box>
        <Arrow label="but" />
        <Box tone={steps[1].tone}>
          <h3 className="text-base font-bold">{steps[1].title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{steps[1].body}</p>
        </Box>
        <Arrow label="so" />
        <Box tone={steps[2].tone}>
          <h3 className="text-base font-bold">{steps[2].title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{steps[2].body}</p>
        </Box>
      </div>
    </SketchFrame>
  );
}
