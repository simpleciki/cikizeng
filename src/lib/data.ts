// All static content for the site. No database, no CMS.
// This is the single source of truth for all page content.

export const siteConfig = {
  name: "Ciki Zeng",
  tagline: "One Person x AI = One Team",
  url: "https://cikizeng.com",
  gumroadUrl: "https://cikizeng.gumroad.com", // update with actual product URLs after Gumroad listing
};

export const stats = [
  { value: "3", label: "SaaS Products" },
  { value: "931+", label: "Tests" },
  { value: "13", label: "Case Studies" },
  { value: "10", label: "Enforcement Hooks" },
];

export const valuePillars = [
  {
    id: "questioning",
    title: "Question-Driven AI Governance",
    description:
      "Don't trust unquestioned output — including AI's and your own. A systematic methodology that catches what 732 passing tests can't.",
    icon: "shield",
  },
  {
    id: "memory",
    title: "Four-Layer Persistent Memory",
    description:
      "Your AI partner remembers every project, every lesson, every preference. Across sessions, across tools, across months.",
    icon: "layers",
  },
  {
    id: "evolution",
    title: "Self-Evolving Enforcement",
    description:
      "Rules written in code, not docs. 10 hooks that enforce discipline — and every rule has an expiration date, because rules that don't evolve become shackles.",
    icon: "zap",
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  value: string;
  status: string;
  stack: string[];
  url?: string;
  restricted?: boolean;
  restrictedNote?: string;
  accent: string; // pastel bg color per card (MotherDuck style)
};

export const projects: Project[] = [
  {
    id: "jumponion",
    name: "JumpOnion",
    tagline: "AI Figure Skating Jump Analysis",
    problem:
      "Skaters and parents can't see what's actually wrong with a jump — so they train blind. Coaches know, but their time is expensive and limited. Without clear diagnosis, practice hours get wasted on the wrong fixes.",
    value:
      "Upload a video, get AI-powered biomechanical diagnosis: pre-rotation detection, severity measurements against performance targets, and personalized training plans with 54 drills across 7 categories. What takes a human 30 minutes takes JumpOnion 60 seconds.",
    status: "Live — V1.3+, 931 tests passing",
    stack: ["Next.js", "Render", "Vercel", "R2", "Modal", "Supabase", "Stripe", "LLM"],
    url: "https://jumponion.com",
    accent: "#EBF9FF",
  },
  {
    id: "smartlearning",
    name: "SmartLearning",
    tagline: "AI Adaptive Learning Platform",
    problem:
      "Homeschool parents spend thousands on curriculum but still can't tell if their child truly mastered the material. When it's time to apply to schools, collecting and organizing learning records is expensive, exhausting, and the results are never good enough.",
    value:
      "One platform that handles it all: AI-adaptive lessons that adjust to each child in real-time, MAP-calibrated assessments that track true mastery, and a Portfolio builder that turns months of learning into polished application-ready records. Worry-free for parents.",
    status: "V2.8 Beta — live",
    stack: ["Next.js", "Supabase", "Stripe", "OpenAI"],
    url: "https://smartlearning.cikizeng.com",
    accent: "#F7F1FF",
  },
  {
    id: "smartquotepro",
    name: "SmartQuotePro",
    tagline: "AI-Powered Facility Maintenance Quoting",
    problem:
      "Generating accurate maintenance and construction quotes for enterprise retail chains involves dozens of variables — materials, labor rates, regional pricing, service type. Manual quoting is slow and error-prone.",
    value:
      "An AI-powered quoting platform for facility maintenance companies. Dual-AI pricing engine with 5-part cost breakdowns, real-time margin analysis, and multi-level approval workflows. Generates market-validated quotes in under 5 seconds — in production use since v10.",
    status: "Production v10 — enterprise client in use",
    stack: ["Custom AI", "Proprietary Training"],
    url: "https://smartquotepro.vercel.app",
    restricted: true,
    restrictedNote:
      "Internal tool — public registration is closed. Showcased here as proof of design capability in enterprise AI applications.",
    accent: "#FFDE00",
  },
];

export const sunnyInvoicesNote = {
  text: "Plus SunnyInvoices — a three-layer automation script (Tampermonkey + Node.js + Playwright) that turns a 5x manual process into one click. Not a product, just a testament to solving real problems with code.",
};

export const methodSections = [
  {
    id: "amdahl",
    title: "Amdahl's Law x AI",
    subtitle: "Why your judgment is your most valuable asset",
    content:
      "AI accelerates the parallelizable part — writing code, searching, generating content. Platforms will commoditize this. The real value is in the serial bottleneck: your domain judgment, quality standards, strategic decisions. The stronger AI gets, the more your judgment matters.",
    highlight:
      "Not \"how to use AI\" — how to systematize your judgment so AI makes you more effective, not more reckless.",
  },
  {
    id: "questioning",
    title: "Question-Driven Governance",
    subtitle: "Don't trust unquestioned output",
    content:
      "732 tests passed. 0 failures. I was ready to celebrate — and my AI partner said 'Wait. Last time we had all-green tests too, and production broke.' It remembered an incident I'd forgotten. This isn't a tool. It's a partner with memory and the discipline to push back.",
    highlight:
      "Prompts are suggestions. Hooks are law. Your AI doesn't just 'remember' the rules — it's forced to follow them.",
  },
  {
    id: "memory",
    title: "Four-Layer Memory Architecture",
    subtitle: "AI that never forgets your context",
    content:
      "Asset Layer (Obsidian) stores knowledge and decisions. Runtime Layer (CLAUDE.md) holds active rules. Enforcement Layer (Hooks) runs mandatory checks in code. Training Layer (Memory) captures feedback that graduates into rules. Cross-session, cross-tool, cross-project.",
    highlight:
      "Your AI never says 'I don't remember what we discussed last time.'",
  },
  {
    id: "enforcement",
    title: "Self-Evolving Enforcement Layer",
    subtitle: "Rules that live in code, not documents",
    content:
      "10 production hooks run on every operation — from session start to code commit. Every L2+ rule must include a retire-if condition. Rules that don't evolve become shackles. The system watches, learns, and proposes its own upgrades.",
    highlight:
      "New rules take effect within minutes of being written. This isn't documentation — it's a living operating system.",
  },
  {
    id: "proven",
    title: "Battle-Tested Across Real Products",
    subtitle: "Not theory — documented across real production",
    content:
      "Every methodology claim is backed by a real incident from production development. Bug Confession protocol triggered three times on the same pattern — and evolved from 'fix the bug' to 'eliminate the bug factory.' Challenge protocol activated within minutes of being written. These aren't hypotheticals.",
    highlight:
      "Read the case studies — every methodology claim is backed by a real production incident.",
  },
];

export const pricingTiers = [
  {
    name: "Core",
    price: "$39",
    description: "Second Brain Template",
    features: [
      "Obsidian vault structure (PARA)",
      "SOP methodology summary",
      "Session protocol templates",
      "Knowledge management rules",
    ],
    cta: "Get Core Template",
    href: "https://cikizeng.gumroad.com/l/ldptc",
  },
  {
    name: "Full",
    price: "$79",
    description: "Complete Methodology",
    features: [
      "Everything in Core",
      "CLAUDE.md template (AI partner OS)",
      "Skill dispatch table & decision trees",
      "Four-layer memory architecture",
      "Cross-project isolation protocols",
      "Decision framework (5 protocols)",
    ],
    cta: "Get Full Package",
    href: "https://cikizeng.gumroad.com/l/hfqazrm",
    highlighted: true,
  },
  {
    name: "Framework",
    price: "$149",
    description: "Harness OS Framework",
    features: [
      "Everything in Full",
      "7 enforcement hooks (JS source code)",
      "Shared config + install script",
      "Hook configuration guide",
      "Rule lifecycle (retire-if) templates",
      "System charter",
    ],
    cta: "Get Framework",
    href: "https://cikizeng.gumroad.com/l/ulgtwj",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/method", label: "Method" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
];

export type CaseStudy = {
  id: string;
  date: string;
  project: string;
  title: string;
  scenario: string;
  rule: string;
  withoutSOP: string;
  result: string;
  punchline: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "blindspot-intercept",
    date: "2026-03-18",
    project: "JumpOnion",
    title: "3 Failed Attempts, Then the System Self-Corrected",
    scenario:
      "During algorithm development, a tracking approach failed completely on real figure skating videos — detecting 6.47s of air time on a jump that lasted 0.7s. The same approach was retried with small tweaks.",
    rule:
      "Blindspot Interception — after 2 identical failures, force a root cause analysis. After 30 minutes on a dead-end approach, force a strategy switch.",
    withoutSOP:
      "My AI partner would have kept tweaking the same broken approach for the entire session. Worse, the flawed algorithm might have shipped to production.",
    result:
      "On the third failure, the system automatically switched strategy — from centroid tracking to bottom-point tracking with physics constraints. It found the right approach before I even suggested it.",
    punchline:
      "Can your AI workflow rescue itself when it's failing? Mine can.",
  },
  {
    id: "env-pollution",
    date: "2026-03-18",
    project: "SunnyInvoices",
    title: "Ran a Pipeline in the Wrong Directory — Zero Damage",
    scenario:
      "A data pipeline was accidentally executed in the wrong project directory. Cross-project file contamination was a real risk.",
    rule:
      "Environment Pollution Guard — any cross-project reference triggers an immediate stop-and-confirm before proceeding.",
    withoutSOP:
      "Files, data, or dependencies from one project could have contaminated another, requiring hours of detective work to untangle.",
    result:
      "The project boundary mechanism caught the mistake instantly. Despite running in the wrong directory, zero cross-project pollution occurred.",
    punchline:
      "Your SOP is body armor, not decoration. Even when you make mistakes, the system protects you.",
  },
  {
    id: "scope-blindspot",
    date: "2026-03-19",
    project: "SOP Framework",
    title: "The SOP Couldn't Protect Its Own Birth",
    scenario:
      "A new rule for automatic case study collection was added to the project-level memory — visible only in the current project. But case studies are mainly generated during development of other products.",
    rule:
      "No existing rule covered this — it was a blindspot in the SOP creation process itself.",
    withoutSOP:
      "The new rule would never fire during product development sessions. Case studies would silently stop being collected, and the entire content pipeline would dry up.",
    result:
      "The issue was caught during review. The rule was moved to the global configuration, and a new blindspot interception rule was added: always verify rule scope when writing new rules.",
    punchline:
      "The SOP isn't a finished product — it exposes its own blindspots, then you fix them, and the system gets stronger.",
  },
  {
    id: "hooks-necessity",
    date: "2026-03-19",
    project: "SOP Framework",
    title: "The Rule Existed — The AI Just Didn't Follow It",
    scenario:
      "A new protocol was written to project-level memory instead of the global config. The rule explicitly stating 'check if cross-project rules are globally visible' was already in place — but the AI skipped the self-check.",
    rule:
      "Blindspot Interception — writing new rules must include a scope self-check.",
    withoutSOP:
      "The new protocol would only be visible in one project. During development of other products, the AI wouldn't know the rule exists.",
    result:
      "The issue was caught manually and fixed. More importantly, it proved a critical insight: prompt-level instructions aren't reliable enough. This is exactly why enforcement hooks exist — they don't trust the AI to 'remember,' they force compliance in code.",
    punchline:
      "Most AI workflows tell you the AI will self-check. Mine honestly admits: it won't. So we enforce rules in code, and prove it with case studies.",
  },
  {
    id: "challenge-instant",
    date: "2026-03-19",
    project: "SOP Framework",
    title: "New Rule Activated Within Minutes of Being Written",
    scenario:
      "The Challenge Protocol — requiring the AI to question its own output — was just added to the global config. Minutes later, the AI proactively flagged a limitation in a hook it had just built: the keyword detection only covered Chinese terms, missing English edge cases.",
    rule:
      "Challenge Protocol — during execution, if you notice a potential issue, raise it instead of silently continuing.",
    withoutSOP:
      "The AI would have reported 'all checks passed' and moved on, leaving a gap that would only surface when an English-speaking user triggered the system.",
    result:
      "The gap was flagged immediately, triaged correctly (noted for future work, not an urgent fix), and logged. The rule proved it works — not in theory, but in the same session it was created.",
    punchline:
      "New rules take effect within minutes. This isn't documentation — it's a living operating system.",
  },
  {
    id: "single-source-of-truth",
    date: "2026-03-19",
    project: "SOP Framework",
    title: "Data Copies Produced Stale Output — Less Is More",
    scenario:
      "During a session wrap-up, the AI reported 'next step: rewrite algorithm v2' — but v3 had already been completed in a previous session. The stale recommendation came from a data copy that wasn't updated.",
    rule:
      "No rule covered this — the data copy itself was the architectural flaw.",
    withoutSOP:
      "The next session might have attempted to rewrite already-completed code, wasting an entire session. Worse: it could have overwritten calibrated v3 code with a v2 redo.",
    result:
      "All data copies were eliminated. The architecture was simplified to a single source of truth with pointers — no more redundant progress tracking. A new rule was added to the startup protocol: cross-validate progress data before acting on it.",
    punchline:
      "Cutting a data copy is safer than maintaining it. Less is more.",
  },
  {
    id: "agents-md-missing",
    date: "2026-03-19",
    project: "JumpOnion",
    title: "Project Had 166 Tests But No Agent Constitution",
    scenario:
      "JumpOnion had reached Phase 4 with 166 tests and 9/11 calibration videos passing. But it had never created a unified rules document for AI agent collaboration — critical lessons were scattered across memory files.",
    rule:
      "New Project Coverage Detection — on session start, check if the project has a unified agent rules document.",
    withoutSOP:
      "Different AI tools working on the same project would miss critical constraints — like 'location-based metrics cannot be used for diagnosis' or 'never use .remote(), always use .spawn().' Known mistakes would be repeated.",
    result:
      "The missing document was detected on session start. A comprehensive agent constitution was generated covering: tech stack locks, iron rules, phase status, calibration system rules, handoff protocols, and escalation checklists.",
    punchline:
      "The SOP doesn't wait for things to break — it detects what's missing before you start working.",
  },
  {
    id: "data-provenance",
    date: "2026-03-20",
    project: "JumpOnion",
    title: "3 Videos Downloaded 0 Frames — Broken Data References",
    scenario:
      "During golden file generation, 3 out of 10 calibration videos downloaded 0 frames from the database. The other 7 worked fine. The temptation was to debug network or permissions.",
    rule:
      "Data Provenance — after cleaning data, all upstream references must be synced. Blindspot Interception — stop chasing symptoms after 30 minutes.",
    withoutSOP:
      "Hours spent retrying downloads, checking network, checking permissions. Eventually the 3 videos might have been dropped, shrinking the calibration set from 10 to 7.",
    result:
      "Cross-referencing analytics results revealed the real issue: old task IDs in the registry pointing to deleted storage paths. New task IDs were mapped in 15 minutes, all 3 videos recovered.",
    punchline:
      "The sneakiest bugs in your data pipeline aren't code errors — they're broken references. Data got deleted but the index didn't follow.",
  },
  {
    id: "semantic-inversion",
    date: "2026-03-20",
    project: "JumpOnion",
    title: "All Tests Green — By Dismantling the Gates",
    scenario:
      "During E2E validation, a metric showed real data at ~1.0 but the threshold was set at max 0.15. The quick fix: just raise the threshold to 1.0 and everything goes green.",
    rule:
      "Zero Misdiagnosis Principle — fix the definition first, then adjust the numbers. Verification exists to be meaningful, not to be green.",
    withoutSOP:
      "Thresholds would have been inflated across the board — 0.15 to 1.0, 10 to 250, 0.03 to 1.0. All tests green, but the validation system would be effectively demolished. Garbage in, green out.",
    result:
      "Root cause found: the metric name said 'fill ratio' but measured 'emptiness ratio' — semantics were inverted. After fixing the calculation, real data showed 0.000-0.001. Redundant checks were removed. Final result: 0 blocks, 10 warnings, 30 passes — every green backed by real meaning.",
    punchline:
      "Threshold inflation is how quality systems die. Your CI is all green not because your product is good — but because you removed the gates.",
  },
  {
    id: "false-positive-gated",
    date: "2026-03-20",
    project: "JumpOnion",
    title: "AI Almost Told a World Champion His Jump Was Wrong",
    scenario:
      "During calibration with 11 real figure skating videos, the system diagnosed a world champion's textbook triple Axel as 'high under-rotation risk.' The confidence was 0.61 — just barely above the 0.60 threshold.",
    rule:
      "Zero Misdiagnosis Principle — better to say nothing than to say something wrong. Confidence gating — suppress diagnosis below reliability thresholds.",
    withoutSOP:
      "The system would tell a coach: 'Your skater has serious under-rotation risk' — about a world champion's signature jump. One wrong diagnosis in the figure skating community, and word spreads to every club. Product trust: zero.",
    result:
      "Calibration caught the false positive before launch. Root cause: 2D camera projection artifacts made the blade angle appear misaligned. Threshold raised from 0.60 to 0.70, diagnosis correctly suppressed. A field taxonomy was built to classify metric reliability.",
    punchline:
      "Would your AI tell a world champion his jump is wrong? Ours wouldn't — because calibration caught the error before it reached a single user.",
  },
  {
    id: "eval-not-production",
    date: "2026-03-26",
    project: "JumpOnion",
    title: "732 Tests Passed — The AI Still Said 'Not Done'",
    scenario:
      "The diagnosis pipeline was connected to the production route. 732 tests passed, 0 failures. Everything looked ready to ship. But my AI partner remembered something.",
    rule:
      "Challenge Protocol + Verification Before Completion — eval scripts passing does not equal production verification. The AI cited a previous incident where tests passed but production broke.",
    withoutSOP:
      "732 green lights — the natural human response is 'done!' But if the production route wasn't actually working, all subsequent development would be built on a foundation that doesn't exist.",
    result:
      "The AI blocked the 'done' declaration and required real end-to-end HTTP verification with actual tasks before marking the phase complete. It remembered the lesson from a previous incident — that's not a tool, that's a partner.",
    punchline:
      "Every developer gets hypnotized by green tests. 732 passed, 0 failed — who wouldn't celebrate? But the AI partner remembered the last time green tests lied.",
  },
  {
    id: "cross-tool-handoff",
    date: "2026-03-29",
    project: "JumpOnion",
    title: "3 Tool Switches in One Day — Zero Context Lost",
    scenario:
      "Three cross-tool session handoffs occurred in a single day: Claude Code to Cursor, Cursor back to Claude Code, then Claude Code to Cursor again. Each switch risked losing context about what was tested, what was blocked, and what came next.",
    rule:
      "Cross-Tool Handoff Protocol — every session exit must produce a handoff note. Every session start must read the previous handoff note and cross-validate against the source of truth.",
    withoutSOP:
      "Without handoff notes, each new tool session would only see git history and code — not which steps were tested, which blockers were known, or why the previous session stopped. Typical result: redoing completed work or continuing down an abandoned path.",
    result:
      "All three handoffs worked as designed. The third handoff even triggered Stale Context detection — the 'next steps' in the dashboard had been outdated by the second session. The system flagged the conflict instead of acting on stale data.",
    punchline:
      "I use Claude Code, Cursor, and Codex in parallel — handoff protocols keep context intact across all of them, losing zero work.",
  },
  {
    id: "bug-confession-factory",
    date: "2026-03-30",
    project: "JumpOnion",
    title: "Same Bug Pattern Three Times — Then the Factory Was Destroyed",
    scenario:
      "While fixing an export feature, a database query used SELECT * but the manual field mapping missed a column. After fixing it, another missing column was found — the exact same bug pattern.",
    rule:
      "Bug Confession Protocol — when the AI fixes its own bug, it must self-report the pattern, not just the fix.",
    withoutSOP:
      "The AI would fix the one missing field and move on. The next time a new column is added, the same bug would appear for a fourth time. Without the confession format, the pattern would never be identified.",
    result:
      "The AI didn't just fix two fields — it identified that manual field mapping was the bug factory. Architectural fix: return the full row object instead of cherry-picking fields. The entire class of bugs was eliminated, not just the instance.",
    punchline:
      "AI writing bugs isn't scary. AI writing bugs and not knowing — that's scary. Bug Confession turns 'fix and forget' into 'fix, reflect, and eliminate the pattern.'",
  },
  {
    id: "cross-project-knowledge-transfer",
    date: "2026-04-06",
    project: "JumpOnion × SmartLearning",
    title: "One Project's Fix Became Every Project's Standard — In 3 Minutes",
    scenario:
      "SmartLearning added a Terms of Service consent checkbox to all Stripe Checkout flows. Later that day, a JumpOnion session started. Ciki asked: 'Should the payment link add this too?'",
    rule:
      "Startup Protocol — read the HOME.md hub dashboard first. The SmartLearning row said 'Added ToS consent checkbox to all Stripe Checkout flows' — specific enough to act on immediately.",
    withoutSOP:
      "The AI would treat it as a brand-new requirement: research Stripe docs, list pros and cons, ask Ciki to decide. No awareness that the exact same problem was already solved hours ago in another project.",
    result:
      "The AI cited the SmartLearning precedent directly, recommended 'add it for consistency,' and provided the exact code. One word: 'add it.' One line changed, tests passed, deployed. Question to production in under 3 minutes, zero research, zero rework.",
    punchline:
      "SmartLearning solved it \u2192 HOME.md recorded it \u2192 JumpOnion\u2019s agent read it \u2192 Ciki said one word \u2192 deployed. Four projects, one knowledge network. That\u2019s not documentation \u2014 that\u2019s compound leverage.",
  },
];
