import { ImageResponse } from "next/og";
import { Monogram } from "@/components/ui/Monogram";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0A0A0A";
const cream = "#FEFAF3";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "76px",
        background: cream,
        border: `6px solid ${ink}`,
        color: ink,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 644 }}>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: ink,
            color: cream,
            padding: "10px 18px",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: "-0.055em",
            lineHeight: 1,
            margin: "22px 0 28px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#FFD93D",
            border: `3px solid ${ink}`,
            padding: "8px 16px",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Développeur fullstack · CDI &amp; freelance
        </div>
      </div>

      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 300,
          marginRight: 14,
          background: "#FFB892",
          border: `6px solid ${ink}`,
          boxShadow: `14px 14px 0 ${ink}`,
          transform: "rotate(5deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 240,
            height: 240,
            background: cream,
            border: `4px solid ${ink}`,
          }}
        >
          <Monogram width={192} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 44,
            height: 44,
            background: "#FFD93D",
            border: `4px solid ${ink}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            width: 44,
            height: 44,
            background: "#7FD9B8",
            border: `4px solid ${ink}`,
          }}
        />
      </div>
    </div>,
    size,
  );
}
