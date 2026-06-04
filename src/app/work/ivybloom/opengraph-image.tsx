import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Statically optimized at build time (readFile of a local asset is not a request-time API).
export const alt =
  "IvyBloom architecture — measure where the student truly is, generate from verified banks, and let nothing count as mastery until an integrity gate verifies it's the student's own work. A system I designed, directed, and validated end-to-end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = "src/app/work/ivybloom/_fonts";

type Tone = "input" | "truth" | "gate" | "output";
const TONES: Record<Tone, { bg: string; border: string; bw: number; title: string; sub: string }> = {
  input: { bg: "#FFFFFF", border: "#CBD5DC", bw: 2, title: "#1A1A1A", sub: "#6B7280" },
  truth: { bg: "#F7F1FF", border: "#A78BFA", bw: 3, title: "#2E2151", sub: "#6D5BB0" },
  gate: { bg: "#FFF6EC", border: "#F4A261", bw: 3, title: "#6B3410", sub: "#B4530A" },
  output: { bg: "#F0F7E8", border: "#7FB069", bw: 2, title: "#28401A", sub: "#4F7A34" },
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
          backgroundColor: "#F7F1FF",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: "3px solid #A78BFA",
            borderRadius: 28,
            padding: 48,
          }}
        >
          {/* header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 56, fontWeight: 700, color: "#1A1A1A" }}>IvyBloom</div>
            <div style={{ fontSize: 22, fontWeight: 400, color: "#8A8F94" }}>cikizeng.com/work</div>
          </div>

          {/* thesis */}
          <div style={{ display: "flex", fontSize: 29, fontWeight: 700, color: "#6D5BB0", marginTop: 14 }}>
            Witness real growth. Verify real learning.
          </div>

          {/* pipeline */}
          <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop: 30 }}>
            <div style={{ display: "flex", width: "100%", alignItems: "stretch" }}>
              <Box title="MAP + BKT" sub="where she truly is" tone="input" grow={1.05} />
              <Arrow />
              <Box title="Bank-first" sub="verified banks decide" tone="truth" grow={1.05} />
              <Arrow />
              <Box title="Trust gate" sub="prove it's her own" tone="gate" grow={1.2} />

              {/* integrity boundary */}
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
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#B4530A", letterSpacing: 1 }}>VERIFIED</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#B4530A", letterSpacing: 1 }}>REAL</div>
                </div>
                <div style={{ fontSize: 30, color: "#B4530A", marginTop: 4 }}>→</div>
              </div>

              <Box title="Real growth" sub="mastery over time" tone="truth" grow={1.05} />
              <Arrow />
              <Box title="Admissions" sub="transcript · list" tone="output" grow={1} />
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
            Designed · Directed AI build · Validated end-to-end
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
