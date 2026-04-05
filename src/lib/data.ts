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
      "Figure skating coaches and parents spend hours reviewing competition videos frame by frame to analyze jump technique — and still miss critical details.",
    value:
      "Upload a video, get AI-powered biomechanical analysis: takeoff angle, rotation count, landing stability, and personalized training plans. What takes a human 30 minutes takes JumpOnion 60 seconds.",
    status: "Live — V1.3+, 931 tests passing",
    stack: ["Next.js", "Modal", "Supabase", "Stripe", "Gemini"],
    url: "https://jumponion.com",
    accent: "#EBF9FF",
  },
  {
    id: "smartlearning",
    name: "SmartLearning",
    tagline: "AI Adaptive Learning Platform",
    problem:
      "Generic study apps don't adapt to how each child actually learns. Kids waste time on things they already know and don't get enough help where they struggle.",
    value:
      "A three-layer anti-hallucination system with Bayesian Knowledge Tracing adapts in real-time. MAP-calibrated assessments track true progress, and a Portfolio builder prepares kids for school applications.",
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
      "Built for my company SunnyUnite to serve enterprise clients like UNIQLO. An AI-trained pricing engine generates competitive, accurate quotes in minutes instead of hours. The training methodology is proprietary — and the system has been in production use since v10.",
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
      "Everyone teaches you how to use AI. I teach you how to systematize your judgment — the only thing AI can't replace.",
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
    subtitle: "Not theory — 13 documented case studies",
    content:
      "Every methodology claim is backed by a real case study from production development. Bug Confession protocol triggered three times on the same pattern — and evolved from 'fix the bug' to 'eliminate the bug factory.' Challenge protocol activated within minutes of being written. These aren't hypotheticals.",
    highlight:
      "13 case studies documenting exactly when the methodology saved real products from real failures.",
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
  { href: "/pricing", label: "Pricing" },
];
