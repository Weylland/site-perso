import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#FEFAF3",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "220px",
          height: "220px",
          background: "#93C5FD",
          borderLeft: "6px solid #0A0A0A",
          borderBottom: "6px solid #0A0A0A",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "220px",
          width: "140px",
          height: "140px",
          background: "#FFD93D",
          borderLeft: "6px solid #0A0A0A",
          borderTop: "6px solid #0A0A0A",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "88px",
          height: "88px",
          background: "#FFB892",
          border: "5px solid #0A0A0A",
          fontSize: "36px",
          fontWeight: 700,
          marginBottom: "48px",
        }}
      >
        NS
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 700,
          color: "#0A0A0A",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "24px",
          fontSize: "32px",
          color: "#0A0A0A",
          opacity: 0.75,
        }}
      >
        Développeur fullstack — CDI &amp; freelance
      </div>
    </div>,
    { ...size },
  );
}
