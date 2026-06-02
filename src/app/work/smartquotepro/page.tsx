import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "SmartQuote Pro — AI-augmented quoting & margin review",
  description:
    "A case study of an AI-augmented quoting & margin-review system I designed and operate for a facilities-maintenance business — controls by construction, role-scoped access, and AI that drafts but never decides.",
  openGraph: {
    title: "SmartQuote Pro — AI-augmented quoting & margin review",
    description:
      "An AI-augmented quoting & margin-review system I designed, directed the build of, and verified end-to-end. Walkthrough of the flow, the controls, and the judgment behind them.",
    url: "https://cikizeng.com/work/smartquotepro",
    images: ["/work/smartquotepro/01-landing.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartQuote Pro — a system I designed & operate",
    description:
      "Quoting + margin-review for facilities work orders: controls by construction, role-scoped access, AI drafts / human decides.",
    images: ["/work/smartquotepro/01-landing.png"],
  },
};

const BASE = "/work/smartquotepro";

// ── Section primitives (match cikizeng.com design language) ───────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-3">
      {children}
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background font-mono text-xs font-bold">
      {n}
    </span>
  );
}

function Shot({
  src,
  w,
  h,
  alt,
  priority,
}: {
  src: string;
  w: number;
  h: number;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border bg-white"
      style={{ borderColor: "rgba(45,45,45,0.14)" }}
    >
      <Image
        src={`${BASE}/${src}`}
        alt={alt}
        width={w}
        height={h}
        sizes="(max-width: 896px) 100vw, 896px"
        className="w-full h-auto block"
        priority={priority}
      />
    </div>
  );
}

// ── Walkthrough content (architect captions — defensible, synthetic, debranded)
type Shotspec = { src: string; w: number; h: number; alt: string };
type Step = { n: number; label: string; caption: React.ReactNode; shots: Shotspec[] };

const steps: Step[] = [
  {
    n: 1,
    label: "The system",
    caption: (
      <>
        End-to-end quoting and margin-review for facilities work orders. I designed the whole
        flow:{" "}
        <strong>intake &rarr; priced quote &rarr; risk-gated human review &rarr; audit trail.</strong>
      </>
    ),
    shots: [{ src: "01-landing.png", w: 2880, h: 1800, alt: "SmartQuote Pro landing screen" }],
  },
  {
    n: 2,
    label: "Role-scoped access",
    caption: (
      <>
        Three roles (staff / manager / admin), <strong>enforced server-side</strong>. A staff user
        can create quotes but cannot approve them — the navigation itself reflects the access model
        I designed.
      </>
    ),
    shots: [
      { src: "02-login.png", w: 2880, h: 1800, alt: "Login screen with role-based sign-in" },
      {
        src: "09-staff-nav-rbac.png",
        w: 2880,
        h: 114,
        alt: "Staff navigation bar showing restricted, role-scoped menu",
      },
    ],
  },
  {
    n: 3,
    label: "Structured intake",
    caption: (
      <>
        Every quote captures the variables that actually move price — trade, urgency window, risk
        band, location tax and region multiplier — so pricing is consistent and defensible,{" "}
        <strong>never ad-hoc</strong>.
      </>
    ),
    shots: [{ src: "04-quote-filled.png", w: 2880, h: 2614, alt: "Structured quote intake form, fully filled" }],
  },
  {
    n: 4,
    label: "Transparent pricing + controls by construction",
    caption: (
      <>
        A 5-part cost breakdown (no black box), and a Risk 4–5 job <strong>automatically</strong>{" "}
        trips a 🔴 manager-approval gate. The control is built into the pricing logic — not a rule
        someone has to remember to follow.
      </>
    ),
    shots: [
      {
        src: "05b-result-fullpage.png",
        w: 2880,
        h: 3078,
        alt: "Quote result page: cost breakdown with risk-gated approval traffic light",
      },
    ],
  },
  {
    n: 5,
    label: "Benchmark flywheel",
    caption: (
      <>
        Each quote is scored against the company&apos;s own closing history — P25 / P50 / P75 plus
        win probability. A quote below market gets flagged as competitive. The system{" "}
        <strong>learns from outcomes</strong>.
      </>
    ),
    shots: [{ src: "06-benchmark.png", w: 958, h: 2870, alt: "Benchmark panel comparing the quote against closing history" }],
  },
  {
    n: 6,
    label: "AI drafts, human decides",
    caption: (
      <>
        An LLM drafts the strategy memo and a live market comparison to speed the estimator up. It
        never auto-approves. I designed the boundary deliberately:{" "}
        <strong>AI assists, the human owns the decision.</strong>
      </>
    ),
    shots: [{ src: "07-ai-memo-market.png", w: 958, h: 4530, alt: "AI-drafted strategy memo and market comparison" }],
  },
  {
    n: 7,
    label: "Atomic submit + audit trail",
    caption: (
      <>
        Submit is <strong>transactional</strong> — quote and billing commit together. The full
        submission, AI memo, and market analysis all carry into the manager&apos;s review queue;
        nothing is lost between steps.
      </>
    ),
    shots: [
      { src: "08-submit.png", w: 958, h: 2348, alt: "Atomic submit confirmation" },
      { src: "10-approval-queue.png", w: 2880, h: 3794, alt: "Manager approval queue with full submission context" },
    ],
  },
  {
    n: 8,
    label: "Operator control plane",
    caption: (
      <>
        Admin governs orgs, IAM, pricing rules, the tax database, the AI configuration, credits, and
        system health — the operational surface I designed so the business runs{" "}
        <strong>without me babysitting it</strong>.
      </>
    ),
    shots: [{ src: "11-admin-dashboard.png", w: 2880, h: 1800, alt: "Admin control plane dashboard" }],
  },
];

const highlights = [
  {
    title: "Controls by construction",
    body: "The risk-approval gate lives inside the pricing logic, not on a checklist. A high-risk job can't slip past review because the system — not a person's memory — enforces it.",
  },
  {
    title: "Role-scoped access, server-side",
    body: "Staff / manager / admin permissions are enforced on the server, and the UI reflects them. The person who writes a quote is structurally separated from the person who approves its margin.",
  },
  {
    title: "AI drafts, the human decides",
    body: "The LLM accelerates the estimator with a strategy memo and market read, but it never auto-approves. I drew that boundary on purpose — speed without surrendering the decision.",
  },
  {
    title: "Learning from outcomes",
    body: "Every quote is benchmarked against the company's own closing history, so pricing gets sharper as more jobs close — a flywheel, not a static rule table.",
  },
];

export default function SmartQuoteProWorkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* ── Back link ─────────────────────────────────────────────────── */}
      <AnimateIn>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          &larr; All work
        </Link>
      </AnimateIn>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <AnimateIn>
        <div className="mb-10">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Case Study · SmartQuote Pro
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            An AI-augmented quoting &amp; margin-review system —{" "}
            <span className="text-muted-foreground">designed, directed, and verified end-to-end.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
            A system I designed and operate for a facilities-maintenance business: field teams need
            fast, consistent, defensible quotes for maintenance work orders; managers need a
            margin-and-risk gate; the business needs an audit trail. Here&apos;s how it&apos;s built —
            and the calls I made.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Designed", "Directed AI build", "Verified end-to-end"].map((chip) => (
              <span
                key={chip}
                className="inline-block rounded-full border-2 border-foreground/20 bg-white/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </AnimateIn>

      {/* ── Video ─────────────────────────────────────────────────────── */}
      <AnimateIn delay={100}>
        <div className="mb-6">
          <SectionLabel>A 46-second walkthrough</SectionLabel>
          <div
            className="overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "#D4A800", backgroundColor: "#FFFBEA" }}
          >
            <video
              src={`${BASE}/sqp-demo.mp4`}
              controls
              playsInline
              preload="metadata"
              poster={`${BASE}/01-landing.png`}
              className="w-full h-auto block"
            >
              Your browser doesn&apos;t support HTML5 video.
            </video>
          </div>
        </div>
      </AnimateIn>

      {/* ── Synthetic-data disclaimer ─────────────────────────────────── */}
      <AnimateIn delay={150}>
        <p className="mb-16 text-xs text-muted-foreground italic leading-relaxed">
          Everything shown uses fully synthetic, debranded data — the operating client is
          confidential. The company on screen, &ldquo;Northwind Facilities Services,&rdquo; is a
          stand-in, and all pricing and figures are illustrative. No real client, pricing, or
          private information appears anywhere on this page.
        </p>
      </AnimateIn>

      {/* ── Context ───────────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <section className="mb-16">
          <SectionLabel>The problem</SectionLabel>
          <p className="text-sm leading-relaxed text-foreground/90 max-w-2xl">
            Quoting maintenance work by hand is slow and inconsistent — the same job can be priced
            three different ways depending on who picks up the phone. Margins erode quietly, risky
            jobs get approved without a second look, and when a number is questioned later, there&apos;s
            no record of how it was reached. The system replaces that with a consistent intake, a
            pricing model anyone can audit, a risk gate that can&apos;t be skipped, and a trail that
            survives the handoff to billing.
          </p>
        </section>
      </AnimateIn>

      {/* ── Walkthrough ───────────────────────────────────────────────── */}
      <AnimateIn delay={150}>
        <div className="mb-8">
          <SectionLabel>Walkthrough · 8 steps</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            How the system works — and why it&apos;s built this way.
          </h2>
        </div>
      </AnimateIn>

      <div className="space-y-14">
        {steps.map((step, i) => (
          <AnimateIn key={step.n} delay={i < 3 ? 150 : 0}>
            <section>
              <div className="flex items-start gap-3 mb-3">
                <StepNumber n={step.n} />
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Step {step.n} · {step.label}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">{step.caption}</p>
                </div>
              </div>
              <div className="space-y-3 sm:pl-10">
                {step.shots.map((s) => (
                  <Shot
                    key={s.src}
                    src={s.src}
                    w={s.w}
                    h={s.h}
                    alt={s.alt}
                    priority={step.n === 1}
                  />
                ))}
              </div>
            </section>
          </AnimateIn>
        ))}
      </div>

      {/* ── Architecture & judgment ───────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-20">
          <SectionLabel>Architecture &amp; judgment</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
            The four calls that define the system.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-5 rounded-2xl border-2 bg-white"
                style={{ borderColor: "rgba(45,45,45,0.14)" }}
              >
                <h3 className="text-base font-bold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* ── What I owned ──────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: "#D4A800", backgroundColor: "#FFF9DB" }}
          >
            <SectionLabel>What I owned</SectionLabel>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">01</span>
                <span>
                  <strong>Designed</strong> the end-to-end flow, the pricing-and-risk logic, and the
                  three-role access model.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">02</span>
                <span>
                  <strong>Directed</strong> the AI implementation — specifying the boundaries,
                  reviewing what it produced, and deciding what shipped.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[#A8431F] font-bold">03</span>
                <span>
                  <strong>Verified</strong> it end-to-end — exercising the real paths and catching
                  the failure modes before they reached the operator.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </AnimateIn>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <AnimateIn>
        <section className="mt-16">
          <div
            className="p-8 rounded-2xl border-2"
            style={{ borderColor: "#383838", backgroundColor: "#6FC2FF" }}
          >
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              This is how I work: design the system, direct the build, own the verification.
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-xl">
              If you&apos;re evaluating someone to design or operate AI-augmented systems, this is a
              representative piece of how I think. There&apos;s more in the collection.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/cikizeng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
              >
                Connect on LinkedIn &rarr;
              </a>
              <Link
                href="/work"
                className="text-sm font-semibold text-foreground underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity"
              >
                See more work &rarr;
              </Link>
              <a
                href="https://x.com/cikibuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-foreground/80 underline underline-offset-4 hover:text-foreground"
              >
                @cikibuilds
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
