import { ImageResponse } from "next/og";

// Statically optimized at build time (no request-time APIs / no uncached data).
export const alt =
  "JumpOnion — a computer-vision + rule-engine figure-skating jump-diagnosis system I designed, directed, and verified end-to-end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Designed", "Directed AI build", "Verified end-to-end"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          backgroundColor: "#EBF9FF",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            border: "3px solid #54B4DE",
            borderRadius: 28,
            padding: 56,
          }}
        >
          {/* top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: 3,
                color: "#1E5C7A",
                textTransform: "uppercase",
              }}
            >
              Case Study · JumpOnion
            </div>
            <div style={{ fontSize: 22, color: "#8A8F94" }}>cikizeng.com/work</div>
          </div>

          {/* main block */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 104, fontWeight: 700, color: "#1A1A1A", lineHeight: 1 }}>
              JumpOnion
            </div>
            <div style={{ display: "flex", fontSize: 34, color: "#44474A", marginTop: 22, lineHeight: 1.3 }}>
              A computer-vision + rule-engine system that diagnoses figure-skating jumps.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#1E5C7A",
                fontWeight: 600,
                marginTop: 22,
              }}
            >
              Measurement decides. The LLM only translates.
            </div>
          </div>

          {/* chips */}
          <div style={{ display: "flex" }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  fontSize: 23,
                  color: "#1E5C7A",
                  backgroundColor: "#F2FAFE",
                  border: "2px solid #BBE3F2",
                  borderRadius: 999,
                  padding: "10px 22px",
                  marginRight: 14,
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
