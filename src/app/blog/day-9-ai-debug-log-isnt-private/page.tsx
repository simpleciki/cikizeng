import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 9: Your AI Debug Log Isn't Private",
  description:
    "A grep over the knowledge vault hit a three-month-old AI session archive containing a full .env dump. The keys weren't just sitting in the file. The vault syncs to the cloud. The cloud indexes into AI search. A private debug log had become a three-layer attack surface, and redaction was already three months late.",
  openGraph: {
    title: "Day 9: Your AI Debug Log Isn't Private",
    description:
      "Your AI debug log isn't private. It syncs to your drive, indexes into your AI search, and lives there forever. The cure isn't memory. It's hooks.",
  },
};

export default function Day9Page() {
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
              2026-05-21
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 9 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              IvyBloom
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Security
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Governance
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 9: Your AI Debug Log Isn&apos;t Private
          </h1>
        </div>
      </AnimateIn>

      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            The incident that gave this post its title started with a
            routine command. I was exploring whether to integrate a
            different knowledge-graph tool into my Obsidian vault, and
            ran a grep across the whole vault to see how often certain
            strings showed up.
          </p>
          <p>
            One of the regexes happened to match strings that looked like
            API keys. <code>sk_live_</code>, <code>sk-proj-</code>,{" "}
            <code>postgres://</code> with embedded passwords, JWT tokens
            starting with <code>eyJ</code>. The grep was meant to be
            informational. Instead it returned hits.
          </p>
          <p>
            The hits were in a three-month-old session archive from
            IvyBloom — a transcript of an AI debug session that a
            collaborator had run during a deploy issue. The fastest way
            to give the AI context had been to paste the entire{" "}
            <code>.env</code> file into the chat. The AI helped fix the
            deploy. The transcript was archived. The transcript still
            had the .env file in it. Three months later.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Three-Layer Spread
          </h2>
          <p>
            The keys weren&apos;t just sitting in a transcript file. The
            transcript file lives in an Obsidian vault. The Obsidian vault
            is on Google Drive with version history. The Google Drive
            account is connected to NotebookLM, which indexes everything
            in the drive for AI search.
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              <strong>Local layer.</strong> The keys were in a file on
              disk. Routine grep would find them.
            </li>
            <li>
              <strong>Sync layer.</strong> Google Drive&apos;s version
              history kept every revision of every file. Even if I&apos;d
              deleted the .env paste the next day, the prior version
              would still be retrievable.
            </li>
            <li>
              <strong>Index layer.</strong> NotebookLM had crawled the
              drive and built a semantic search index. A natural-language
              query like &quot;what was the production database
              password&quot; could theoretically retrieve them.
            </li>
          </ol>
          <p>
            None of these layers individually leaked the keys to the
            public internet. Together, they meant the keys were
            cloud-resident, retrievable in three different ways, and any
            access to my Google account would surface them.
          </p>
          <div className="callout-highlight text-sm my-6">
            A private debug log is a category that doesn&apos;t exist for
            anything that hits a sync provider. The moment your AI
            transcript syncs, you&apos;ve published it to a private
            audience of one — and you can&apos;t un-publish from version
            history.
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The First Pass Wasn&apos;t Enough
          </h2>
          <p>
            The immediate response was the obvious one: rotate the keys
            that were exposed, redact the file. I rotated the OpenAI key,
            redacted the transcript, committed the redaction, moved on. A
            morning&apos;s work.
          </p>
          <p>
            The next day, a second grep — with a slightly different
            regex — caught a Postgres connection URL the first pass had
            missed. Postgres URLs embed the password as part of the
            <code>postgres://user:pass@host/db</code> format. My first
            regex had matched on <code>sk_</code> and JWT prefixes, not
            on Postgres syntax. A whole credential plane had survived the
            first cleanup.
          </p>
          <p>
            That was the bigger lesson. <em>Credentials are independent
            planes.</em> Rotating the OpenAI key doesn&apos;t rotate the
            Supabase service role key. The Supabase rotation doesn&apos;t
            touch the Postgres direct password. The Postgres rotation
            doesn&apos;t affect Stripe. Each credential plane has its own
            rotation path, its own blast radius, and its own pattern. A
            cleanup that only knows one pattern leaves the others sitting
            there.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Pattern Source of Truth
          </h2>
          <p>
            Out of the second pass came a small file that&apos;s now
            load-bearing for the whole defense: a single source of truth
            listing every credential pattern I need to watch for. JWT
            (<code>eyJ...</code>), OpenAI (<code>sk-proj-...</code>),
            Stripe live keys (<code>sk_live_...</code>), AWS (<code>AKIA...</code>),
            GitHub tokens (<code>ghp_...</code>), PEM private key blocks,
            Postgres URLs with embedded passwords, generic 32+ character
            hex secrets.
          </p>
          <p>
            Every defense layer reads from that file. Update the patterns
            once; every scanner picks up the change. Add a new vendor;
            add its pattern to the list and every defense knows about it
            on next run.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Four Enforcement Layers in 24 Hours
          </h2>
          <p>
            Because Day 4 had already taught me that memory is a wish, I
            didn&apos;t try to solve this with &quot;remember to redact.&quot;
            I built four enforcement layers within 24 hours, each at a
            different point in the lifecycle:
          </p>
          <ol className="list-decimal list-inside space-y-4 ml-2">
            <li>
              <strong>PostToolUse hook.</strong> Every time the AI writes
              a session archive (or any file containing a transcript), a
              hook scans the new content against the credential patterns.
              Hits get loud — a clear warning, the file path, and the
              offending lines. Mechanical, not best-effort.
            </li>
            <li>
              <strong>SessionStart monthly vault sweep.</strong> On the
              first session of each month, a script walks the entire
              Obsidian vault and re-scans every file against the
              patterns. Catches anything that landed before the hook was
              added, or anything the hook somehow missed.
            </li>
            <li>
              <strong>Pre-upload gate to NotebookLM.</strong> Any vault
              bundle bound for upload to a cloud AI tool runs through the
              pattern scan first. If the scan finds anything, the upload
              is blocked. The bundle stays in a staging directory until
              it&apos;s clean.
            </li>
            <li>
              <strong>Security Boundary in every project&apos;s
              AGENTS.md.</strong> A short section at the top of every
              project&apos;s agent constitution: do not paste real
              credentials into AI conversations, use placeholders, here&apos;s
              what the placeholder format looks like, here&apos;s why
              this matters.
            </li>
          </ol>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Hook Caught a Real One
          </h2>
          <p>
            The PostToolUse hook&apos;s first scan over historical archives
            — separate from the monthly vault sweep — caught a Postgres
            URL that the human-driven first-pass cleanup had missed. Not
            in the same file. A different transcript from a different
            month, also containing a leaked credential, also synced
            to cloud.
          </p>
          <p>
            That was the moment the case study went from &quot;rule
            candidate&quot; to &quot;PROVEN ACTIVE&quot; in my SOP. A
            human had cleaned what a human could see. The hook found what
            the human had missed, the same week the hook was written.
            Layer 4 enforcement, exactly as predicted by Day 4&apos;s
            lesson.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Who This Bites
          </h2>
          <p>
            This isn&apos;t a JumpOnion-specific problem or an
            IvyBloom-specific problem. Anyone who:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Uses an AI chat to debug deploy issues (and pastes config
              for context),
            </li>
            <li>
              Saves chat transcripts to a knowledge vault (for future
              reference),
            </li>
            <li>
              Syncs that vault to a cloud drive (for backup or sharing),
            </li>
            <li>
              Has connected any AI-search tool to that cloud drive
            </li>
          </ul>
          <p>
            …is currently running the same three-layer pipeline I was. If
            any debug session ever included real credentials, those
            credentials are now in the same cloud-indexed chain. They
            won&apos;t leak publicly. They might be retrievable by
            anyone who compromises any of the cloud accounts involved.
            That&apos;s a meaningfully different attack surface from
            &quot;the keys live in a .env file on my laptop.&quot;
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
                Rotate the visible key, redact the file you saw, move on.
                Miss the Postgres URL in a different transcript because
                the regex was tuned for OpenAI patterns. Miss the JWT in
                a third transcript because nobody scanned for JWTs.
                Months later, an account compromise traces back to a
                credential the redaction pass never touched.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                With SOP
              </span>
              <p className="mt-2 text-sm">
                Single pattern source of truth. PostToolUse hook every
                write. Monthly vault sweep. Pre-upload gate. Every
                credential plane covered. Hook catches the missed Postgres
                URL the same week it&apos;s installed. Future leaks
                become impossible to merge in.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Real Lesson
          </h2>
          <p>
            Three pieces stack to the same conclusion as Day 4&apos;s
            memory lesson: <strong>the cure is hooks, not memory.</strong>{" "}
            A rule that says &quot;don&apos;t paste credentials into AI
            chats&quot; lives in human attention. Human attention fails
            under deadline pressure, exhaustion, or just a collaborator
            doing what felt like the fastest path. A hook that scans every
            write doesn&apos;t care about deadlines.
          </p>
          <p>
            Your AI debug log isn&apos;t private. It syncs to your drive.
            It indexes into your AI search. It lives there forever. If
            you&apos;re going to use AI to help with anything that touches
            credentials, you have two choices: paste only placeholders, or
            build hooks that catch the moments you forget. Or both.
            Probably both.
          </p>
          <p>
            That&apos;s the end of this run. Nine days, six lessons
            written down — all of them paid for in real production
            incidents over the prior weeks. None of them survived as
            wishes. The ones that survived were the ones that descended
            into hooks.
          </p>

          <p className="mt-8 text-muted-foreground">
            More to come — the projects keep producing material faster
            than the blog can keep up. If you want the methodology
            behind all of this packaged up, the{" "}
            <Link
              href="/pricing"
              className="underline underline-offset-2 hover:text-foreground"
            >
              pricing page
            </Link>{" "}
            lists what&apos;s available.
          </p>
        </article>
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Want the credential-scanning hooks?
            </p>
            <p className="text-sm text-muted-foreground">
              Framework tier includes hook source code — $149.
            </p>
          </div>
          <LinkButton href="/pricing">See Pricing</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
