import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 8: The LLM Succeeded. The Platform Killed the Connection.",
  description:
    "First production smoke of a new training-plan endpoint. The browser hung for a minute, returned 504, and a manual refresh showed the plan was already there. The LLM finished in 59.3 seconds. The platform's 60-second gateway killed the client first. The audit log was the only thing that knew.",
  openGraph: {
    title: "Day 8: The LLM Succeeded. The Platform Killed the Connection.",
    description:
      "Build for the gateway you have, not the gateway you wish for. And log every model call — the audit table will save you twice.",
  },
};

export default function Day8Page() {
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
              2026-04-30
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 8 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Infrastructure
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Engineering
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 8: The LLM Succeeded. The Platform Killed the Connection.
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            New endpoint. Generates a personalized training plan from a
            diagnosis via a chain of LLM calls. Local development: works
            in 50-something seconds. Test suite: green. Deployed to
            production. Time for the first real-world smoke.
          </p>
          <p>
            I clicked &quot;Generate Plan.&quot; The browser hung. A
            minute passed. The response came back: <code>504 Gateway
            Timeout</code>. The natural conclusion was that the LLM had
            failed somehow. I hit refresh on the dashboard.
          </p>
          <p>
            The new plan was already there.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Two Sources of Truth Disagreed
          </h2>
          <p>
            From the frontend&apos;s view, the request failed. The user
            saw 504. From the backend&apos;s view, everything was fine —
            the LLM finished, the plan was saved, the database row was
            written, no errors logged.
          </p>
          <p>
            Two sources of truth disagreeing is the most diagnostic moment
            in software. Either one is lying or one is incomplete. My
            instinct was to start prodding the backend. The audit log
            answered first.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What the Audit Log Said
          </h2>
          <p>
            The same audit log that saved Day 7&apos;s incident answered
            this one too. Every LLM call had a row: model name, prompt
            revision, start timestamp, end timestamp, status, output.
          </p>
          <p>
            For this request:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`call_id: 1f3...
model: <llm-model>
prompt_rev: <prompt-version>
duration_ms: 59287       <-- 59.287 seconds
status: success
output_chars: 4831`}
          </pre>
          <p>
            The LLM had finished in 59.3 seconds. The deploy platform&apos;s
            gateway timeout was 60 seconds. The math was now clear: the
            LLM finished, the backend started writing the response, the
            gateway killed the client connection because it had been
            holding for ~60 seconds, and the backend completed the
            database write into the void. The 504 was the gateway giving
            up, not the LLM giving up.
          </p>
          <div className="callout-highlight text-sm my-6">
            Every deploy platform has a hard gateway timeout. It is almost
            always shorter than what your application&apos;s timeout
            config admits. Your app might be configured for 120 seconds.
            The gateway will quietly cap you at 60.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Naive Fixes Wouldn&apos;t Work
          </h2>
          <p>
            Default debugging path for a 504 on an LLM call would be:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Bump application timeout to 120s.</li>
            <li>Add retry logic on the client.</li>
            <li>Email the LLM provider blaming their latency.</li>
          </ol>
          <p>
            None of these would have helped, because none of them touch
            the actual constraint. The gateway timeout is in the
            <em> platform&apos;s</em> reverse proxy, not the
            application&apos;s config. It&apos;s a hidden ceiling. Bumping
            the app timeout to 120s just means the gateway kills the
            client at second 60 instead of the app killing it at second
            120. Retry logic at the client just guarantees the same
            timeout happens twice.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Fix Was Two-Pronged
          </h2>
          <p>
            Two parallel small fixes, neither glamorous, both shipped same
            day:
          </p>
          <ol className="list-decimal list-inside space-y-4 ml-2">
            <li>
              <strong>Slim the prompt.</strong> The training-plan prompt
              had been sending the full diagnosis JSON including
              display-only fields the LLM was reasoning about but
              didn&apos;t need. Stripped down to the decision-relevant
              fields: input went from ~10K tokens to ~4K. Runtime dropped
              to 50-55 seconds. Bonus 20% cost reduction on every call.
              This bought back the margin against the 60-second ceiling.
            </li>
            <li>
              <strong>Frontend abort + polling fallback.</strong> The
              client now sets an AbortController at 58 seconds. If the
              POST hasn&apos;t returned, it cancels and starts polling a
              lightweight read endpoint that just checks: &quot;is the
              cached plan ready yet?&quot;. The backend always writes the
              result, regardless of whether the client is still listening.
              From the user&apos;s view, the plan appears.
            </li>
          </ol>
          <p>
            The architectural lesson: <strong>treat long-running synchronous
            HTTP calls as best-effort, with a polling fallback as the
            authoritative path</strong>. The 504 stopped being a failure
            mode and became an expected branch — fall through to polling,
            wait a few seconds, return the result.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Audit Table Saved Me Twice
          </h2>
          <p>
            Two distinct incidents — Day 7&apos;s data deletion and Day
            8&apos;s phantom timeout — were both solvable because of one
            architectural decision: persist every LLM call&apos;s full
            input/output to a dedicated table.
          </p>
          <p>
            Day 7: audit log made data recovery possible.
            <br />
            Day 8: audit log made the root cause provable in three
            queries.
          </p>
          <p>
            In both cases, the cost of <em>not</em> having the log would
            have been catastrophic. The cost of having it: a few cents a
            day in storage and a column that no one queries until they
            desperately need to. New SOP entry calcified out of these two
            incidents: <strong>for any product that ships an LLM call,
            persist every call&apos;s input and output to an audit table
            from day one</strong>. Day one. Not after the first
            incident. The first incident is exactly when you need the log
            you didn&apos;t write yet.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            A New Checklist Item
          </h2>
          <p>
            Going forward, every new HTTP API that involves an LLM gets
            five questions before it ships:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>What&apos;s the platform&apos;s gateway timeout? (Not
            the app&apos;s — the platform&apos;s.)</li>
            <li>What&apos;s the realistic p95 latency of this LLM
            call?</li>
            <li>If (2) approaches (1), what&apos;s the fallback path?</li>
            <li>Is the LLM call&apos;s input + output written to the
            audit table?</li>
            <li>Does the frontend handle the &quot;backend succeeded but
            gateway timed out&quot; case gracefully?</li>
          </ol>
          <p>
            If any answer is &quot;I don&apos;t know,&quot; don&apos;t
            ship. Find out first. Five minutes of question-answering
            beats a week of phantom-timeout debugging.
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
                Bump app timeout to 120s. Add a retry. Open a support
                ticket with the LLM provider. Customers paying for plan
                generation see 504, never refresh, assume the product is
                broken. Churn quietly.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                Audit log diagnoses the problem in three queries. The
                platform gateway is the constraint, not the LLM. Prompt
                slim + frontend polling fallback ships same day. The user
                sees the plan appear, even when the gateway killed the
                connection. Cost-per-call drops 20% as a bonus.
              </p>
                          </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            Modern deploy platforms have constraints that are invisible
            until they bite you. Gateway timeouts. Body-size limits.
            Response streaming caps. Cold-start latencies on serverless
            functions. None of these show up in your app config. They
            live somewhere in the platform&apos;s docs that you read once
            during setup, three years ago, and never thought about again.
          </p>
          <p>
            The audit table is the universal solvent for this class of
            problem. When two sources of truth disagree, the audit table
            is the third source — independent of both the frontend and
            the application logic, recording what <em>actually</em>{" "}
            happened on the call level. Two incidents already paid back
            its cost. There will be more.
          </p>
          <p>
            Build for the gateway you have, not the gateway you wish for.
            And log every model call. The audit table will save you
            twice.
          </p>

          <p className="mt-8 text-muted-foreground">
            Next: Day 9 — three months earlier, a collaborator pasted an
            .env file into an AI chat to debug a deploy. Three months
            later, a grep over the project&apos;s knowledge vault found
            the keys still sitting there. Worse: the vault syncs to the
            cloud, and the cloud indexes into AI search.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the LLM-API checklist?
            </p>
            <p className="text-sm text-muted-foreground">
              Templates, SOPs, and infrastructure rubrics — from $39.
            </p>
          </div>
          <LinkButton href="/pricing">See Pricing</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
