import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFB892",
        border: "2px solid #0A0A0A",
        color: "#0A0A0A",
        fontSize: 16,
        fontWeight: 700,
      }}
    >
      NS
    </div>,
    { ...size },
  );
}
