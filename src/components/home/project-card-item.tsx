"use client";

import type { Project } from "@/lib/data";

const borderColors: Record<string, string> = {
  "#EBF9FF": "#54B4DE",
  "#F7F1FF": "#A78BFA",
  "#FFDE00": "#D4A800",
};

export function ProjectCardItem({ project }: { project: Project }) {
  const border = borderColors[project.accent] || "#383838";

  return (
    <div
      className="flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: project.accent,
        border: `2px solid ${border}`,
        borderRadius: '1.25rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `4px 4px 0 ${border}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="label-tag">{project.name}</span>
        {project.restricted && (
          <span className="inline-block rounded border border-foreground/30 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider">
            Internal
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground mb-4">{project.tagline}</p>
      <p className="text-sm leading-relaxed mb-4">{project.value}</p>
      <div className="mt-auto pt-4 border-t border-foreground/10 space-y-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {project.status}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full border border-foreground/20 bg-white/60 px-2.5 py-0.5 text-[10px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
