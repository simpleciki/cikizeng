import type { ReactNode } from "react";
import type { VisualKind } from "./sketch-visuals";

export type StoryPanel = {
  n: number;
  eyebrow: string;
  title: string;
  body: ReactNode;
  callout: string;
  visual: VisualKind;
  points: string[];
};

export const storyPanels: StoryPanel[] = [
  {
    n: 1,
    eyebrow: "frame 01",
    title: "The bottleneck moved.",
    body: (
      <>
        AI made the keyboard faster. It did not make judgment cheaper. Once one person can generate
        code, plans, copy, and fixes faster than she can review them, the scarce thing becomes the
        decision: <strong>what deserves trust?</strong>
      </>
    ),
    callout: "The work scaled first. The verification system had to catch up.",
    visual: "bottleneck",
    points: [
      "The system runs a one-person, four-product software company.",
      "Its job is not to write more output; its job is to keep output honest.",
      "That is why the case study starts with governance, not features.",
    ],
  },
  {
    n: 2,
    eyebrow: "frame 02",
    title: "A prompt rule failed.",
    body: (
      <>
        The turning point was small and ugly: a rule already existed, and the AI still skipped it. That
        is when the methodology stopped being a document and became enforcement.
      </>
    ),
    callout: "Prompts are suggestions. Hooks are law.",
    visual: "hook",
    points: [
      "Important rules moved from prose into mandatory checks.",
      "~19-20 hooks run across five lifecycle events.",
      "The AI does not get to remember discipline; the system runs it.",
    ],
  },
  {
    n: 3,
    eyebrow: "frame 03",
    title: "Rules got a lifecycle.",
    body: (
      <>
        A rule should not live forever just because one bad session hurt. CikiBrain catches a pattern,
        promotes it when it recurs, enforces it in code, then gives it an exit condition.
      </>
    ),
    callout: "No rule without a retire-if.",
    visual: "lifecycle",
    points: [
      "Cheap observations stay cheap until they repeat.",
      "Recurring failures graduate into executable guardrails.",
      "Obsolete guardrails are designed to retire instead of piling up.",
    ],
  },
  {
    n: 4,
    eyebrow: "frame 04",
    title: "The security problem was a chain.",
    body: (
      <>
        The scary leak was not just a committed secret. It was a debug transcript that could sync,
        version, and become searchable somewhere else. So the defense had to model the whole pipeline.
      </>
    ),
    callout: "Stop unsafe source writes before they become durable artifacts.",
    visual: "security",
    points: [
      "The system treats cloud sync and AI indexing as part of the threat model.",
      "Security hooks watch the source-writing path, not only the final repo.",
      "The public page shows the mechanism without exposing private contents.",
    ],
  },
  {
    n: 5,
    eyebrow: "frame 05",
    title: "It catches me too.",
    body: (
      <>
        All-green tests can still be false confidence. A long session can drift. A founder can want to
        call something done too early. So the gates are aimed at the operator as much as the model.
      </>
    ),
    callout: "Done means evidence, not confidence.",
    visual: "proof",
    points: [
      "Build output, live behavior, logs, screenshots, or commits become proof.",
      "False completion is treated as a system failure, not a personality flaw.",
      "The verification gate is part of the architecture, not a closing ritual.",
    ],
  },
  {
    n: 6,
    eyebrow: "frame 06",
    title: "The ledger closes the loop.",
    body: (
      <>
        The newest layer observes capability signals from real work, stores allow-listed keys and a
        non-reversible hash, then proposes evidence for operator approval. No prompt text is stored.
      </>
    ),
    callout: "Capability evolves from behavior, by consent.",
    visual: "ledger",
    points: [
      "Raw signals become reviewable capability evidence.",
      "The human remains the decision gate before the baseline moves.",
      "This is the same loop the rest of the operating system runs on.",
    ],
  },
];
