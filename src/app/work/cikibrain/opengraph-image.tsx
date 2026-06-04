import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Statically optimized at build time (readFile of a local asset is not a request-time API).
export const alt =
  "CikiBrain architecture — an AI-agent operating system that enforces verification in code, not prompts, and runs a self-evolving capability ledger: capture silently and PII-safe, enrich into evidence, propose a baseline delta, the operator approves, and the baseline evolves from live signals. Designed, directed, and operated solo.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = "src/app/work/cikibrain/_fonts";

type Tone = "capture" | "process" | "gate" | "evolve";
const TONES: Record<Tone, { bg: string; border: string; bw: number; title: string; sub: string }> = {
  capture: { bg: "#FFFFFF", border: "#CBD5DC", bw: 2, title: "#1A1A1A", sub: "#64748B" },
  process: { bg: "#EEF5F0", border: "#5B9A7A", bw: 3, title: "#234B39", sub: "#36715A" },
  gate: { bg: "#EEF2F6", border: "#64748B", bw: 3, title: "#334155", sub: "#475569" },
  evolve: { bg: "#E4F0E8", border: "#3F7A5E", bw: 3, title: "#234B39", sub: "#36715A" },
};

function Box({ title, sub, tone, grow }: { title: string; sub: string; tone: Tone; grow: number }) {
  const t = TONES[tone];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: grow,
        flexBasis: 0,
        backgroundColor: t.bg,
        border: `${t.bw}px solid ${t.border}`,
        borderRadius: 16,
        padding: "18px 16px",
        height: 132,
      }}
    >
      <div style={{ fontSize: 25, fontWeight: 700, color: t.title, lineHeight: 1.05 }}>{title}</div>
      <div style={{ display: "flex", fontSize: 16, fontWeight: 400, color: t.sub, marginTop: 7, lineHeight: 1.2 }}>
        {sub}
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 8px", fontSize: 30, color: "#AEB6BD" }}>
      →
    </div>
  );
}

export default async function Image() {
  const [geistRegular, geistBold] = await Promise.all([
    readFile(join(process.cwd(), FONT_DIR, "Geist-Regular.woff")),
    readFile(join(process.cwd(), FONT_DIR, "Geist-Bold.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 48,
          backgroundColor: "#EEF5F0",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: "3px solid #5B9A7A",
            borderRadius: 28,
            padding: 48,
          }}
        >
          {/* header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 56, fontWeight: 700, color: "#1A1A1A" }}>CikiBrain</div>
            <div style={{ fontSize: 22, fontWeight: 400, color: "#8A8F94" }}>cikizeng.com/work</div>
          </div>

          {/* thesis */}
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#36715A", marginTop: 14 }}>
            Verification in code. Capability from live signals.
          </div>

          {/* pipeline — the capability-ledger loop */}
          <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop: 30 }}>
            <div style={{ display: "flex", width: "100%", alignItems: "stretch" }}>
              <Box title="Capture" sub="silent · PII-safe" tone="capture" grow={1} />
              <Arrow />
              <Box title="Enrich" sub="into evidence" tone="process" grow={1} />
              <Arrow />
              <Box title="Propose" sub="a baseline delta" tone="process" grow={1} />

              {/* the human decision gate */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#475569", letterSpacing: 1 }}>OPERATOR</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#475569", letterSpacing: 1 }}>APPROVES</div>
                </div>
                <div style={{ fontSize: 30, color: "#475569", marginTop: 4 }}>→</div>
              </div>

              <Box title="Evolve" sub="baseline from signals" tone="evolve" grow={1.15} />
            </div>
          </div>

          {/* footer */}
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 400,
              color: "#8A8F94",
              letterSpacing: 1,
              marginTop: 26,
            }}
          >
            Designed · Directed the AI build · Operated solo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
      ],
    }
  );
}
