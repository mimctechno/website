import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 28,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#00ffaa",
        borderRadius: "12px",
        border: "2px solid #00ffaa",
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
    >
      M
    </div>,
    {
      ...size,
    },
  );
}
