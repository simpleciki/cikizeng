import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectCardItem } from "./project-card-item";
import { projects, sunnyInvoicesNote } from "@/lib/data";

export function ProjectCards() {
  return (
    <section className="py-24 border-y-2 border-foreground/10" style={{ backgroundColor: '#D6EEFF' }}>
      <div className="mx-auto max-w-5xl px-6">
        <AnimateIn>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Built Solo. Shipped Real.
          </h2>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Each product solves a real problem for real users &mdash; designed, built, and maintained by one person with AI.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateIn key={project.id} delay={i * 150}>
              <ProjectCardItem project={project} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={500}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground italic">
            {sunnyInvoicesNote.text}
          </p>
        </AnimateIn>

        <AnimateIn delay={600}>
          <div className="mt-6 text-center">
            <Link href="/projects" className="text-sm font-semibold underline underline-offset-4 hover:text-[#6FC2FF] transition-colors">
              Learn more about each project &rarr;
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
