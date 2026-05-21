import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 7: When AI Deleted 20 Customers' Data (in One SQL Statement)",
  description:
    "After hunting down a real production blocker, the AI moved to clean up a stale cache. The SQL nullified three independent caches in one go. 20 rows updated. 7 paying customers' personalized diagnoses and training plans — gone. The audit table is the reason this story has a happy ending.",
  openGraph: {
    title: "Day 7: When AI Deleted 20 Customers' Data",
    description:
      "Founder absorbs the risk, customer absorbs the value. Single-founder SaaS isn't about never breaking — it's about blast-radius-aware recovery.",
  },
};

export default function Day7Page() {
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
              2026-04-25
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 9 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Production Incident
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Data Safety
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 7: When AI Deleted 20 Customers&apos; Data (in One SQL Statement)
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            The session that became this incident started well. We&apos;d
            just tracked down a real production blocker — a model file that
            had been silently <code>gitignored</code> in deployment for
            weeks, leaving rotation metrics dark for every upload during
            that window. The fix was a one-line ignore change. The deploy
            went green. Rotation metrics started flowing again.
          </p>
          <p>
            Then the AI proposed the next step: invalidate the stale
            cached results for those affected uploads so they&apos;d
            regenerate with the now-working metrics. Sensible. I said yes.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The SQL That Looked Reasonable
          </h2>
          <p>
            The AI proposed:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`UPDATE <results_table>
SET <cache_column_a> = NULL,
    <cache_column_b> = NULL,
    <cache_column_c> = NULL
WHERE created_at BETWEEN '<date>' AND '<date>';`}
          </pre>
          <p>
            The intent in the AI&apos;s head: &quot;reset the affected
            uploads so they recompute.&quot; The mental model: a single
            cache wiped clean on next read. The actual table schema:
            multiple independent caches in separate columns, each
            populated by a different upstream pipeline.
          </p>
          <p>
            One pipeline (the analytics one) was correctly broken — that
            was the bug we just fixed. The other pipelines were
            independent. They&apos;d been running fine the whole time.
            Their cached output was current, personalized, and the result
            of expensive LLM calls.
          </p>
          <p>
            <code>SET ... = NULL</code> on all the cache columns wiped
            them all.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            20 Rows. 7 Customers. About 90 Seconds.
          </h2>
          <p>
            The query ran successfully. 20 rows updated. Seven paying
            customers&apos; personalized diagnosis text — gone. Their
            training plans — gone. None of it recoverable from the
            user-facing database, because the cache columns were the
            source of truth for that text.
          </p>
          <p>
            I caught it within minutes because I happened to be watching
            the query output. Three months earlier, I would have noticed
            an hour later, after the LLM bill spiked from the regeneration
            wave.
          </p>
          <p>
            The next 30 minutes were the worst 30 minutes of building
            JumpOnion.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Why The Story Has an Ending
          </h2>
          <p>
            Eight weeks before this incident, after a smaller but related
            scare, I&apos;d added a column to the LLM call log persisting
            the full text of every LLM response. Not just the prompt and
            metadata — the full output. It cost a few cents a day in
            storage. The justification at the time was: &quot;if I ever
            have a cache-wipe incident, this is what saves me.&quot; It
            felt like overcaution. It became the only reason this story has
            an ending.
          </p>
          <p>
            Within fifteen minutes I had a script that walked the LLM call
            log for each affected task ID, pulled the latest diagnosis
            and training plan responses, and re-populated the wiped cache
            columns. The customers&apos; data wasn&apos;t recovered — it
            was <em>regenerated from the original LLM output that produced
            it</em>. Identical text. Identical training plans.
          </p>
          <div className="callout-highlight text-sm my-6">
            The audit log was a paranoia investment. It cost almost nothing
            to keep. It made an unrecoverable disaster into a 30-minute
            restoration. Most paranoia investments pay zero. The one that
            pays, pays everything.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Two Rules Calcified
          </h2>
          <p>
            Two new entries in the SOP came out of this:
          </p>
          <ol className="list-decimal list-inside space-y-4 ml-2">
            <li>
              <strong>Cache invalidation follows upstream-dependency rules.</strong>{" "}
              Every cache column has a known upstream input. When you fix
              an upstream bug, you invalidate only the cache columns that
              depend on that input — never &quot;all caches&quot; as a
              reflex. Each cache is a separate column because each has a
              separate upstream. Treat them that way.
            </li>
            <li>
              <strong>Destructive SQL on multi-row production data
              requires a SELECT-preview gate.</strong> Any{" "}
              <code>UPDATE</code> or <code>DELETE</code> that could touch
              more than one customer row has to run as a{" "}
              <code>SELECT</code> first, returning the affected user emails.
              The founder reviews the list. Approves explicitly. Only then
              does the destructive query run. The cost of this protocol is
              30 seconds. The cost of skipping it is 30 minutes of recovery
              if you&apos;re lucky and a customer churn if you&apos;re not.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Mental Model the AI Had
          </h2>
          <p>
            What I keep coming back to is the AI&apos;s mental model at
            the moment it wrote that SQL. The model was: &quot;cache =
            single thing that gets reset.&quot; Not: &quot;cache =
            multiple independent columns, each with its own provenance,
            only one of which is actually stale.&quot;
          </p>
          <p>
            The AI didn&apos;t lack data. The schema was loaded in the
            session context. The cache column names were even in its
            tab-completion. What it lacked was the <em>discipline</em> of
            asking &quot;which of these actually needs invalidation, and
            why?&quot; before writing the SQL.
          </p>
          <p>
            That discipline, written down, is a SOP rule. Without the rule,
            the AI defaults to whatever mental model is easiest — and
            &quot;cache = one thing&quot; is the easiest. With the rule,
            the AI runs the upstream-dependency check first, and the
            destructive SQL only touches what it actually needs to touch.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Customer Notification
          </h2>
          <p>
            Within hours of the incident, the seven affected customers got
            a same-day email. No marketing language. Just: &quot;a
            cleanup query during a backend fix accidentally invalidated
            your latest diagnosis. We&apos;ve regenerated it from the
            original analysis log and it&apos;s back on your account. No
            charge for the regeneration. Sorry.&quot;
          </p>
          <p>
            Zero customers churned. Several replied with thanks for the
            transparency. One — a coach who&apos;d been on the platform
            for a month — said the response was the reason he&apos;d
            recommend it to other coaches: &quot;you told me what broke
            before I noticed.&quot;
          </p>
          <p>
            Single-founder SaaS isn&apos;t about never breaking. It&apos;s
            about absorbing the blast radius yourself instead of pushing
            it onto the customer. The audit log let me absorb this one.
            Without it, seven customers would have lost data and trust in
            the same afternoon.
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
                Trust the AI&apos;s SQL. Run it. Notice the column count
                hours later when an LLM bill spike triggers a billing
                alert. Discover seven customers&apos; data is gone. No
                audit log means no recovery path. Push a public apology.
                Burn trust with paying customers in a niche where word
                spreads fast.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                SELECT-preview gate forces the dry run. The result shows
                three columns being NULLed. Catch the over-broad scope
                before execution. Even if it somehow runs: audit log makes
                regeneration possible. Same-day customer email turns the
                incident into a trust-building moment instead of a churn
                event.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            AI partners write production SQL. That&apos;s table stakes now.
            The question isn&apos;t &quot;will the AI ever write
            destructive SQL?&quot; — it will, eventually, with the most
            plausible-looking justification — but &quot;what catches it
            before it lands?&quot;
          </p>
          <p>
            Two things catch it. A SELECT-preview gate makes the scope
            visible <em>before</em> execution. An audit log makes recovery
            possible <em>after</em> execution. Together they convert
            unrecoverable disasters into managed incidents. Separately,
            either one alone is meaningfully better than neither.
          </p>
          <p>
            The mental shift that took me longest to make: stop trusting
            the AI&apos;s &quot;this is safe&quot; reasoning. The AI is
            usually right about safety. But the cost of trusting it when
            it&apos;s wrong is high enough that the cost of double-checking
            every time is the cheaper trade.
          </p>

          <p className="mt-8 text-muted-foreground">
            Next: Day 8 — the LLM finished a 59-second training plan
            generation. The platform&apos;s 60-second gateway timeout
            killed the client connection 0.7 seconds before. The user got
            a 504. The plan was already saved. The audit log knew. Nothing
            else did.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the destructive-SQL protocol?
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
