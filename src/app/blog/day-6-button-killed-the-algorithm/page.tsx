import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 6: A Button Name Killed My Algorithm",
  description:
    "A month of algorithm tuning hit clean calibration on 11 real videos. Then a parent uploaded one, and the system reported a 1.2-second air time on a jump that physically maxes out at 0.85 seconds. The algorithm was right. The button label was the bug.",
  openGraph: {
    title: "Day 6: A Button Name Killed My Algorithm",
    description:
      "A precise algorithm fed by a misleading button produces precise nonsense.",
  },
};

export default function Day6Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <AnimateIn>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; Back to Blog
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-muted-foreground">
              2026-04-22
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 7 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              UX Design
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Engineering
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 6: A Button Name Killed My Algorithm
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            By this point JumpOnion had been calibrated against 11 real
            figure skating videos. The algorithm went through three versions
            in a month — tightening thresholds, adding physics constraints,
            squeezing out false positives. By the end of v3, every video in
            the calibration set produced a diagnosis that matched the
            coach&apos;s ground truth.
          </p>
          <p>
            Then a real parent uploaded a video. Air time: 1.2 seconds.
          </p>
          <p>
            A clean double jump tops out at about 0.85 seconds. Triples are
            in the high 0.6s. The number 1.2 doesn&apos;t exist in figure
            skating — it&apos;s either a quintuple jump that nobody has
            ever landed, or the algorithm just lied. The calibration
            consensus said: not the algorithm.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Cardinal Engineering Sin
          </h2>
          <p>
            The first reaction was textbook wrong: assume the algorithm
            broke somehow on this specific video. Spend an hour adjusting
            thresholds. Add another smoothing filter. Tune the takeoff
            detector. None of it changed the output — the algorithm
            kept correctly extracting the wrong takeoff and landing frames
            <em>that the user had told it to use</em>.
          </p>
          <p>
            That last bit took an embarrassingly long time to notice.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The UI Said One Thing
          </h2>
          <p>
            The upload flow had two buttons: <strong>Set Takeoff</strong>{" "}
            and <strong>Set Landing</strong>. A user scrubbed the video,
            paused on the moment they thought was the takeoff, hit the
            button, scrubbed forward, paused on the landing, hit the second
            button. Submit. Diagnosis comes back in 60 seconds.
          </p>
          <p>
            Every figure skating parent knows what &quot;takeoff&quot; and
            &quot;landing&quot; mean. They picked the moment the blade left
            the ice and the moment it touched down. Exactly what the buttons
            asked for. That&apos;s what they uploaded.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Algorithm Wanted Something Else
          </h2>
          <p>
            The algorithm&apos;s internal contract was different. Its
            takeoff detector worked by analyzing the blade&apos;s vertical
            velocity profile <em>before</em> the actual takeoff — looking
            for the moment of explosive upward acceleration. That moment is
            real, but it requires <em>frames before the takeoff to
            exist</em>. The same was true on the other end: the landing
            detector needed frames after the landing to confirm stabilization.
          </p>
          <p>
            When the user set the buttons to the literal takeoff and
            landing frames, they trimmed the clip flush against those
            events. No pre-takeoff frames. No post-landing frames. The
            detectors had nothing to anchor against — they fell back to the
            first and last frames of the clip, which were the user&apos;s
            chosen takeoff and landing, which were now treated as
            &quot;clip starts&quot; and &quot;clip ends&quot;. The
            algorithm calculated the duration from the clip&apos;s first
            frame to its last frame: 1.2 seconds. Mathematically perfect.
            Physically nonsense.
          </p>
          <div className="callout-highlight text-sm my-6">
            The buttons were a promise: &quot;tell us takeoff and landing.&quot;
            The algorithm was making a different promise: &quot;tell us when
            the clip starts and ends, with takeoff and landing somewhere in
            the middle.&quot; Same words. Opposite contracts.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Fix Wasn&apos;t in the Algorithm
          </h2>
          <p>
            Once the contract mismatch was visible, the fix was small. One
            commit changed three things:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong>Button labels.</strong> &quot;Set Takeoff&quot; became
              &quot;Set Clip Start.&quot; &quot;Set Landing&quot; became
              &quot;Set Clip End.&quot; Plus a subtext: &quot;include about
              0.5 seconds before the takeoff and after the landing.&quot;
            </li>
            <li>
              <strong>Visual guide.</strong> The trim UI got a quality band
              — a green &quot;good clip&quot; zone and red &quot;too tight&quot;
              edges, plus a tooltip showing the recommended clip structure.
            </li>
            <li>
              <strong>Onboarding modal.</strong> First upload now shows a
              one-screen diagram: a clip with the takeoff and landing in
              the middle, padding visible at both ends, labeled.
            </li>
          </ol>
          <p>
            The algorithm code didn&apos;t change. Its contract was never
            wrong.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What The Calibration Set Couldn&apos;t Catch
          </h2>
          <p>
            The 11 calibration videos came from skating coaches and senior
            skaters. They had been trimmed by someone who already understood
            the algorithm&apos;s needs — clips with enough padding on each
            end. The calibration set was perfectly clean. It was a
            laboratory dataset.
          </p>
          <p>
            What it never contained: a clip trimmed by someone who took the
            button at its word. The very first real parent upload was
            outside the calibration distribution — not because the parent
            was wrong, but because the calibration set had filtered for
            users who already knew what the algorithm wanted.
          </p>
          <p>
            New rule that calcified out of this: <strong>your calibration
            set must include mistakes a real user would make</strong>. Not
            just clean inputs from people who already know the system.
            &quot;Mistakes&quot; here doesn&apos;t mean &quot;malicious&quot;
            — it means &quot;reasonable misinterpretation of what the UI
            promised.&quot;
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            UI as a Contract
          </h2>
          <p>
            I&apos;d been treating the UI as cosmetic. Labels, layouts,
            spacing — things you tune for clarity. After this incident I
            promoted UI to a first-class contract layer. Every domain-term
            button on a critical input is a <em>statement of what the
            system expects</em>. If the user takes the statement
            literally, the system has to behave correctly.
          </p>
          <p>
            That means UI text is part of the algorithm&apos;s test surface.
            If you change a button label, you should be able to re-run the
            algorithm&apos;s integration tests through the new label and
            confirm the contract still holds. If you don&apos;t have a way
            to test the path from UI label to algorithm output, you&apos;ve
            got a silent failure waiting to happen.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Without SOP, With SOP
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="rounded-lg border-2 border-[#383838] bg-[#FFF5F5] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Without SOP
              </span>
              <p className="mt-2 text-sm">
                Keep tuning the algorithm. Add more smoothing. Lower a
                threshold. Re-run on calibration set, see &quot;still
                clean&quot;, declare victory, ship. Real users keep
                uploading &quot;as instructed&quot; and getting impossible
                numbers. Conclusion spreads in the community: &quot;this
                product is unreliable.&quot;
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                When the algorithm&apos;s output is impossible, the
                first hypothesis is contract mismatch, not algorithm bug.
                Trace from output back to input back to UI. UI as a
                first-class contract layer. Calibration set expanded to
                include &quot;reasonable misinterpretations.&quot;
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            Precision in code is wasted if the input that reaches the code
            doesn&apos;t mean what the code thinks it means. A
            calibration set built only from experts will not catch this
            class of failure. A laboratory dataset is not a production
            dataset, no matter how clean it looks.
          </p>
          <p>
            Buttons are contracts. So are placeholder texts, help tooltips,
            confirmation dialogs. They tell the user what input the system
            expects. The user obeys the contract. If the contract&apos;s
            wording disagrees with the algorithm&apos;s assumption, the
            user&apos;s &quot;mistake&quot; is actually correct adherence to
            the wrong promise. Fix the promise.
          </p>

          <p className="mt-8 text-muted-foreground">
            Next: Day 7 — an AI tried to invalidate a stale cache and wiped
            20 paying customers&apos; diagnosis text and training plans in
            a single SQL statement. Recovery was possible only because of
            one audit decision made months earlier.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the &quot;UI as Contract&quot; checklist?
            </p>
            <p className="text-sm text-muted-foreground">
              Templates, SOPs, and design rubrics — from $39.
            </p>
          </div>
          <LinkButton href="/pricing">See Pricing</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
