import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 5: 89K Stars. I Adopted 3 Ideas. Rejected 3.",
  description:
    "An open-source AI agent framework went viral promising self-evolution through genetic mutation. The temptation was full adoption. The structured 5-dimension comparison was cheaper — and gave me 3 patterns to steal and 3 to reject on sight.",
  openGraph: {
    title: "Day 5: 89K Stars. I Adopted 3 Ideas. Rejected 3.",
    description:
      "Star counts measure how many people had the same problem. They don't measure whether the solution fits yours.",
  },
};

export default function Day5Page() {
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
              2026-04-18
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 9 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              SOP Framework
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Tooling
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Competitive Analysis
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 5: 89K Stars. I Adopted 3 Ideas. Rejected 3.
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            A new AI agent framework hit GitHub trending. 89,000 stars in
            under a year. The pitch was perfect: agents that mutate their
            own skills via a genetic algorithm, marketplace of community
            skills, automatic user profiling. &quot;Self-evolving&quot; was
            the magic word. Of course it was.
          </p>
          <p>
            My first reaction was the same as everyone&apos;s: install it.
            89K people can&apos;t be wrong. My second reaction — trained
            into me by a similar moment a few weeks earlier with a 53K-star
            memory tool — was different. <em>89K stars measures how many
            people had the same problem. It doesn&apos;t measure whether the
            solution fits mine.</em>
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The 5-Dimension Comparison
          </h2>
          <p>
            Rather than ask &quot;use or skip?&quot; — a binary trap — I
            asked &quot;which specific ideas are worth porting at zero
            cost?&quot;. Five axes, one pass:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong>Memory architecture.</strong> Their model: a single
              evolving prompt blob. Mine: four explicit layers (asset,
              runtime, enforcement, training) with clear graduation paths.
              Verdict: mine is more legible. Don&apos;t adopt.
            </li>
            <li>
              <strong>Skill system.</strong> Their model: skills are
              first-class objects with metadata, callable by name, listed in
              a registry. Mine at the time: skills lived as ad-hoc commands.
              Verdict: borrow the registry pattern. Worth a half-day to
              port.
            </li>
            <li>
              <strong>Self-evolution.</strong> Their model: genetic algorithm
              auto-mutates skills based on session outcomes. Mine: a
              human-in-the-loop graduation pipeline. Verdict: see below.
            </li>
            <li>
              <strong>Behavior enforcement.</strong> Their model: prompt-level
              rules in the agent constitution. Mine: hooks + skills + memory
              (layered). Verdict: theirs is weaker. Don&apos;t adopt.
            </li>
            <li>
              <strong>Cross-tool collaboration.</strong> Their model: a
              shared session log. Mine: handoff notes + a rolling
              CURRENT-STATE.md + dashboard sync. Verdict: borrow their JSONL
              session-summary format. Cleaner than what I had.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Why I Rejected the Headline Feature
          </h2>
          <p>
            The genetic-algorithm self-mutation is the framework&apos;s most
            quoted feature. It&apos;s also the one I rejected first.
          </p>
          <p>
            Here&apos;s what self-mutation looks like in a multi-person team
            with code review: the AI proposes a skill change, a human reads
            the diff, the diff lands or gets pushed back. That works. The
            human is the natural review checkpoint.
          </p>
          <p>
            Here&apos;s what self-mutation looks like in a one-person
            company: the AI proposes a skill change, the AI executes it
            because there&apos;s no team, and now a production rule has
            silently shifted while you were doing something else. The next
            time the rule fires, it does something subtly different. You
            won&apos;t notice until a bug surfaces, and you won&apos;t know
            which mutation caused it.
          </p>
          <div className="callout-highlight text-sm my-6">
            Automation is a multiplier. In a team it multiplies oversight. In
            a one-person company it multiplies the absence of oversight.
            Same feature, opposite sign.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Three Ideas I Stole
          </h2>
          <p>
            Three patterns ported, total cost about a day:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong>Skill solidification prompts.</strong> Their framework
              prompts the agent at session end: &quot;was anything in this
              session worth turning into a reusable skill?&quot; I added the
              same nudge to my session-wrap protocol. Most sessions answer
              &quot;no.&quot; The ones that say &quot;yes&quot; have given
              me three new skills in the last month.
            </li>
            <li>
              <strong>JSONL failure-mode log.</strong> Their framework
              appends every tool call outcome to a JSONL file. Mine now
              does the same — and a weekly review of the failures has
              already revealed two anti-patterns I&apos;d been
              accommodating without naming.
            </li>
            <li>
              <strong>Mid-session checkpoints.</strong> Their framework
              triggers a self-reflection every N tool calls. Mine triggers
              every 15 turns: a one-line state echo (&quot;what we set out
              to do / what changed / are we on track&quot;). Cheap, and it
              catches drift before drift catches you.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Three Ideas I Rejected
          </h2>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong>Genetic skill mutation</strong> — for the reason
              above. No review capacity means no automation in this layer.
            </li>
            <li>
              <strong>Public skill marketplace.</strong> Their framework
              imagines users sharing skills the way packages share code.
              Skills in my system are commercial assets. I sell them. A
              public marketplace would commodify exactly the thing I
              monetize.
            </li>
            <li>
              <strong>Automatic user profiling.</strong> Their framework
              builds a profile of the user from session traces. Useful if
              you have many users. I have one user — me. The cost of
              building the system is higher than the benefit of profiling
              one person who can just tell the agent what they want.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Generalized Rule
          </h2>
          <p>
            Out of this evaluation came a rule I now apply to every viral
            tool:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`When a popular tool overlaps your domain:
1. Don't ask "should I adopt it?"
2. Ask "which 1-3 specific ideas are worth porting?"
3. For each idea, ask: "does the assumption behind this idea
   match my situation?" (team size, ownership, asset model, etc.)
4. Port the matches. Reject the mismatches. Explicitly.
5. Write the rejection down — it's the most valuable artifact.`}
          </pre>
          <p>
            The rejections are the valuable part. Reading a 89K-star
            framework and noting &quot;these three features assume a team I
            don&apos;t have&quot; is a sharper articulation of my own
            architecture than I could&apos;ve produced in isolation. The
            popular tool became an evaluation mirror for the system I
            already had.
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
                Either install the 89K-star framework wholesale (chasing
                hype), or dismiss it because &quot;mine is fine&quot; (pride).
                Both options waste the opportunity to learn from a system
                that 89K people gave time to. Worse: full adoption replaces
                a working architecture with one whose assumptions don&apos;t
                match.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                Read the framework. Decompose into specific design choices.
                Match each against your situation. Port the matches at zero
                cost, reject the mismatches loudly. The process produces a
                better tool and a better-articulated own architecture as a
                byproduct.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            Star counts measure popularity, not fit. A tool with 89K stars
            solves 89K people&apos;s problem in a way they&apos;re willing
            to vote for. It does not mean their problem is your problem,
            nor that their solution survives translation to your context.
          </p>
          <p>
            What does survive translation is patterns. Specific design
            choices — &quot;a registry of named skills,&quot; &quot;a JSONL
            session log,&quot; &quot;an end-of-session reflection
            prompt&quot; — survive because they&apos;re context-independent.
            They&apos;re the kind of thing you can extract in an afternoon
            and slot in next to your own primitives. The headline features
            don&apos;t survive. The architectural specifics do.
          </p>
          <p>
            This is why I now spend 30 minutes evaluating every viral AI
            tool that overlaps my stack. Not to adopt it. To mine it for
            the 1-3 specific design choices worth porting. The 30 minutes
            of evaluation is worth more than the 30 hours of half-using
            something I didn&apos;t need.
          </p>

          <p className="mt-8 text-muted-foreground">
            Next: Day 6 — a precise jump-detection algorithm reported a 1.2s
            air time on a jump that physically maxes out at 0.85s. The
            algorithm was right. The button label that fed it was wrong. A
            UX detail killed an engineering metric.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the full evaluation framework?
            </p>
            <p className="text-sm text-muted-foreground">
              Templates, SOPs, and decision rubrics — from $39.
            </p>
          </div>
          <LinkButton href="/pricing">See Pricing</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
