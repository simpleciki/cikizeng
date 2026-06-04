import { NumberDot } from "./sketch-primitives";
import { SketchVisual } from "./sketch-visuals";
import type { StoryPanel } from "./storyboard-data";

const STORY_ACCENT = {
  border: "#5B9A7A",
  bg: "#EEF5F0",
};

export function StoryPanelCard({ panel }: { panel: StoryPanel }) {
  return (
    <section
      className="grid gap-5 rounded-2xl border-2 bg-white p-5 sm:grid-cols-[0.9fr_1fr] sm:p-6"
      style={{ borderColor: "rgba(45,45,45,0.16)" }}
    >
      <SketchVisual kind={panel.visual} />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <NumberDot n={panel.n} />
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {panel.eyebrow}
          </div>
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">{panel.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/90">{panel.body}</p>
        <div
          className="mt-4 rounded-xl border-2 px-4 py-3 text-sm font-bold"
          style={{ borderColor: STORY_ACCENT.border, backgroundColor: STORY_ACCENT.bg }}
        >
          {panel.callout}
        </div>
        <ul className="mt-4 grid gap-2 text-xs leading-relaxed text-muted-foreground">
          {panel.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/50" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
