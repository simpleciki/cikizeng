import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 4: Memory Is a Wish. Hooks Are the Law.",
  description:
    "The anti-pattern was already in memory. The AI loaded it at session start. It walked right into the same bug anyway. Forty minutes from paying-customer report to root cause to deploy — and a deeper finding that rewired how I store rules.",
  openGraph: {
    title: "Day 4: Memory Is a Wish. Hooks Are the Law.",
    description:
      "The rule existed. The AI agreed it knew. It still shipped the same anti-pattern. Why memory isn't enforcement.",
  },
};

export default function Day4Page() {
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
              2026-04-15
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 8 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Governance
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Memory Architecture
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 4: Memory Is a Wish. Hooks Are the Law.
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            Day 3 was the dead-code outage. Same day, a quieter incident
            taught a harder lesson — the kind that doesn&apos;t make a
            customer angry, just slowly erodes your trust in your own system.
          </p>
          <p>
            I shipped a feature that added three columns to a database table.
            The migration succeeded. The new columns saved correctly. The
            read path looked clean. A paying user clicked the feature, and
            nothing happened.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Bug
          </h2>
          <p>
            The function fetching the user&apos;s profile didn&apos;t do{" "}
            <code>SELECT *</code>. It listed specific columns —{" "}
            <code>id, email, name, role, ...</code> — and the list hadn&apos;t
            been updated to include the three new ones. Every query returned
            the user&apos;s profile <em>minus the very fields the new feature
            needed</em>.
          </p>
          <p>
            Tests didn&apos;t catch it. The unit tests for that function used
            fixtures that mocked the column list. The fixtures hadn&apos;t
            been updated either. Every test passed. The deploy went green.
            The customer&apos;s click did nothing.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Part That Hurt
          </h2>
          <p>
            This exact anti-pattern — manual column lists silently dropping
            new fields — had a name in my system. It had been{" "}
            <em>graduated to feedback memory</em> three weeks earlier, after
            an export bug burned half a day. The memory file said, almost
            verbatim:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`feedback: when a query lists columns manually,
and the schema gains new columns, the read silently drops them.
Prefer SELECT *, or return the row object directly.
Reason: caused export bug, 4 hours debugging on 2026-03-30.`}
          </pre>
          <p>
            The AI loaded that file at session start. It said it knew. The
            session log even showed the file being read. And then the AI
            wrote new code with a manual column list and never connected the
            two.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Forty Minutes
          </h2>
          <p>
            From user report to deploy: forty minutes. The fix was three
            lines — switch the read to return the full row object, update the
            two tests that mocked the column shape, push. A standard
            production cycle.
          </p>
          <p>
            But that&apos;s not the story. The story is the question I asked
            after the fix shipped:
          </p>
          <p className="text-lg font-semibold border-l-4 border-[#383838] pl-4 py-2 my-4 bg-[#FFFEF7]">
            &quot;Why didn&apos;t the memory file fire?&quot;
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            How Memory Files Actually Behave
          </h2>
          <p>
            When you tell an AI &quot;remember this for next time,&quot;
            here&apos;s what happens, mechanically:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              The text goes into a file (a memory, a CLAUDE.md, a system
              prompt addendum — same idea).
            </li>
            <li>
              At session start, that file is loaded into the conversation
              context. The AI reads it like it reads any other context.
            </li>
            <li>
              The AI then does whatever the next prompt says. The memory is{" "}
              <em>passive</em> — it&apos;s available to be recalled if the
              AI happens to associate the current task with it.
            </li>
            <li>
              In a long session, the conversation context grows. The memory
              file&apos;s relevance gets diluted by everything that came
              after. The association fades.
            </li>
          </ol>
          <p>
            That&apos;s the failure mode. The rule was loaded. The AI
            even &quot;knew&quot; it. But knowing isn&apos;t the same as{" "}
            <em>triggering</em> when the matching pattern shows up in the
            current code.
          </p>
          <div className="callout-highlight text-sm my-6">
            Memory in AI is like a sticky note on the inside of your skull.
            You can see it whenever you happen to look up. But you have to
            happen to look up.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What Enforcement Looks Like
          </h2>
          <p>
            The fix that survived this incident wasn&apos;t a stronger
            memory file. It was a different kind of artifact entirely. A{" "}
            <em>hook</em> — a tiny script that runs every time the AI edits
            a file, before the edit lands.
          </p>
          <p>
            The hook&apos;s logic is dumb on purpose:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`on every edit to a *.py file:
  1. read the diff
  2. scan for: "SELECT column1, column2"  (manual lists)
  3. cross-check against feedback memory keywords
  4. if match → inject warning into AI's next prompt:
     "STOP. You're about to write the manual-column-list
      anti-pattern. Refer to feedback memory before continuing."`}
          </pre>
          <p>
            The hook doesn&apos;t care if the AI is in a long session, a
            short session, or just woke up. It doesn&apos;t care if the AI
            associated the pattern with the memory. It fires when the
            pattern appears, deterministically, before the bug can be
            written.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Spectrum
          </h2>
          <p>
            After this incident I drew the spectrum out explicitly:
          </p>
          <div className="grid gap-3 my-6">
            <div className="rounded-md border-2 border-[#383838] p-4 bg-[#FFF5F5]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Layer 1 · Prompt-level rule (in CLAUDE.md)
              </span>
              <p className="mt-2 text-sm">
                Loaded once at session start. Fades under context pressure.
                Reliability: ~85%. Free.
              </p>
            </div>
            <div className="rounded-md border-2 border-[#383838] p-4 bg-[#FFF9EC]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Layer 2 · Feedback memory (graduated rule)
              </span>
              <p className="mt-2 text-sm">
                Persists across sessions. Still loaded passively. Same
                fading. Reliability: ~85% — looks higher because it&apos;s
                persisted, but the trigger mechanism is identical to Layer 1.
              </p>
            </div>
            <div className="rounded-md border-2 border-[#383838] p-4 bg-[#F6FFF6]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Layer 3 · Skill / phase-triggered guidance
              </span>
              <p className="mt-2 text-sm">
                Fires on specific commands or phases (e.g. &quot;before
                committing&quot;). Reliability: ~95%. Bound to phase, not
                file-level pattern.
              </p>
            </div>
            <div className="rounded-md border-2 border-[#383838] p-4 bg-[#EBF9FF]">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Layer 4 · Hook (mechanical enforcement)
              </span>
              <p className="mt-2 text-sm">
                Triggered by file events, not by the AI &quot;remembering.&quot;
                Reliability: ~100% within scope. Cost: a few lines of
                JavaScript per rule.
              </p>
            </div>
          </div>
          <p>
            The lesson isn&apos;t that Layer 4 is &quot;the right one&quot;
            — most rules don&apos;t justify a hook. The lesson is that{" "}
            <strong>graduating a rule to memory is graduation, not
            enforcement</strong>. If a rule absolutely cannot fail, it has
            to descend further down the stack until something mechanical
            catches it.
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
                Write a memory file: &quot;remember not to do X.&quot; Believe
                the AI when it says it loaded the file. Re-fix the same bug
                three times across three months. Eventually conclude AI just
                isn&apos;t reliable enough.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                After the second instance, ask: &quot;why didn&apos;t the
                memory fire?&quot; Trace the actual mechanism. Descend the
                rule one layer — from memory to hook. Same bug never makes
                it past <code>git add</code> again.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            Every AI workflow promises &quot;memory&quot; as a feature. Most
            of them mean &quot;a text file we load at session start.&quot;
            That&apos;s real, useful, and not the same thing as enforcement.
          </p>
          <p>
            When I sell methodology now, I make this distinction explicit.
            The cheap version of an AI partner — the version where you write
            CLAUDE.md, save preferences, and call it done — works most of
            the time. The version that survives production pressure is
            different. It has memory, and skills, and hooks. Three different
            artifacts, three different reliability profiles. You don&apos;t
            need all three for every rule. You need to know which layer each
            rule lives at, and why.
          </p>
          <p>
            If you can&apos;t answer &quot;what layer does this rule live
            at?&quot; for an anti-pattern that has bitten you twice — write
            the hook. Forty minutes to debug, ten minutes to write the hook,
            zero future incidents.
          </p>

          <p className="mt-8 text-muted-foreground">
            Next: Day 5 — an open-source AI agent framework hit 89K GitHub
            stars promising &quot;self-evolving&quot; intelligence. The
            temptation was to install it. The 5-dimension comparison was
            cheaper. Three ideas worth porting. Three worth rejecting on
            sight.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the four-layer enforcement system?
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
