import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 2: 6.47 Seconds of Air Time (The Jump Lasted 0.7)",
  description:
    "The first attempt at detecting a figure skating jump measured 6.47 seconds of air time. Three failed approaches, then the system rescued itself.",
  openGraph: {
    title: "Day 2: 6.47 Seconds of Air Time",
    description:
      "How a figure skating AI went from catastrophically wrong to self-correcting. The real debugging story.",
  },
};

export default function Day2Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <AnimateIn>
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-muted-foreground">
              2026-04-13
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 7 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Engineering
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Debugging
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 2: 6.47 Seconds of Air Time (The Jump Lasted 0.7)
          </h1>
        </div>
      </AnimateIn>

      {/* Article body */}
      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            Day 1 ended with a Python script that could extract pose data from
            a figure skating video. Day 2 was supposed to be the victory lap
            — detect the actual jump, measure air time, and celebrate.
          </p>
          <p>
            Instead, my first jump detection algorithm reported 6.47 seconds
            of air time on a triple Axel that lasted about 0.7 seconds. Not
            &quot;a little off.&quot; Off by an order of magnitude.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Attempt #1: Track the Center of Mass
          </h2>
          <p>
            The approach seemed obvious. A skater jumps, their center of mass
            goes up, then comes back down. Track the vertical position of the
            body&apos;s centroid across frames, find the peak, measure the
            duration. Simple physics.
          </p>
          <p>
            On lab footage — a person jumping straight up in a controlled
            environment — this works beautifully. Clean parabolic arc, easy
            peak detection, accurate timing.
          </p>
          <p>
            On real rinkside footage, it was a disaster. The camera moves. The
            skater travels horizontally across the ice. Other skaters cross the
            frame. The centroid jumps around like a bug on a windshield, and
            the algorithm interprets every camera jitter as the skater leaving
            the ice.
          </p>
          <p>
            Result: <strong>6.47 seconds of air time</strong>. The algorithm
            was tracking camera shake, not the jump.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Attempt #2: Same Approach, Smaller Tweaks
          </h2>
          <p>
            The natural reaction: smooth the signal. Add a moving average
            filter. Increase the minimum peak prominence. Tweak the threshold.
          </p>
          <p>
            This is where most debugging goes wrong — and where my SOP saved
            me. The second attempt produced 4.2 seconds of air time. Better,
            but still absurd. A real triple Axel takes about 0.6–0.8 seconds.
          </p>
          <p>
            The problem wasn&apos;t the filter parameters. The problem was the
            entire approach. Centroid tracking fundamentally cannot work when
            the camera is moving and the skater is translating horizontally.
            No amount of parameter tuning fixes a wrong algorithm.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The SOP Kicked In
          </h2>
          <p>
            My workflow has a rule called{" "}
            <strong>Blindspot Interception</strong>: after two identical
            failures, force a root cause analysis. After 30 minutes on a
            dead-end approach, force a strategy switch. Don&apos;t tweak — rethink.
          </p>
          <p>
            On the third attempt, instead of smoothing the centroid signal
            again, the system did something different. It asked the right
            question: <em>what physical signal actually indicates a skater
            is in the air?</em>
          </p>

          <div className="callout-highlight text-sm my-6">
            Without the SOP: I would have spent the entire day tuning filter
            parameters on a fundamentally broken approach. The centroid looks
            like a reasonable metric — it&apos;s just wrong for this specific
            domain. Without a forced strategy switch, reasonable-but-wrong can
            consume unlimited time.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Attempt #3: Track What Matters
          </h2>
          <p>
            The answer was embarrassingly simple once you know it: track the
            bottom-most point of the body (the skate blade or foot), not the
            center. When a skater is on the ice, their lowest point touches the
            surface. When they jump, that lowest point lifts off. The vertical
            position of the bottom point is the direct physical indicator of
            &quot;in the air or not.&quot;
          </p>
          <p>
            Combined with physics constraints — a figure skating jump
            can&apos;t exceed ~1.0 seconds of air time, and the skater must
            come back down — the noise from camera movement was filtered
            naturally. Camera shake doesn&apos;t create a sustained upward
            movement of the bottom point followed by a clean descent.
          </p>
          <p>
            Result: <strong>0.72 seconds of air time</strong>. Within the
            expected range for a real triple Axel from rinkside footage.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Debugging Pattern
          </h2>
          <p>
            What made Day 2 instructive wasn&apos;t the fix — it was the
            failure mode. Here&apos;s the pattern:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              <strong>Attempt 1:</strong> Algorithm produces wildly wrong
              result (6.47s).
            </li>
            <li>
              <strong>Attempt 2:</strong> Same algorithm with parameter tweaks
              produces slightly less wrong result (4.2s). Developer thinks
              they&apos;re making progress.
            </li>
            <li>
              <strong>SOP trigger:</strong> Blindspot Interception fires —
              two failures on the same approach means the approach is wrong,
              not the parameters.
            </li>
            <li>
              <strong>Attempt 3:</strong> Completely different approach.
              Correct result on first try (0.72s).
            </li>
          </ol>
          <p>
            The dangerous moment is Attempt 2. The numbers improved, which
            creates the illusion of progress. Without a forced strategy switch,
            there would have been an Attempt 3, 4, 5 — each slightly better,
            none correct, each consuming another hour.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="rounded-lg border-2 border-[#383838] bg-[#FFF5F5] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Without SOP
              </span>
              <p className="mt-2 text-sm">
                Keep tweaking centroid tracking parameters. Each attempt takes
                45–60 minutes. After 4–5 attempts and a full day, maybe
                discover the approach is fundamentally wrong. Maybe not.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                Blindspot Interception after 2 failures. Force root cause
                analysis. Switch to bottom-point tracking. Correct result
                within 30 minutes of the strategy switch.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What I Learned
          </h2>
          <p>
            Day 2 taught me the most important debugging principle in AI
            development:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              <strong>Improving wrong numbers feels like progress.</strong>{" "}
              6.47s → 4.2s → 3.1s → ... still wrong. The trajectory of
              improvement tricks you into staying on a dead-end path.
            </li>
            <li>
              <strong>Domain knowledge beats algorithm sophistication.</strong>{" "}
              The fix wasn&apos;t a better filter or a smarter model — it was
              understanding what &quot;being in the air&quot; physically
              looks like in a video. The bottom point lifts off.
            </li>
            <li>
              <strong>Forced strategy switches save days.</strong> My AI
              partner would have happily kept optimizing centroid tracking
              forever. The rule that forced a rethink after two failures is
              what rescued the session.
            </li>
          </ol>

          <p className="mt-8">
            The bottom-point tracking became the foundation of JumpOnion&apos;s
            detection pipeline. It survived six months of development and
            1,000+ tests. Sometimes the right answer is embarrassingly simple
            — you just need a system that forces you to find it before
            you&apos;ve wasted a week on the wrong one.
          </p>

          <p className="mt-4 text-muted-foreground">
            Next: Day 3 — months later, the AI confidently deleted production
            code labeled &quot;dead.&quot; 987 tests passed. The deploy went green.
            Thirty hours later, a paying customer noticed.
          </p>
        </article>
      </AnimateIn>

      {/* Footer CTA */}
      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the methodology behind JumpOnion?
            </p>
            <p className="text-sm text-muted-foreground">
              Templates, SOPs, and enforcement hooks — from $39.
            </p>
          </div>
          <LinkButton href="/pricing">See Pricing</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
