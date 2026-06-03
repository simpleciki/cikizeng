import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Statically optimized at build time (readFile of a local asset is not a request-time API).
export const alt =
  "JumpOnion architecture — measurement and a human decide the verdict; the LLM only translates. A system I designed, directed, and verified end-to-end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = "src/app/work/jumponion/_fonts";

type Tone = "input" | "truth" | "llm" | "output";
const TONES: Record<Tone, { bg: string; border: string; bw: number; title: string; sub: string }> = {
  input: { bg: "#FFFFFF", border: "#CBD5DC", bw: 2, title: "#1A1A1A", sub: "#6B7280" },
  truth: { bg: "#EBF9FF", border: "#54B4DE", bw: 3, title: "#0F2A38", sub: "#1E5C7A" },
  llm: { bg: "#F6F1FF", border: "#A78BFA", bw: 2, title: "#3B2A66", sub: "#6D5BB0" },
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
          backgroundColor: "#EBF9FF",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            border: "3px solid #54B4DE",
            borderRadius: 28,
            padding: 48,
          }}
        >
          {/* header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontSize: 56, fontWeight: 700, color: "#1A1A1A" }}>JumpOnion</div>
            <div style={{ fontSize: 22, fontWeight: 400, color: "#8A8F94" }}>cikizeng.com/work</div>
          </div>

          {/* thesis */}
          <div style={{ display: "flex", fontSize: 29, fontWeight: 700, color: "#1E5C7A", marginTop: 14 }}>
            Measurement decides the verdict. The LLM only translates.
          </div>

          {/* pipeline */}
          <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop: 30 }}>
            <div style={{ display: "flex", width: "100%", alignItems: "stretch" }}>
              <Box title="Phone video" sub="upload" tone="input" grow={1} />
              <Arrow />
              <Box title="Measure" sub="CV + biomechanics" tone="input" grow={1.05} />
              <Arrow />
              <Box title="The verdict" sub="rules + human decide" tone="truth" grow={1.25} />

              {/* trust boundary */}
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
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E5C7A", letterSpacing: 1 }}>VERDICT</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E5C7A", letterSpacing: 1 }}>FROZEN</div>
                </div>
                <div style={{ fontSize: 30, color: "#1E5C7A", marginTop: 4 }}>→</div>
              </div>

              <Box title="Translate" sub="LLM · no new numbers" tone="llm" grow={1.05} />
              <Arrow />
              <Box title="Drill plan" sub="rule-gated" tone="output" grow={1} />
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
            Designed · Directed AI build · Verified end-to-end
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
