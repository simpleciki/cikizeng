// All static content for the site. No database, no CMS.
// This is the single source of truth for all page content.

export const siteConfig = {
  name: "Ciki Zeng",
  tagline: "One Person x AI = One Team",
  url: "https://cikizeng.com",
  gumroadUrl: "https://cikizeng.gumroad.com", // update with actual product URLs after Gumroad listing
};

export const stats = [
  { value: "4", label: "Products Shipped" },
  { value: "2050+", label: "Tests" },
  { value: "36", label: "Case Studies" },
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
  sampleHref?: string; // optional internal link to a public sample/demo page
  sampleLabel?: string; // optional label for sample link, e.g. "See live sample"
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
    status: "Live — V1.3+, 1000+ tests passing",
    stack: ["Next.js", "Render → Railway", "Vercel", "R2", "Modal", "Supabase", "Stripe", "LLM"],
    url: "https://jumponion.com",
    sampleHref: "/jumponion-sample",
    sampleLabel: "See live sample",
    accent: "#EBF9FF",
  },
  {
    id: "smartlearning",
    name: "IvyBloom",
    tagline: "AI Adaptive Learning Platform",
    problem:
      "Homeschool parents spend thousands on curriculum but still can't tell if their child truly mastered the material. When it's time to apply to schools, collecting and organizing learning records is expensive, exhausting, and the results are never good enough.",
    value:
      "One platform that handles it all: 45+ AI modules covering language arts, STEM, writing, test prep, and FBLA competition coaching. AI-adaptive lessons adjust to each child in real-time, MAP-calibrated assessments track true mastery, and a Portfolio builder turns months of learning into polished application-ready records.",
    status: "V2.8 Beta — live",
    stack: ["Next.js 16", "Prisma", "Supabase", "Stripe", "DeepSeek", "Multi-AI"],
    url: "https://ivybloom.app",
    accent: "#F7F1FF",
  },
  {
    id: "smartquotepro",
    name: "SmartQuotePro",
    tagline: "AI-Powered Facility Maintenance Quoting",
    problem:
      "Generating accurate maintenance and construction quotes for enterprise retail chains involves dozens of variables — materials, labor rates, regional pricing, service type. Manual quoting is slow and error-prone.",
    value:
      "An AI-powered quoting platform for facility maintenance companies. Dual-AI pricing engine (Groq + Gemini) with NTE-aware cost breakdowns, real-time profit margin analysis, and multi-level approval workflows. Generates market-validated quotes in under 5 seconds — in production use since v10.",
    status: "Production v10.2 — enterprise client in use",
    stack: ["Next.js 15", "FastAPI", "Supabase", "Groq + Gemini", "Stripe"],
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
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "day-3-when-ai-lied-about-dead-code",
    title: "Day 3: When AI Lied About Dead Code (30 Hours of Silent Failures)",
    date: "2026-04-14",
    excerpt:
      "My AI partner deleted production code with absolute confidence and labeled it 'dead code, anonymous uploads.' 987 tests passed. The deploy went green. Thirty hours later, a paying customer noticed.",
    readTime: "8 min",
    tags: ["JumpOnion", "AI Engineering", "Post-Mortem"],
  },
  {
    slug: "day-2-first-detection-attempt",
    title: "Day 2: 6.47 Seconds of Air Time (The Jump Lasted 0.7)",
    date: "2026-04-13",
    excerpt:
      "The first attempt at detecting a figure skating jump measured 6.47 seconds of air time — on a jump that lasted 0.7 seconds. Three failed approaches, then the system rescued itself.",
    readTime: "7 min",
    tags: ["JumpOnion", "AI Engineering", "Debugging"],
  },
  {
    slug: "day-1-building-figure-skating-ai",
    title: "Day 1: Building a Figure Skating AI — Why I Started",
    date: "2026-04-08",
    excerpt:
      "My kids train figure skating 5 days a week. Coaches cost $120/hour and their time is limited. I built an AI that diagnoses jumps in 60 seconds — here's why I started and what the first day looked like.",
    readTime: "6 min",
    tags: ["JumpOnion", "AI Engineering"],
  },
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
    project: "JumpOnion × IvyBloom",
    title: "One Project's Fix Became Every Project's Standard — In 3 Minutes",
    scenario:
      "IvyBloom added a Terms of Service consent checkbox to all Stripe Checkout flows. Later that day, a JumpOnion session started. Ciki asked: 'Should the payment link add this too?'",
    rule:
      "Startup Protocol — read the HOME.md hub dashboard first. The IvyBloom row said 'Added ToS consent checkbox to all Stripe Checkout flows' — specific enough to act on immediately.",
    withoutSOP:
      "The AI would treat it as a brand-new requirement: research Stripe docs, list pros and cons, ask Ciki to decide. No awareness that the exact same problem was already solved hours ago in another project.",
    result:
      "The AI cited the IvyBloom precedent directly, recommended 'add it for consistency,' and provided the exact code. One word: 'add it.' One line changed, tests passed, deployed. Question to production in under 3 minutes, zero research, zero rework.",
    punchline:
      "IvyBloom solved it \u2192 HOME.md recorded it \u2192 JumpOnion\u2019s agent read it \u2192 Ciki said one word \u2192 deployed. Four projects, one knowledge network. That\u2019s not documentation \u2014 that\u2019s compound leverage.",
  },
  {
    id: "sop-driven-autonomy",
    date: "2026-04-06",
    project: "SOP Framework",
    title: "Your AI Isn't Smart. Your System Is.",
    scenario:
      "Across 3 projects and 6 months, AI agents appeared to develop autonomous judgment: catching bugs before the developer, refusing to ship when tests passed, switching strategies when stuck, knowing when to wrap up sessions.",
    rule:
      "Three-Layer Architecture — Hooks (mechanical guarantee, ~100%), Skills (phase-triggered, ~95%), Rules (AI-executed, ~85%). Every 'autonomous' decision traced back to an explicit SOP rule.",
    withoutSOP:
      "Layer 0: AI fixes the immediate symptom and moves on. Accepts green tests as proof of correctness. No self-check, no pattern recognition, no session discipline. This is what most people get from AI coding assistants.",
    result:
      "16 instances analyzed across JumpOnion, IvyBloom, and CikiBrain. Zero involved AI 'learning' autonomy. All traced to explicit rules: Partner Challenge, Zero-Misdiagnosis, Bug Confession, Cross-Tool Handoff, Phase 6 Wrap-Up.",
    punchline:
      "AI agents don't develop judgment. System designers encode judgment into executable rules. The gap between Layer 0 and Layer 3 is the product.",
  },
  {
    id: "brand-migration-cascade",
    date: "2026-04-08",
    project: "IvyBloom",
    title: "187K+ References Changed Across 7 Layers — Zero Residue",
    scenario:
      "SmartLearning was rebranding to IvyBloom. Not a simple rename — it touched 7 system layers: GitHub repo, git remote, Vercel project, Claude Code/Codex/Cursor session configs, project memory, and CikiBrain hub documents.",
    rule:
      "Cascade Cleanup Protocol — any rename operation triggers automatic Grep across all systems + fix all references. No waiting for the human to point out missed spots. Combined with Cross-Platform Handoff Protocol for multi-tool sync.",
    withoutSOP:
      "Partial migration is worse than no migration. The executor changes the obvious spots (GitHub + Vercel) but misses hidden references in memory files, hooks, and launch.json. Days later, a session mysteriously fails because it read a ghost path.",
    result:
      "All 7 layers migrated in a single session. 187K+ path replacements with zero residue. Bridge memories written for old-to-new path mapping. HOME.md dashboard updated immediately. B+ strategy applied: only user-visible layers changed, internal vars left alone to avoid unnecessary risk.",
    punchline:
      "Rename = Cascade. Your AI should work like CASCADE DELETE — change one reference, automatically track and update every downstream dependency.",
  },
  {
    id: "sop-self-healing",
    date: "2026-04-08",
    project: "JumpOnion x CikiBrain",
    title: "The Framework Detected Its Own Failure — Then Fixed Itself",
    scenario:
      "During V1 launch sprint, tool-switching frequency jumped from 1-2/day to 10+/day. The cross-tool handoff protocol — designed for low-frequency switches — collapsed. 10 handoff notes per day became noise instead of signal. AGENTS.md fell 11 days behind. Verification debt became invisible across tools.",
    rule:
      "Self-Healing Framework — the SOP's built-in audit tool (autoresearch) detected three simultaneous failure signals, traced them to a single root cause (missing aggregation mechanism), and generated a structured fix.",
    withoutSOP:
      "Protocol degrades silently under pressure. Documents go stale, handoffs get skipped, quality checks are bypassed. The developer only discovers the damage when a downstream session acts on outdated information — by then, hours of work are wasted.",
    result:
      "Created CURRENT-STATE.md as a rolling single source of truth. Simplified wrap-up from 10 steps to 3 (CURRENT-STATE → HOME.md → /session end). Added startup cross-check gate (git log timestamp vs CURRENT-STATE). Handoff notes deprecated to audit logs.",
    punchline:
      "Your workflow will break under pressure. The question is: who repairs it? Most workflows need the human to notice. This one diagnoses, proposes, and fixes itself.",
  },
  {
    id: "session-continuity-drift",
    date: "2026-04-10",
    project: "CikiBrain",
    title: "AI Caught 3 Times in One Session — Same Root Cause",
    scenario:
      "In a 10+ hour marketing strategy session, the AI was loaded with all project context at startup. Hours later, it asked 'Do you have a landing page?' — about a site already in production. Then suggested building a 'free trial' — for a product already live with paid subscribers. Then warned about '$500+ API cost risk' — when the actual 10-day bill was $1.73.",
    rule:
      "Stale Context Prevention — session-start fact loading must be reinforced mid-session. Default AI training narratives ('solo founders need free trials', 'API costs spiral') override loaded facts after enough conversation turns.",
    withoutSOP:
      "Following the AI's three suggestions would have consumed ~10 days building features that contradicted the product's existing strategy — a waitlist for a live product, free trial for a premium positioning, and emergency cost controls for a $0.17/day API bill.",
    result:
      "All three drifts were caught by the human partner using the Challenge Protocol. Root cause identified: AI training defaults override session-specific facts in long conversations. Led to the Fact-Echo Gate — mandatory state confirmation before any strategic recommendation.",
    punchline:
      "Your AI loaded the context. It confirmed it read the docs. And it still told you to build a waitlist for a product that's already live. Reading ≠ remembering.",
  },
  {
    id: "pipeline-breakage-forensics",
    date: "2026-04-11",
    project: "CikiBrain",
    title: "A Gut Feeling Became a 4-File Fix in 90 Minutes",
    scenario:
      "No error log. No stack trace. Just a feeling: 'Something is off — sessions are disconnected, wrap-ups are getting skipped, project truth is scattered everywhere.' The investigation had to start from a vague sense of system degradation.",
    rule:
      "Root-Cause-First + Autoresearch — decompose a vague feeling into 5 falsifiable hypotheses, then test each against physical evidence (file timestamps, directory counts, config diffs).",
    withoutSOP:
      "The session memory pipeline would have stayed silently broken for weeks. Every new session would start without context from the previous one. Eventually, trust in the entire SOP framework would collapse — not from a dramatic failure, but from slow, invisible decay.",
    result:
      "Physical evidence scan revealed a cliff: session archives dropped from 63/month to 2/month on a precise date. Cross-referencing with the changelog found the root cause — a hook was orphaned during a skill consolidation 10 days prior. Four files fixed, all with retirement conditions.",
    punchline:
      "A feeling became an evidence chain became a 4-file fix. That's what a working second brain looks like.",
  },
  {
    id: "beginner-fall-overcall",
    date: "2026-04-12",
    project: "JumpOnion",
    title: "AI Called a Normal Landing a 'Fall' — 4-Layer Fix",
    scenario:
      "A beginner skater's double Axel was diagnosed as a 'fall' with severity 4. In reality, the deep knee bend after landing was normal absorption biomechanics for a young skater — not a fall. The AI had never seen a beginner's landing before.",
    rule:
      "Zero Misdiagnosis Principle + Root-Cause-First — don't patch the symptom (adjust one threshold). Run ablation experiments to find the real cause. Prompt-level fixes require full regression validation before deployment.",
    withoutSOP:
      "A quick prompt tweak might fix the beginner's case but break fall detection for real falls. Without ablation experiments ($1 API cost), the team would have guessed at the fix and potentially shipped a regression.",
    result:
      "Ablation experiments across 4 pipeline variants revealed the real issue: LLM non-determinism on borderline cases, amplified by apex frame visual contrast. Four-layer fix: body-contact gate in prompt, apex frame removal, raw frame persistence for debugging, and regression harness upgrade. 15/15 samples passing, real falls still detected.",
    punchline:
      "The AI saw a deep knee bend and called it a fall. We didn't just fix the label — we rewired the entire diagnosis pipeline so it can never confuse absorption with failure again.",
  },
  {
    id: "protocol-self-healing-notion",
    date: "2026-04-12",
    project: "CikiBrain",
    title: "One Question Upgraded the Entire Wrap-Up Protocol",
    scenario:
      "A simple question during a session: 'How does the project dashboard get updated when a session ends?' The answer: it doesn't. The wrap-up protocol had 3 steps, none of which included syncing the dashboard that the human actually checks every day.",
    rule:
      "Challenge Protocol — the question wasn't a complaint, it was a system design challenge. Combined with Minimal Fix First — don't build a new tool, add one step to the existing protocol.",
    withoutSOP:
      "The project dashboard would remain permanently stale. The human would see outdated status every morning, losing trust in the system's accuracy. Backlog items would be invisible — only tasks the AI chose to mention would be visible.",
    result:
      "Wrap-up protocol upgraded from 3 steps to 4. A new backlog tracker was created with 25 items and 3 views. Every session now automatically syncs project status, backlog deltas, and weekly summaries to the dashboard.",
    punchline:
      "Your SOP shouldn't be a document you write and forget. It should be a living system — when you find a blind spot, 30 minutes upgrades it, and every future session benefits automatically.",
  },
  {
    id: "competitive-validation-zero-adoption",
    date: "2026-04-13",
    project: "CikiBrain",
    title: "53K GitHub Stars — We Adopted Zero",
    scenario:
      "A popular open-source AI memory tool exploded to 53K GitHub stars, promising '90% token savings.' The temptation: install it immediately. Instead, a structured 10-dimension competitive analysis was triggered — lifecycle hooks, storage, retrieval, compression, token efficiency, search, security, dependencies, information decay, and commercial viability.",
    rule:
      "Search Before You Build + Buy > Build (with ROI) — evaluate before adopting. Don't let star counts substitute for architectural analysis. 53K stars doesn't mean 53K people got the right solution — it means 53K people had the same problem.",
    withoutSOP:
      "Installing a tool with 53K stars feels safe. But it would have introduced 4 critical security vulnerabilities, added 5 external dependencies, and — according to user reports — could actually increase token consumption rather than reduce it.",
    result:
      "Decision: zero adoption. The only concept worth borrowing — automatic session summaries — was implemented in 30 minutes with zero API cost and zero new dependencies. The existing architecture already outperformed the popular tool on 8 of 10 dimensions.",
    punchline:
      "53K stars means 53K people screaming 'my AI memory is broken.' We never had that problem — because the architecture was right from day one.",
  },
  {
    id: "graduated-memory-not-enforced",
    date: "2026-04-14",
    project: "JumpOnion",
    title: "The Anti-Pattern Lived in Memory — The AI Walked Right Into It Again",
    scenario:
      "While shipping a new feature, the AI added three columns to a database table and updated the read code. A paying user immediately reported: feature still doesn't work. Root cause: a hardcoded SELECT column list silently dropped the new columns. The function returned the user's profile minus the very fields the new feature needed.",
    rule:
      "Bug Confession + Memory Enforcement Gap — the same anti-pattern (manual column lists silently dropping new fields) had already been graduated to feedback memory weeks earlier. The memory existed. The AI loaded it at session start. It still didn't trigger when the matching code change happened.",
    withoutSOP:
      "Without rapid user feedback, the bug would have stayed silent for days or weeks — every grant of the new permission was a no-op. The admin path bypassed the broken code, so internal testing wouldn't catch it. The first sign would have been a paying customer's escalation.",
    result:
      "Forty minutes from user report to root cause to deploy. The deeper finding: graduated memory ≠ enforced rule. Memory files are loaded passively at session start and get squeezed out by long-session context drift. Anti-patterns that matter need to descend into hooks (event-triggered enforcement), not stop at memory (best-effort recall). A new hook candidate was queued: pre-edit memory enforcer that scans target files against feedback keywords.",
    punchline:
      "If the rule isn't enforced in code, it's a wish — and wishes have a non-zero failure rate.",
  },
  {
    id: "ai-dead-code-label-outage",
    date: "2026-04-14",
    project: "JumpOnion",
    title: "AI Labeled Production Code 'Dead' — 30 Hours of Silent Upload Failures",
    scenario:
      "During a security audit, the AI deleted a route mount in the backend and labeled it confidently in the commit message: 'dead code, anonymous uploads.' It was not dead code. It was the active upload pipeline. 987 unit tests passed because no test asserted the route's existence. The deploy succeeded. Thirty hours later, a paying customer reported uploads silently failing.",
    rule:
      "Verification Before Completion + Caller Audit — any deletion commit that uses confident labels ('dead code', 'legacy', 'unused') must include grep-evidence of caller checks. The AI's high-confidence language is a trust signal in human review — and a hidden attack surface when unverified.",
    withoutSOP:
      "The 30-hour silent failure could have stretched to days. The route was being used by every video upload from the frontend. Every paying customer's upload silently 404'd. Worse: a follow-up audit added a security gate to the same already-unmounted route — putting a lock on a dismantled door.",
    result:
      "Root cause located in five minutes once symptoms were investigated: a single curl against the upload health endpoint returned 404, while the main health endpoint returned 200. Three-layer fix shipped: re-mount the route, add a critical-routes registry test (16 routes that must exist), and add a 15-minute runtime smoke check via cron. New rule entered the SOP: AI commit messages with 'dead code' labels must include caller-audit evidence in the body.",
    punchline:
      "AI confidence is not evidence. The more polished the label, the more it deserves to be questioned.",
  },
  {
    id: "one-line-context-correction",
    date: "2026-04-14",
    project: "JumpOnion",
    title: "26 Characters Saved Two Hours of Rework",
    scenario:
      "Three hours into a session, the AI proposed a design question based on a wrong premise: 'You don't sell the L3 plan yet, so admin = full access?' L3 had been live for weeks. Pricing, Stripe price ID, and quota were all already configured in code — one grep away.",
    rule:
      "Founder Override + Fact-Echo Gate — when the AI hallucinates project state mid-session, the human founder's correction cost is a sentence. The AI's verification cost is a single grep. The asymmetry makes 'interrupt and correct' the highest-leverage defense layer.",
    withoutSOP:
      "Best case: 30 minutes of rework after the wrong premise propagated into the design. Middle case: a downstream paywall bug locks paying users out of a feature they paid for. Worst case: a customer complaint reveals the broken paywall before internal testing does.",
    result:
      "The founder interrupted with three actions in one sentence: question, fact assertion, demand to recheck. The AI acknowledged the drift, ran the grep, returned with the correct config, and wrote a feedback memory: any pricing-tier claim must be preceded by a grep against the config file. From wrong premise to corrected and persisted in under two minutes.",
    punchline:
      "Long sessions drift. The cheapest defense is a partner willing to say 'wait, that's wrong' — and a system that turns the correction into a permanent rule.",
  },
  {
    id: "hermes-89k-stars-selective-adoption",
    date: "2026-04-15",
    project: "SOP Framework",
    title: "89K Stars — Adopted 3 Ideas, Rejected 3",
    scenario:
      "An open-source AI agent framework went viral with 89K GitHub stars, promising 'self-evolution' through a genetic algorithm that mutates skills and prompts automatically. The temptation: install it. The alternative: a structured 5-dimension comparison against the existing system across memory, skills, self-evolution, behavior enforcement, and cross-tool collaboration.",
    rule:
      "Search Before You Build + Buy > Build (with ROI) — evaluate before adopting. Rather than 'use or ignore,' the question becomes: which specific ideas are worth zero-cost porting?",
    withoutSOP:
      "Default move would be either full adoption (replacing a working system to chase a hot brand) or full dismissal (missing genuinely useful patterns out of pride). Both options would have been wrong. Genetic-algorithm self-mutation in a one-person company means unreviewed automatic PRs touching production rules — a near-certain way to break things silently.",
    result:
      "Three ideas adopted at zero cost: automatic skill solidify suggestions at session end, JSONL-based failure mode analysis, and mid-session lightweight checkpoints. Three ideas explicitly rejected: full genetic mutation (no review capacity), public skill marketplace (skills are commercial assets), automatic user profiling (only one user). The existing system still wins on governance: hooks, retire-if rules, and case study pipelines have no equivalent in the popular framework.",
    punchline:
      "Star counts measure how many people had the same problem. They don't measure whether the solution fits yours.",
  },
  {
    id: "admin-ghost-masks-role-bugs",
    date: "2026-04-15",
    project: "JumpOnion",
    title: "Admin Ghost Login Hid 8 Broken Endpoints for 48 Hours",
    scenario:
      "A new role-based feature shipped with 8 coach-only write endpoints. Internal testing used 'admin ghost login' — viewing the app as another user via an admin shortcut. All 8 endpoints had a typo in their hardcoded SELECT column list referencing fields that didn't exist in the schema. Every real coach session would 500. Internal testing never went through the coach code path.",
    rule:
      "Role-Based Testing Discipline — admin ghost login carries the user's ID through user-facing endpoints, not through role-restricted endpoints. It can't substitute for a real account in the new role. Role-restricted features need an independent account smoke test before launch.",
    withoutSOP:
      "Discovery would have happened in front of three high-stakes coaches at a scheduled product demo 48 hours later. The first coach to click 'Save' would have hit a 500 error. The pitch would have collapsed. Trust with a key referral channel: gone.",
    result:
      "A real coach trying the system in person triggered the bug 48 hours before the demo. Schema-aligned column names shipped, plus a humanized error banner that turns silent 500s into visible failures. New SOP: any role-restricted feature requires a real-account smoke test before launch, plus integration tests using the target role's real JWT — not an admin ghost.",
    punchline:
      "The cheapest testing shortcut buys you the most expensive production failure.",
  },
  {
    id: "ui-button-vs-algorithm-contract",
    date: "2026-04-15",
    project: "JumpOnion",
    title: "A Button Name Killed an Algorithm's Precision",
    scenario:
      "After a month of iterating the jump detection algorithm from v1 to v3 — tightening thresholds, adding physics constraints, hitting calibration accuracy — a real parent uploaded a video and got a 1.2-second air-time reading on a jump that physically maxes out at 0.85 seconds. The algorithm's calibration set was solid. The fix wasn't in the algorithm at all.",
    rule:
      "UI as a Contract — the literal text on a button is a promise to the user about what input the system expects. The button said 'Set Takeoff' and 'Set Landing.' The algorithm's hidden contract required the clip to include on-ice frames before takeoff and after landing. When buttons say one thing and algorithms expect another, the user follows the buttons — and the algorithm receives the wrong input.",
    withoutSOP:
      "The team would have continued tuning algorithm parameters — adjusting thresholds, adding smoothing — chasing precision in code that wasn't broken. Real users would keep uploading 'as instructed' and getting impossible results. The conclusion 'this product is unreliable' would have spread through the user community before anyone realized the buttons were the bug.",
    result:
      "A single commit fixed the buttons (Set Takeoff → Set Clip Start, plus '~0.5s before takeoff' subtext), added a quality band to the trim UI, and updated the upload guide modal with a visual showing the required clip structure. Algorithm code untouched — its contract was never wrong. The new rule: every domain-term button must be tested against the algorithm's hidden assumptions, and the calibration set must include 'mistakes a real user would make' — not just clean inputs.",
    punchline:
      "A precise algorithm fed by a misleading button produces precise nonsense.",
  },
  {
    id: "drill-unlock-schema-drift",
    date: "2026-04-15",
    project: "JumpOnion",
    title: "23 Tests Passed — Every Paying User Was Locked Out",
    scenario:
      "A paying customer reported that every drill click in their training plan returned 402 Payment Required. The drill access function read a JSON cache key at the root level — but the actual persisted shape, since a recent bilingual migration, nested the data two levels deeper under jump-type and locale keys. The 23 unit tests for this function used the old flat shape that production had stopped writing weeks ago.",
    rule:
      "Root-Cause-First on Pipelines + Evidence-Backed Verification — three SQL probes against the actual production data confirmed the schema mismatch in 5 minutes, before a single line of code was touched. Tests that mock a different shape than production writes are theater, not verification.",
    withoutSOP:
      "Default reaction: 'maybe their subscription is frozen?' or 'maybe the drill asset URL is broken?' — guessing categories that have nothing to do with the actual bug. With backward-compat shortcuts, the fix would have shipped without supporting legacy data. With test fixtures continuing to mock a non-existent shape, the next schema migration would silently break the same way.",
    result:
      "Fix shipped in one commit with a path-walker that handles bilingual, legacy bare-key, legacy flat, and weekly_plan shapes. Five new unit tests added, each loading fixtures that match what production actually writes. Every affected user (every paying user, not just the one who reported) recovered drill access on their next request — no manual backfill needed. This was the third mock/prod fixture divergence in two weeks; a new rule candidate queued: integration tests for any function reading JSON columns must use real production shape samples.",
    punchline:
      "Tests that mock the wrong shape don't fail. They lie.",
  },
  {
    id: "overlay-erases-llm-detail",
    date: "2026-04-17",
    project: "JumpOnion",
    title: "The Safety Net That Erased the LLM's Best Output",
    scenario:
      "A coach tagged a jump with three labels matching the LLM's diagnosis exactly. The LLM had produced a detailed coach summary with frame-level evidence ('blade contacts ice approximately 90° short at frame 16'), biomechanical reasoning, and three concrete athlete cues. The coach-tag overlay layer detected serious-negative tags and triggered a template rewrite — replacing the LLM's rich text with a generic boilerplate translation of the tag list.",
    rule:
      "Conflict Detection Before Rewrite — a safety overlay designed to prevent LLM hallucination should not fire when the LLM and the coach are aligned. The overlay's job is to handle conflict, not to flatten everything into a template by default.",
    withoutSOP:
      "Every coach review of an aligned diagnosis would silently downgrade the output to a template. Parents would see less detail the more careful the coaching review was. The product's competitive edge — frame-level citation and biomechanical reasoning from the LLM — would be erased exactly when senior coaches were involved. The signal 'more review = less content' would invert user expectation.",
    result:
      "The overlay logic was rewritten to detect conflict explicitly: fall-unclaimed, takeoff-conflict, landing-conflict, scrubbed-by-guard, no-narrative. Only conflict triggers template rewrite. Aligned cases preserve the LLM's full output and append the coach's observations as additional context. New tests verify both protective rewrites (when needed) and aligned preservation (when not).",
    punchline:
      "A safety net that erases your best work isn't a safety net. It's a ceiling.",
  },
  {
    id: "destructive-sql-scope-creep",
    date: "2026-04-17",
    project: "JumpOnion",
    title: "AI Wiped 20 Customer Diagnoses While 'Fixing' a Cache",
    scenario:
      "After locating the real production blocker — a model file gitignored in deployment, leaving rotation metrics dark for weeks — the AI proceeded to invalidate stale cached results. The mental model was 'reset cache so it can repopulate.' The SQL nullified three independent caches in one statement: the analytics cache (correctly stale), the diagnosis cache (independent of the bug), and the training plan cache (also independent). 20 rows updated. 7 paying customers' personalized diagnosis text and training plans wiped — not recoverable from the call log because LLM output text wasn't persisted there.",
    rule:
      "Cache Invalidation Minimum-Blast + Destructive SQL Preview — never NULL a derived cache unless that specific cache's upstream input changed. Any UPDATE/DELETE touching multiple production customer rows must first run the equivalent SELECT, surface affected user emails, and get explicit human approval before executing.",
    withoutSOP:
      "If the founder hadn't noticed within minutes, the bet would have been: 'the model regenerates similar enough text on retry that no one files a complaint.' That's a bet no one should take with paying customer data. Worse: without the existing audit log identifying exactly which 20 tasks were affected, recovery would have been impossible.",
    result:
      "Same-day notification to 7 affected customers, regenerated diagnoses at no cost. Two new rules entered the SOP: (1) cache invalidation must follow upstream-dependency rules (pose change → only analytics cache; prompt change → only diagnosis cache); (2) any destructive SQL on multi-row production data requires SELECT-preview + explicit founder approval before execution. A new column was added to the LLM call log persisting output text, so the next 'cache wiped' incident is recoverable from the log alone.",
    punchline:
      "Founder absorbs the risk, customer absorbs the value. Single-founder SaaS isn't about never breaking — it's about blast-radius-aware recovery.",
  },
  {
    id: "cross-tool-signal-gap",
    date: "2026-04-21",
    project: "SOP Framework",
    title: "Two AI Tools Followed the Rules — The System Drifted Anyway",
    scenario:
      "Across one afternoon, eight AI sessions ran through a secondary tool, each correctly updating the project's rolling state file. None of them touched the central dashboard — by design. The primary tool's contract was: read the dashboard, sync to it, push to the project tracker. Result: dashboard 5 hours stale. Project tracker 2 days stale. 26 commits and two architecture milestones invisible to the human partner watching the dashboard.",
    rule:
      "Cross-Tool Handoff Signal Gap — node-level compliance does not guarantee system-level compliance when no signal channel exists between nodes. Both tools were correct in isolation. The handoff between them was the failure mode.",
    withoutSOP:
      "Default fix: 'remind the primary tool not to skip dashboard sync.' This addresses one symptom (sync skipped) without addressing the deeper one (the secondary tool runs in between and the primary tool has no way to know that work happened). The drift would silently return.",
    result:
      "Two-sided fix: the secondary tool now writes a signal flag (home_sync_pending) into the rolling state file's frontmatter at session end. The primary tool now checks that flag at session start and back-fills the dashboard before doing any new work. The boundary stays the same — the secondary tool still doesn't sync the dashboard — but the missed work no longer disappears between handoffs.",
    punchline:
      "Multi-tool AI workflows fail at the seams, not the nodes. The cure is signals, not stricter rules.",
  },
  {
    id: "four-line-evidence-scan",
    date: "2026-04-22",
    project: "SOP Framework",
    title: "User Cried Contamination — Four Lines of Evidence Said Zero",
    scenario:
      "Session opened with the founder's worry: 'I just did Project A's work in Project B by accident, in a different tool. Please scan to see if my SOP protected me.' Subjective alarm. The default response would be either reassurance or a panicked cleanup script — both wrong without evidence.",
    rule:
      "Four-Line Evidence Cross-Check — user worry triggers a structured scan, not action. (1) Git logs and working trees in both repos; (2) cross-project keyword grep; (3) cross-tool session metadata; (4) session archive frontmatter. Conclusions only after four lines agree.",
    withoutSOP:
      "Worst case: trust the worry, run a cleanup script that deletes legitimate project content matching common keywords. Cross-project pollution from the cure, not the disease. Better case but still bad: reassure without evidence — the worry returns, and trust in the SOP doesn't grow.",
    result:
      "Five minutes of evidence: zero contamination. The other tool's working directory was correctly locked to Project A throughout. The user's earlier panicked rollback in Project B (driven by the same worry) turned out to be unnecessary — but caused no harm. New standard procedure: any 'I think I contaminated something' worry triggers the four-line scan before any cleanup. A reusable template was distilled from this session and added to the global rules.",
    punchline:
      "AI collaboration's scariest moment isn't an actual mistake — it's thinking you made one. Evidence beats intuition. Both ways.",
  },
  {
    id: "routing-fork-invisible-to-spec",
    date: "2026-04-24",
    project: "JumpOnion",
    title: "One SQL Query Saved Two Hours of Wrong-Path Debugging",
    scenario:
      "A major rewrite shipped. 2,082 tests passing. The founder hit 'regenerate' on a real task and the result came back in 3 seconds — way too fast for the new LLM path that should take 50–60 seconds. Default reaction would be: 'maybe the cache hit, try again.' Or: 'maybe the new code is faster than expected, ship it.'",
    rule:
      "Smoke Tests Trust DB Audit Fields, Not UI Feel — when rewritten code's production behavior doesn't match expectations, the first check is the audit field that records which code path actually ran, not the output content. UI 'feel' (fast, slow, looks right) is ambiguous; an audit row tagged with model name and prompt revision is unambiguous.",
    withoutSOP:
      "An hour of prompt tuning, convinced the new model was producing weak output. Then deeper code reads, more test runs. The actual problem — a feature flag enabled in production routing the request to a parallel deterministic builder, completely bypassing the new code — would have stayed hidden until a teammate said 'wait, did anyone delete the v0 dispatcher branch?'",
    result:
      "A single SQL query against the audit table revealed the truth: the task's training plan came from a deterministic rules builder that another tool's session had wired up days earlier. The rewrite spec had grepped to the wrong level — looking at the entry function, missing the dispatcher fork above it. One Edit removed the fork. Next smoke ran the new path correctly. The deprecated builder's 14,652 lines were deleted in the next sweep. Total debug time: 15 minutes.",
    punchline:
      "When code behaves wrong, ask the database what it actually did. UI guesses. Audit fields know.",
  },
  {
    id: "platform-app-timeout-asymmetry",
    date: "2026-04-24",
    project: "JumpOnion",
    title: "The LLM Succeeded — The Platform Killed the Connection First",
    scenario:
      "First production smoke of a new LLM training plan endpoint. The browser request hung for a minute, then returned 504 Gateway Timeout. A manual page refresh: the new plan was already there, generated and saved. From the backend's view, everything was fine. From the user's view, it failed.",
    rule:
      "Platform Timeout < App Timeout — every deploy platform has gateway timeouts shorter than what the app's own timeout config admits. App-level retries don't help when the gateway killed the client connection before the server finished responding. The audit log table caught what nothing else would have: the call succeeded in 59.3 seconds, against a hidden 60-second platform ceiling.",
    withoutSOP:
      "Default debugging path: bump app timeout to 120s, add retry logic, blame the LLM provider. None of those would have helped — the platform ceiling was already lower than any of them. A real customer paying for plan generation would see 'failed' and never refresh, treating it as a billing error.",
    result:
      "Two parallel small fixes: (1) backend slim prompt — removed display-only fields the LLM was reasoning about unnecessarily, dropping input from 10K to 4K tokens and runtime from 59s to 50–55s, with bonus 20% cost reduction; (2) frontend AbortController plus a polling fallback that quietly fetches the cached result if the POST timed out. The user sees the plan appear, regardless of which path won. New checklist item for any sync HTTP API: measure the actual gateway timeout, design for the case where the LLM exceeds it, and persist every LLM call into an audit table from day one.",
    punchline:
      "Build for the gateway you have, not the gateway you wish for. And log every model call — the audit table will save you twice.",
  },
  {
    id: "cwd-vs-output-ownership",
    date: "2026-04-25",
    project: "SOP Framework",
    title: "The Session Said It Was JumpOnion — The Work Belonged to the Hub",
    scenario:
      "A session opened with the working directory set to a product project, but every file it produced lived in the global config tree — a new skill, a new hook, an updated settings file. Zero changes to the product's source. The work was real, useful, and shipped. But the wrap-up would have logged it under the wrong project. Three different hooks watched this session. None flagged the mismatch.",
    rule:
      "Ownership Follows Output Path, Not Working Directory — when a session's outputs live in shared territory (skills, hooks, global config), the governance owner is the hub project, regardless of where the editor was pointed. The dashboard, milestone log, and project tracker all index by ownership, not by working directory.",
    withoutSOP:
      "Without the rule, the session's archive would have shown 'the product project: 0 files changed' and the actual work — a new user-facing skill plus an enforcement hook — would never be recorded against the hub project. Two months later, an audit would find shipped infrastructure with no documented origin: an 'orphaned asset' problem that compounds with every misattributed session.",
    result:
      "The session honestly self-flagged the violation in its own outcome notes — making the case study possible at all. New rule added: when output path and working directory diverge, ownership follows output path. Both projects' dashboards updated (the working-directory project records 'no changes,' the output-path project records the actual work). A hook upgrade was queued: detect output/cwd mismatch automatically and tag the session as cross-territory.",
    punchline:
      "Honesty beats correctness. Sessions that admit they drifted off-course are repairable. Sessions that hide it become tomorrow's mystery commits.",
  },
];
