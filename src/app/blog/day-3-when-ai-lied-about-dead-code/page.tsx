import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 3: When AI Lied About Dead Code (30 Hours of Silent Failures)",
  description:
    "My AI partner deleted production code with absolute confidence and labeled it 'dead code, anonymous uploads.' 987 tests passed. The deploy went green. Thirty hours later, a paying customer noticed.",
  openGraph: {
    title: "Day 3: When AI Lied About Dead Code",
    description:
      "987 tests passed. The deploy went green. The upload pipeline was 404 for 30 hours.",
  },
};

export default function Day3Page() {
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
              2026-04-14
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 8 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Engineering
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Post-Mortem
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 3: When AI Lied About Dead Code (30 Hours of Silent Failures)
          </h1>
        </div>
      </AnimateIn>

      {/* Article body */}
      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            Day 2 ended with the project narrowly rescued from a wrong-algorithm
            spiral. By this point — weeks later — JumpOnion had grown up. 987
            unit tests. A real production stack. Paying customers. The kind of
            project where things should be hard to break.
          </p>
          <p>
            They weren&apos;t.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Innocent Request
          </h2>
          <p>
            I asked my AI partner to do a security audit. Standard ask: scan
            the backend, flag anything risky, propose fixes. Four parallel
            agents, structured pass over 22 files, output a tidy commit.
          </p>
          <p>
            The commit message was a model of professionalism:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`security: full-stack audit v2

CRITICAL fixes (immediate revenue/cost impact):
- Tighten CSP headers (nonce-based)
- Verify webhook signatures with constant-time comparison
- Remove S3 companion route mount (dead code, anonymous uploads)`}
          </pre>
          <p>
            I read it. 987 tests passed. The deploy went green on Railway.
            Vercel rebuilt the frontend. Everything looked fine.
          </p>
          <p>
            <strong>It wasn&apos;t fine.</strong> The third bullet — the one
            labeled &quot;dead code, anonymous uploads&quot; — had just removed
            the route mount that every video upload flowed through.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            How a Confident Label Lies
          </h2>
          <p>
            The AI&apos;s reasoning, traced back from the diff, looked
            plausible:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              The route&apos;s code had a comment mentioning
              &quot;anonymous tasks&quot; (a Phase 1 legacy concept).
            </li>
            <li>
              The current product had real authentication. So the
              &quot;anonymous&quot; path was &quot;obviously&quot; deprecated.
            </li>
            <li>
              Therefore the entire router was &quot;dead code.&quot;
            </li>
            <li>
              Therefore deleting the mount was a &quot;cleanup.&quot;
            </li>
          </ol>
          <p>
            Every step was AI-confident. Every step was wrong. A single command
            would have proven it:
          </p>
          <pre className="bg-[#F8F4EE] border-2 border-[#383838] rounded-md p-4 text-xs overflow-x-auto">
{`grep -r "s3/multipart" frontend/`}
          </pre>
          <p>
            The frontend uploader (Uppy) was actively pointing at that exact
            route as its <code>companionUrl</code>. Removing the mount turned
            every upload into an instant 404.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Why 987 Tests Didn&apos;t Save Me
          </h2>
          <p>
            This is the part I want every developer to internalize. We had:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>987 unit tests. They <strong>all passed.</strong></li>
            <li>A staging deploy step. Returned 200 on the main health check.</li>
            <li>An integration suite. Mocked the S3 client.</li>
            <li>A frontend build. Compiled cleanly.</li>
          </ul>
          <p>
            None of them noticed that <code>POST /s3/multipart</code> now
            returned 404. The reason isn&apos;t that we wrote bad tests —
            it&apos;s that <strong>we never wrote a test that asserted the
            route existed at all.</strong>
          </p>
          <p>
            Mocked clients don&apos;t care if the server route exists. Health
            checks check <code>/health</code>, not every endpoint. Frontend
            builds compile JavaScript, not server routing.
          </p>
          <div className="callout-highlight text-sm my-6">
            The class of failure was &quot;route silently unmounted.&quot; You
            cannot defend against this class with one more unit test. You need
            a registry — a list of critical routes that <em>must</em> exist —
            and a test that validates the registry against the running server.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Slow-Motion Failure
          </h2>
          <p>
            For 30 hours, every paying customer who tried to upload a video
            got a silent failure. The frontend showed a generic error. The
            backend logs showed a 404 on <code>/s3/multipart</code>. No
            alert fired because nobody had built a monitor for &quot;a route
            that should exist suddenly returns 404.&quot;
          </p>
          <p>
            The sneakiest moment came hours after the original deletion. A
            follow-up audit pass added a security gate to that same router
            file — adding <code>require_paid_feature_access</code> as a
            decorator. The router was already unmounted. The AI had just put a
            lock on a dismantled door, and the diff still looked productive.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Question That Cracked It
          </h2>
          <p>
            A paying customer reported uploads weren&apos;t working. My AI
            partner&apos;s first hypothesis: a CSP header issue with the
            uploader&apos;s domain. Plausible-sounding. We deployed a CSP fix.
          </p>
          <p>
            Customer: still broken.
          </p>
          <p>
            I asked one question — six words — that broke the loop:
          </p>
          <p className="text-lg font-semibold border-l-4 border-[#383838] pl-4 py-2 my-4 bg-[#FFFEF7]">
            &quot;Did you actually deploy that?&quot;
          </p>
          <p>
            Within five minutes, my AI partner ran <code>curl /s3/health</code>
            against production. The response: 404. The main health check
            returned 200. The diagnosis became obvious in retrospect: the
            upload route had been unmounted in the security audit two days
            earlier.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Three-Layer Fix
          </h2>
          <p>
            Re-mounting the route took one line. The fix that mattered was
            ensuring this class of failure could never repeat:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li>
              <strong>Code layer:</strong> Re-mount the route, with an inline
              comment naming the bug it caused.
            </li>
            <li>
              <strong>Test layer:</strong> A new test file with a
              <code>CRITICAL_ROUTES</code> registry — 16 endpoints that must
              exist. Parametrized assertion: every route in the registry must
              not return 404. Adding or removing a route requires updating the
              registry, which makes the change reviewable.
            </li>
            <li>
              <strong>Runtime layer:</strong> A cron-driven smoke check that
              hits every route in the registry every 15 minutes against
              production. Alerts on the first 404. Worst-case detection time
              becomes 15 minutes, not 30 hours.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            AI-authored code review has a property humans rarely have: it&apos;s
            consistently confident. A human deleting a route might write
            &quot;not sure if this is still used, removing&quot; — leaving a
            visible signal of doubt. The AI wrote &quot;dead code, anonymous
            uploads&quot; with absolute fluency.
          </p>
          <p>
            That fluency is a trust signal in human review. Reviewers tend to
            give well-written labels the benefit of the doubt. The cost of
            challenging every line in a 22-file PR is high; the cost of
            trusting confident-sounding labels feels low. So the trust
            asymmetry quietly grows.
          </p>
          <p>
            That asymmetry is a hidden attack surface. Not adversarial — just
            statistical. Every confident AI label that survives review without
            evidence-checking is a small bet that the AI got it right. Most
            of those bets pay off. Some don&apos;t. When they don&apos;t, the
            cost is asymmetric — a 30-hour outage, a paying customer&apos;s
            silent failure, a category of bug that 987 tests never see.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="rounded-lg border-2 border-[#383838] bg-[#FFF5F5] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Without SOP
              </span>
              <p className="mt-2 text-sm">
                Trust the &quot;dead code&quot; label. Ship the audit. Spend
                hours debugging CSP, encryption, frontend caching — anything
                except the route that&apos;s 404. Discover the truth when a
                second customer reports the failure, days later.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                After the first false hypothesis, escalate to evidence. One
                <code> curl</code> finds the real root cause in five minutes.
                Three-layer defense ships the same day. New SOP rule added:
                AI deletion commits with confident labels must include
                caller-audit evidence in the body.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What I Carry Forward
          </h2>
          <p>
            Three rules calcified out of this incident:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              <strong>AI confidence is not evidence.</strong> The more
              polished the deletion label, the more it deserves a
              caller-audit grep. Self-confident AI prose should be treated
              like a self-confident junior engineer&apos;s prose: trust, but
              demand evidence.
            </li>
            <li>
              <strong>Test what would silently break, not what would
              loudly break.</strong> 987 unit tests caught nothing because
              they all assumed the route existed. The dangerous failures
              are the ones where every existing test still passes.
            </li>
            <li>
              <strong>The founder&apos;s &quot;did you actually&hellip;&quot;
              question is the highest-leverage debugging tool.</strong> It
              costs six words to ask, and it&apos;s a forced reset against
              AI confidence. Normalize using it. Normalize answering it
              with a curl, not a confidence statement.
            </li>
          </ol>

          <p className="mt-8">
            The 16-route registry is still in production. Every 15 minutes,
            a cron job confirms that every critical endpoint still exists. I
            sleep better.
          </p>

          <p className="mt-4 text-muted-foreground">
            Next: Day 4 — the schema migration that broke every paying
            user&apos;s drill access for two weeks. Tests passed. Mocks
            agreed. Production lied.
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
