import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "Day 1: Building a Figure Skating AI — Why I Started",
  description:
    "My kids train figure skating 5 days a week. Coaches cost $120/hour. I built an AI that diagnoses jumps in 60 seconds — here's the story.",
  openGraph: {
    title: "Day 1: Building a Figure Skating AI",
    description:
      "Why a software engineer built an AI figure skating coach. The real story behind JumpOnion.",
  },
};

export default function Day1Page() {
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
              2026-04-08
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 6 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              JumpOnion
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Engineering
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day 1: Building a Figure Skating AI — Why I Started
          </h1>
        </div>
      </AnimateIn>

      {/* Article body */}
      <AnimateIn delay={100}>
        <article className="prose-custom space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            My two kids train figure skating five days a
            week. One is working on his triple jumps. One is still on
            doubles but progressing everyday. They love it. I love watching them.
          </p>
          <p>
            A private coaching session costs around $120 per hour. That&apos;s
            for one child. The coach watches a jump, gives verbal feedback,
            the skater tries again. Maybe the coach films it on their phone.
            Maybe they don&apos;t. Either way, by the time the skater gets
            home, the nuance of what went wrong is already fading.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The Problem Nobody Talks About
          </h2>
          <p>
            Parents sitting rinkside can see that a jump went wrong. What they
            can&apos;t see is <em>why</em>. Was the takeoff angle too steep?
            Was there pre-rotation on the ice? Did the skater open up too
            early in the air? These are biomechanical questions that require
            trained eyes and professional knowledge.
          </p>
          <p>
            I started keeping notes. After years of rinkside
            observation, I had a notebook full of questions and no systematic
            answers. I could tell that my kids&apos; jumps were inconsistent,
            and I could tell them whether the issue was takeoff mechanics,
            air position, or landing technique, but I couldn&apos;t tell them
            clearly how to fix it in system. This knowledge relies on
            professional coaches a lot.
          </p>
          <p>
            That&apos;s when the engineer in me took over.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            Day 1: What If AI Could Watch the Jump?
          </h2>
          <p>
            The idea was simple: upload a video of a jump, get back a
            biomechanical diagnosis. Not vague encouragement — specific,
            measurable analysis. Pre-rotation angle. Air time. Blade angle at
            landing. Rotation completion percentage.
          </p>
          <p>
            I spent Day 1 doing what most developers skip: researching whether
            this had already been done. My SOP (Standard Operating Procedure)
            has a rule for this — <strong>search before you build</strong>.
            Before writing a single line of code, I spent 4-6 hours looking at
            existing solutions.
          </p>
          <p>
            What I found: academic papers with impressive results on
            controlled lab footage. A few apps that promised &quot;AI skating
            analysis&quot; but actually just let you draw lines on a paused
            video manually. Nothing that could take a shaky rinkside phone
            video and automatically extract biomechanical data.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The First Technical Decision
          </h2>
          <p>
            The core architecture question was: where does the AI analysis
            happen? Two options presented themselves immediately.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <div className="rounded-lg border-2 border-[#383838] bg-[#F6FFF6] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Option A: Client-side
              </span>
              <p className="mt-2 text-sm">
                Run pose detection in the browser with TensorFlow.js. Zero
                server cost. But: model size limits, slow on mobile, and no
                GPU acceleration for most users.
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#383838] bg-[#FFDE00] p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Option B: Server-side (Chosen)
              </span>
              <p className="mt-2 text-sm">
                Upload video to server, run analysis on GPU. Higher cost per
                analysis but: can use state-of-the-art models, consistent
                results, and the heavy computation happens once per video.
              </p>
            </div>
          </div>

          <p>
            I chose server-side. The reasoning: figure skating parents are not
            power users. They want to upload a video and get results. They
            don&apos;t want to wait 3 minutes while their phone&apos;s
            browser struggles with a 200MB model. The UX had to be &quot;upload
            and wait 60 seconds,&quot; not &quot;wait 3 minutes while your
            phone overheats.&quot;
          </p>
          <p>
            This was also my first encounter with a principle that would
            become central to the entire project: <strong>the user
            doesn&apos;t care about your architecture</strong>. They care
            about the result. Server-side costs me money per analysis — but it
            costs the user nothing except 60 seconds of patience.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What My SOP Caught on Day 1
          </h2>
          <p>
            Here&apos;s the thing most &quot;Day 1&quot; stories skip: the
            mistakes. On Day 1, I almost made a classic one.
          </p>
          <p>
            After deciding on server-side analysis, I immediately started
            scaffolding the video upload pipeline, the job queue, the result
            storage, the webhook notifications — the full production
            architecture. For a product that didn&apos;t have a single user
            yet. That didn&apos;t even have a working prototype.
          </p>
          <p>
            My AI partner flagged it. The SOP has a rule called{" "}
            <strong>Minimal Fix First</strong> — always propose the smallest
            viable approach before expanding. The AI asked: &quot;Can we
            validate the core hypothesis with a single script that takes a
            video file and prints analysis to the terminal?&quot;
          </p>

          <div className="callout-highlight text-sm my-6">
            Without the SOP: I would have spent a week building infrastructure
            for a product whose core algorithm hadn&apos;t been proven yet. If
            the pose detection turned out to be unusable on rinkside footage,
            I&apos;d have a beautiful pipeline with nothing to put through it.
          </div>

          <p>
            So Day 1 ended with a Python script. Not a web app. Not a
            pipeline. A script that took a video file, ran pose detection
            frame by frame, and printed joint coordinates to the terminal. It
            was ugly. It was slow. And it proved that the idea could work —
            you <em>could</em> extract meaningful biomechanical data from
            phone-recorded figure skating videos.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What I Learned
          </h2>
          <p>
            Day 1 taught me three things that stayed true across 1,000+ tests
            and six months of development:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>
              <strong>Search before you build.</strong> Two hours of research
              saved me from rebuilding what academics had already solved — and
              showed me where the real gap was (real-world video, not lab
              conditions).
            </li>
            <li>
              <strong>Start with the smallest thing that proves the hypothesis.</strong>{" "}
              A terminal script, not a web app. If the core algorithm
              doesn&apos;t work, nothing else matters.
            </li>
            <li>
              <strong>Your AI partner is only as disciplined as your system.</strong>{" "}
              Without the Minimal Fix First rule, my AI would have happily
              helped me build a week&apos;s worth of infrastructure I
              didn&apos;t need yet. The SOP is what turned &quot;helpful
              assistant&quot; into &quot;disciplined partner.&quot;
            </li>
          </ol>

          <p className="mt-8">
            Tomorrow: the first attempt at detecting a jump in a video. Spoiler
            — it measured 6.47 seconds of air time on a jump that lasted 0.7
            seconds. The system had to rescue itself.
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
