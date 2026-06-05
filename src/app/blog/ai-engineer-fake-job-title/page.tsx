import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { AnimateIn } from "@/components/ui/animate-in";
import { HeroVisual, ThesisMap } from "./_components/hero-and-map";
import {
  HiringMismatchDiagram,
  JobTitleLayersDiagram,
} from "./_components/job-diagrams";
import {
  OrgCapitalDiagram,
  ParadigmShiftDiagram,
  TaskCompositionDiagram,
} from "./_components/process-diagrams";

export const metadata: Metadata = {
  title: '"AI Engineer" Is a Fake Job Title',
  description:
    "Why companies keep paying more for AI hires that stall at month three — and where the role that actually works is already hiding.",
  openGraph: {
    title: '"AI Engineer" Is a Fake Job Title',
    description:
      "The job companies keep hiring for is evaporating. The one that actually makes AI work has no market label yet — and it's already inside your company.",
  },
};

export default function AiEngineerFakeJobTitlePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
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
              2026-06-05
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              &middot; 9 min read
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Enterprise AI
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              AI Hiring
            </span>
            <span className="label-tag text-[10px] px-2 py-0.5 rounded-md">
              Future of Work
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            &quot;AI Engineer&quot; Is a Fake Job Title
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Why companies keep paying more for AI hires that stall at month
            three — and where the role that actually works is already hiding.
          </p>
        </div>
        <HeroVisual />
      </AnimateIn>

      <article className="prose-custom mx-auto max-w-3xl space-y-6 text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          <p>
            There&apos;s a pattern playing out in company after company right
            now. A business decides it needs AI, so it spends big to hire an
            &quot;AI Engineer.&quot; Three months in, the project stalls.
            Leadership greenlights a new initiative, hires someone even more
            expensive — and stalls again.
          </p>
          <p>
            It&apos;s tempting to blame HR, or the engineer. Both are wrong. The
            logic of the hire was broken from the root — and almost everyone is
            using it.
          </p>
          <p>
            I&apos;ve spent the last few years on both sides of this gap.
            I&apos;ve rebuilt undocumented operational processes — cost control,
            settlement reconciliation — across departments for a multinational
            retail operation, and then wired AI into them. And I&apos;ve
            designed and shipped AI products of my own. That combination is
            exactly why the gap is so visible to me: the thing most companies
            are hiring for is not the thing that makes AI work.
          </p>

          <ThesisMap />

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The bottleneck moved — and most companies didn&apos;t notice
          </h2>
          <p>
            For the last two years, &quot;getting AI to work&quot; was treated
            as a technical problem. So, instinctively, every company went
            hunting for engineers who &quot;know AI.&quot; The highest-click
            résumé keywords became LangChain, RAG, vectorization, fine-tuning.
          </p>
          <p>
            But something is happening fast: the capability of the models
            themselves — and the maturity of the tooling around them — is
            collapsing the barrier to &quot;using AI&quot; at an exponential
            rate. The RAG system that took an engineer two months to write last
            year takes a week with an off-the-shelf API today. The
            prompt-tuning that needed a specialist last year is increasingly
            handled by the model inferring intent on its own. The technical
            scarcity is evaporating.
          </p>
          <p>
            When the scarcity of a core skill disappears, the bottleneck
            doesn&apos;t vanish — it moves. And the new bottleneck isn&apos;t
            &quot;can you build it.&quot; It&apos;s{" "}
            <em>
              where do you use it, how do you use it, and how does it connect to
              the actual workflow.
            </em>
          </p>
          <p>
            Most companies haven&apos;t registered the shift. They&apos;re using
            2024 thinking to hire 2026 people.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            &quot;AI Engineer&quot; hides three completely different jobs
          </h2>
          <p>
            The phrase &quot;AI Engineer&quot; quietly covers three people with
            completely different skill profiles.
          </p>

          <JobTitleLayersDiagram />

          <p>
            <strong>1. The floor-raiser.</strong>{" "}Makes it possible for
            non-coders to demo something, and for junior engineers to ship
            senior-looking code. Their leverage comes from the falling tool
            barrier itself. Most of the market&apos;s &quot;prompt
            engineers&quot; and &quot;RAG engineers&quot; sit here. They demo
            blindingly fast — and stall the moment they hit production data,
            permissions, approvals, and cross-department reality.
          </p>
          <p>
            <strong>2. The ceiling-keeper.</strong>{" "}A genuinely senior software
            engineer using AI tools to do harder engineering — architecture,
            code review, performance tuning, multi-agent orchestration. Their
            output is still software, held to the same exacting standard as
            traditional engineering. Rare and valuable — but they don&apos;t
            solve the enterprise-adoption problem, because their job is to make
            the <em>engineering</em> better, not to fix the <em>process.</em>
          </p>
          <p>
            <strong>3. The process-rebuilder.</strong>{" "}Digs out the implicit
            process that&apos;s run for fifteen years without anyone writing it
            down, coordinates across departments to change it, then uses AI to
            lock the changed process in place. This role has no market label
            yet.
          </p>
          <p>
            These three are trained differently, produce different things, and
            should be hired against completely different criteria. But in the
            job description, they all collapse into one phrase:{" "}
            <em>AI Engineer.</em>
          </p>
          <p>Here&apos;s where it breaks:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Companies write the JD wanting <strong>#2</strong> (someone who
              can do the hard technical work).
            </li>
            <li>
              HR&apos;s inbox fills with <strong>#1</strong> (people who know a
              few tools).
            </li>
            <li>
              The only person who keeps the project alive is <strong>#3</strong>{" "}
              (someone who understands the process).
            </li>
          </ul>

          <HiringMismatchDiagram />

          <p>
            The mismatch happens at three separate points. Project failure is
            nearly guaranteed.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            What the job actually involves — and how little of it is code
          </h2>
          <p>
            When you map out what this new role actually does day-to-day, it
            comes to roughly eight things:
          </p>

          <TaskCompositionDiagram />

          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Design the new, AI-inclusive workflow.</li>
            <li>Deploy the system that lets the AI run.</li>
            <li>
              Continuously maintain the AI&apos;s context (every time a business
              rule changes, this changes with it).
            </li>
            <li>Connect internal systems to the AI — CRM, ERP, HR.</li>
            <li>
              Build evaluations to check whether the AI is doing the job
              correctly.
            </li>
            <li>Decide which steps must keep a human in the loop.</li>
            <li>Manage the migration when the AI tooling upgrades.</li>
            <li>Partner with business-process change management.</li>
          </ol>
          <p>
            Count them. The items that require writing code are #2 and #4 — and
            maybe half of #5. The remaining five-plus are process design,
            process change, cross-department coordination, human-machine
            workflow design, and change management.
          </p>
          <p>That is a consultant&apos;s job wearing an engineer&apos;s title.</p>
          <p>
            My read: the essence of this role is &quot;the engineer who leans
            consultant,&quot; or &quot;the consultant who leans engineer.&quot;
            Neither pure form can do it. And that&apos;s exactly why the
            big-company AI engineer a client poaches at great expense demos
            beautifully and then stalls at deployment. It isn&apos;t that they
            lack ability — it&apos;s that the back six items were never in their
            training.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The part you can&apos;t hire: organizational capital
          </h2>
          <p>
            Suppose you actually find someone with all three — engineering,
            business-process fluency, and cross-department coordination. On
            their first day, they still can&apos;t do anything.
          </p>
          <p>
            Because a large part of what this role needs isn&apos;t{" "}
            <em>knowledge.</em> It&apos;s <em>organizational capital.</em>
          </p>

          <OrgCapitalDiagram />

          <p>
            Organizational capital is knowing which veteran actually understands
            the procurement process; knowing which leaders you clear before you
            touch a given workflow; knowing which business unit gets along with
            IT and which two haven&apos;t spoken in years; knowing whether a
            process is written into policy or is a verbal handshake from a decade
            ago.
          </p>
          <p>
            None of this is on the wiki. It lives in the company&apos;s
            relationship network, in the informal conversations that happen
            every day. My rough estimate, from doing this work: in a mid-size
            company, at most 20% of the process knowledge that actually makes AI
            work is documented. The other 80% is in employees&apos; heads.
          </p>
          <p>
            And organizational capital is firm-specific. Five years of it at
            Company A resets to zero at Company B. This is the opposite of
            software-engineering skill — a Java engineer who switches jobs keeps
            95% of their ability.
          </p>
          <p>
            My estimate is that something like 70% of the capability mix
            enterprise AI adoption requires <em>is</em>{" "}organizational capital.
            Which means &quot;hire externally&quot; fails as a strategy at the
            level of basic logic.
          </p>
          <p>
            The change-management piece is even more brutal. Getting a
            five-year-old process changed means asking a business unit to absorb
            a short-term efficiency hit and a KPI risk. Driving that requires{" "}
            <em>internal credit</em> — years in the building, favors given and
            owed, relationships with the key players. You cannot hire that.
          </p>
          <p>
            This is a structurally underrated fact:{" "}
            <strong>
              roughly 70% of an enterprise&apos;s AI-adoption capability is
              non-portable and non-purchasable.
            </strong>
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The companies getting it right retrain instead of hire
          </h2>
          <p>
            The companies I&apos;ve seen actually make AI work aren&apos;t
            hiring new people. They&apos;re retraining existing ones.
          </p>
          <p>
            The clearest public example is Box. Its CEO, Aaron Levie, has been
            blunt that the AI wave is driving <em>hiring,</em>{" "}not cuts — and
            the role he&apos;s staffing has a name that isn&apos;t &quot;AI
            engineer&quot;: <strong>agent engineer.</strong> These are internal
            people who wire AI agents into the systems the company already runs
            (Box, Salesforce, Workday). A large part of staffing them is pulling
            in employees who already know those systems — not importing a team
            from outside.
          </p>
          <p>
            Another telling signal: <strong>Eli Lilly</strong> — one of the
            largest pharmaceutical companies in the world — is hiring a{" "}
            <em>Lab Automation Software Engineer</em>{" "}(Senior and Advisor
            levels, roughly $141K–$207K) at its San Diego biotech center. There
            isn&apos;t a single &quot;AI&quot; in the title. But read the JD —
            &quot;own the software integration layer between automation
            infrastructure and the digital tools that drive it, and shape how
            emerging AI capabilities get woven in&quot; — and it maps almost
            exactly onto the eight tasks above. AI is the tool woven in, not the
            adjective on the door.
          </p>
          <p>
            Why not call it an &quot;AI Engineer&quot;? Because the company
            knows it doesn&apos;t want &quot;an engineer who can use AI&quot; —
            it wants &quot;an engineer who can rebuild the lab&apos;s
            processes.&quot; AI is the tool in that role, not the adjective.
          </p>
          <p>
            The title a company chooses reveals how deeply it understands its
            own problem. A role called &quot;AI Engineer&quot; usually means the
            company hasn&apos;t figured out what problem it&apos;s solving — it
            grabbed a fashionable label and stuck it on. A role called &quot;Lab
            Automation Software Engineer&quot; means the company already knows
            what it&apos;s doing.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            That person is probably already inside your company
          </h2>
          <p>
            If the core of this role is organizational capital + process
            understanding + hands-on ability, then the supply can only come from
            inside.
          </p>
          <p>The profile looks roughly like this:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Has been at the company 3–5 years, and has run at least one
              cross-department project (proof they can get resources and move
              people).
            </li>
            <li>
              Knows how a specific business process actually runs — where it
              jams, where it&apos;s redundant, which veteran is the key node.
            </li>
            <li>
              Is hands-on. Not necessarily a coder — building complex Excel
              models, writing some SQL, assembling something in Airtable all
              count.
            </li>
            <li>
              Has been tinkering with AI on their own for the last six months —
              using it unprompted, paying for ChatGPT or Claude out of pocket,
              building little tools.
            </li>
            <li>
              Has enough internal credit that veterans will explain things to
              them and a business lead will lend them two hours.
            </li>
          </ul>
          <p>
            Every mid-size company has at least 3–5 of these people. When I do
            this exercise, the list almost never exceeds five. But they&apos;re
            mostly stuck doing execution-layer work, not core work. Their
            potential is bottled up.
          </p>
          <p>
            What they need isn&apos;t training on how to tune a large model —
            the models iterate every three months, so any tech stack you teach
            is obsolete by the time they&apos;ve learned it. What they need to
            learn is{" "}
            <em>
              how to decompose a process into AI-executable steps, how to design
              evaluations, and how to decide where a human stays in the loop.
            </em>{" "}
            That&apos;s methodology, not tech stack. It doesn&apos;t expire when
            the model upgrades.
          </p>
          <p>
            What you give them is time, access, and permission to stop doing
            their old job.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The real shift: from &quot;configure tools&quot; to &quot;redesign
            processes&quot;
          </h2>
          <p>
            Connect the layers and the real meaning of this moment emerges. It
            isn&apos;t that &quot;AI Engineer&quot; is the wrong role. It&apos;s
            that the entire paradigm of enterprise AI adoption is shifting —
            from <em>configuring tools</em> to <em>redesigning processes.</em>
          </p>

          <ParadigmShiftDiagram />

          <p>
            The &quot;configure tools&quot; paradigm: give every employee an AI
            assistant, shave a little off everyone&apos;s workload. One person +
            one AI = a productivity bump. But the process itself doesn&apos;t
            move — five approval steps are still five, three days is still three.
          </p>
          <p>
            The &quot;redesign processes&quot; paradigm: go back to the start of
            the process and re-examine why it looks the way it does — which
            steps are essential, which are historical residue, which can run in
            parallel, which can be compressed, which AI can replace, and which
            must keep a human.
          </p>
          <p>
            The output of these two differs by more than 10x. But redesigning
            processes is an order of magnitude harder than configuring tools.
          </p>
          <p>
            Most companies are still in the &quot;configure tools&quot;
            paradigm, hiring &quot;configure tools&quot; people — which is why
            the JDs say LangChain, RAG, vectorization. Those are tool-layer
            skills. The few companies that have realized they need to shift to
            &quot;redesign processes&quot; hire completely different people: the
            ones who can do this <em>inside</em> the organization, not the ones
            with the trendiest tech stack.
          </p>
          <p>
            What makes this shift genuinely hard is that it isn&apos;t a
            technical problem — it&apos;s an organizational one. Technical
            problems can be solved by buying. Organizational problems
            can&apos;t.
          </p>

          <h2 className="text-xl font-bold tracking-tight mt-10 mb-4">
            The bottom line
          </h2>
          <p>
            The talent market is a lagging indicator. Every &quot;AI
            Engineer&quot; with a name and a definition on the market today was
            defined by someone one or two years ago. By the time these people
            are plentiful, the tech stack that defined them is probably already
            obsolete.
          </p>
          <p>
            Worse: the market will <em>never</em>{" "}produce a standard profile for
            the &quot;enterprise-process-rebuilding AI engineer,&quot; because
            the role&apos;s core capability is welded to a specific company and a
            specific industry. Someone doing lab automation at a pharma company
            isn&apos;t necessarily useful at a bank. Someone redesigning supply
            chains in retail isn&apos;t necessarily useful at a law firm.
          </p>
          <p>
            The supply for this role can only come from inside. That&apos;s both
            good news and hard news. Good, because it&apos;s a capability your
            company can grow internally and no competitor can poach. Hard,
            because there&apos;s no ready-made talent market to copy from — you
            have to identify and develop these people yourself.
          </p>
          <p>
            So before your next meeting about &quot;how many AI Engineers should
            we hire,&quot; do one thing first: open your directory. Look at the
            handful of people who&apos;ve been there three-plus years,
            who&apos;ve been quietly tinkering with AI lately, who&apos;ve run a
            cross-department project. No more than five.
          </p>
          <p>That person is almost certainly already in there.</p>
          <p>
            The only question left is whether you&apos;ll give them the time,
            the resources, and a chance to stop doing their old job.
          </p>

          <p className="mt-10 text-xs text-muted-foreground italic">
            Sources: Box&apos;s hiring and &quot;agent engineer&quot; comments —
            Fortune and reporting on Aaron Levie, May 2026. Eli Lilly &quot;Lab
            Automation Software Engineer&quot; — careers.lilly.com (San Diego
            biotech center).
          </p>
      </article>

      <AnimateIn delay={200}>
        <div className="mt-16 pt-8 border-t-2 border-[#383838] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              I design and direct AI systems that rebuild how real businesses
              operate.
            </p>
            <p className="text-sm text-muted-foreground">
              See the case studies — each one designed, directed, and validated
              end-to-end.
            </p>
          </div>
          <LinkButton href="/work">See the work</LinkButton>
        </div>
      </AnimateIn>
    </div>
  );
}
