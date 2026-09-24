import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff4ea",
      }}
    >
      <div style={{ width: 124, height: 124, borderRadius: "50%", background: "#ff5a36" }} />
    </div>,
    size,
  );
}
