import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/animate-in";
import { projects, sunnyInvoicesNote } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Ciki Zeng",
  description: "3 SaaS products built solo with AI.",
};

const borderColors: Record<string, string> = {
  "#EBF9FF": "#54B4DE",
  "#F7F1FF": "#A78BFA",
  "#FFDE00": "#D4A800",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <AnimateIn>
        <div className="mb-16">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Portfolio
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            Every project here was built by one person with AI partnership.
            No team. No outsourcing. Each one solves a real problem for real users.
          </p>
        </div>
      </AnimateIn>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <AnimateIn key={project.id} delay={i * 150}>
            <div
              id={project.id}
              className="p-8 transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: project.accent,
                border: `2px solid ${borderColors[project.accent] || '#383838'}`,
                borderRadius: '1.25rem',
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="label-tag">{project.name}</span>
                {project.restricted && (
                  <span className="inline-block rounded border border-foreground/30 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider">
                    Internal tool
                  </span>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#2D2D2D] underline underline-offset-4 hover:text-[#6FC2FF] transition-colors">
                    Visit &rarr;
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{project.tagline}</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] mb-2">The Problem</h3>
                  <p className="text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Why It Matters</h3>
                  <p className="text-sm leading-relaxed">{project.value}</p>
                </div>
              </div>

              {project.restrictedNote && (
                <p className="mt-5 text-xs text-muted-foreground italic border-l-2 pl-4"
                  style={{ borderColor: borderColors[project.accent] || '#2D2D2D' }}>
                  {project.restrictedNote}
                </p>
              )}

              <div className="mt-6 pt-4 border-t border-foreground/10 flex flex-wrap items-center gap-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{project.status}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="inline-block rounded border border-foreground/20 bg-white/60 px-2 py-0.5 text-[10px] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={500}>
        <div className="mt-12 card-bordered p-6" style={{ backgroundColor: '#EDE8E3' }}>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2">Also: SunnyInvoices</h3>
          <p className="text-xs leading-relaxed">{sunnyInvoicesNote.text}</p>
        </div>
      </AnimateIn>
    </div>
  );
}
